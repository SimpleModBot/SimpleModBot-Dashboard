import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { HomeButton } from '../utils/styles/index';
import '../utils/css/home.css';

export function Home() {
	window.onload = () => {
		const fragment = new URLSearchParams(window.location.hash.slice(1));
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
		localStorage.removeItem('guild-id');

		if (accessToken && tokenType) {
			localStorage.setItem('oauth-state', 'success');
			localStorage.setItem('access-token', accessToken);
			localStorage.setItem('token-type', tokenType);
		}
		if (!accessToken && !tokenType) {
			if (localStorage.getItem('oauth-state') === 'success') {
				const token = localStorage.getItem('access-token');
				const type = localStorage.getItem('token-type');

				if (token && type) {
					window.location.hash = `#access_token=${token}&token_type=${type}`;
					window.location.reload();
				} else {
					localStorage.setItem('oauth-state', 'error');
					localStorage.removeItem('access-token');
					localStorage.removeItem('token-type');
					return;
				}
			} else {
				localStorage.setItem('oauth-state', 'error');
				localStorage.removeItem('access-token');
				localStorage.removeItem('token-type');
				return;
			}
		}
		const oauthState = localStorage.getItem('oauth-state');

		if (oauthState === 'success') {
			// @ts-expect-error
			document.getElementById('login').innerText = 'Click to proceed to guilds.';
			// window.location.href = '/menu';

			// fetch('https://discord.com/api/users/@me', {
			// 	headers: {
			// 		authorization: `${tokenType} ${accessToken}`,
			// 	},
			// })
			// 	.then((result) => result.json())
			// 	.then((response) => {
			// 		const { username, discriminator } = response;
			// 		// @ts-expect-error
			// 		document.getElementById('info').innerText = `Welcome ${username}#${discriminator}!\nPlease don't execute anything in the console.`;
			// 	})
			// 	.catch(console.error);
		}
	};

	return (
		<div
			style={{
				height: '100%',
				padding: '10px 25px',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<div id='info'>Not currently logged in.</div>
			<div>
				<HomeButton
					onClick={() => {
						if (localStorage.getItem('oauth-state') === 'success') window.location.href = '/menu';
						else window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=911112976793215006&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20guilds';
					}}
					id='login'
				>
					<FaDiscord size={45} color='5865F2' />
					<p style={{ fontSize: '20px' }}>Login with Discord</p>
				</HomeButton>
				<HomeButton
					onClick={() => {
						window.location.href = 'https://discord.gg/49KeKwXc8g';
					}}
				>
					<FaQuestionCircle size={45} />
					<p style={{ fontSize: '20px' }}>Support Server</p>
				</HomeButton>
			</div>

			<div
				style={{
					display: 'flex',
					width: '200px',
					justifyContent: 'space-between',
				}}
			>
				<a className='a'>Privacy Policy</a>
				<a className='a'>Contact</a>
			</div>
		</div>
	);
}
