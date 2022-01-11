import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { HomeButton } from '../utils/styles/index';
import '../utils/css/home.css';

export function Home() {
	function generateRandomString() {
		let randomString = '';
		const randomNumber = Math.floor(Math.random() * 10);

		for (let i = 0; i < 20 + randomNumber; i++) {
			randomString += String.fromCharCode(33 + Math.floor(Math.random() * 94));
		}

		return randomString;
	}

	window.onload = () => {
		const fragment = new URLSearchParams(window.location.hash.slice(1));
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

		if (!accessToken) return;

		fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then((result) => result.json())
			.then((response) => {
				const { username, discriminator } = response;
				// @ts-expect-error
				document.getElementById('info').innerText = `Welcome ${username}#${discriminator}!`;
			})
			.catch(console.error);

		if (!accessToken) {
			const randomString = generateRandomString();
			localStorage.setItem('oauth-state', randomString);
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
						window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=911112976793215006&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmenu&response_type=token&scope=identify%20guilds';
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
