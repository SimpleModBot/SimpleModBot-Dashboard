import { CategoryContainer, Container, Flex, Grid, TextButton, Title } from '../utils/styles';

export function User() {
	const user = localStorage.getItem('user-info');
	// @ts-expect-error
	const cuser = JSON.parse(user) || {};

	return (
		<div style={{ padding: '50px 0' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<img
					style={{
						width: '128px',
						height: '128px',
						borderRadius: '50%',
						boxShadow: '0px 1px 5px 0px #000000',
					}}
					src={`https://cdn.discordapp.com/avatars/${cuser.id || '801294818839756811'}/${cuser.avatar || 'd5f3d2a661eb0f8b05e6b062a44dfe14'}.png?size=128`}
					alt='user-icon'
				></img>
			</div>
			<div
				style={{
					display: 'flex',
					padding: '5px 0px',
					justifyContent: 'center',
					fontSize: '40px',
					width: '100%',
				}}
			>
				{cuser.username || 'Not logged in.'}
			</div>

			<Container>
				<CategoryContainer>
					<Flex alignItems='center'>
						<Title>Cache</Title>
					</Flex>
					<Grid>
						<TextButton onClick={() => (window.location.href = '/user/cache/user')}>User</TextButton>
						<TextButton onClick={() => (window.location.href = '/user/cache/guild')}>Guild</TextButton>
						<TextButton onClick={() => localStorage.clear()}>Delete all cache</TextButton>
					</Grid>
				</CategoryContainer>
			</Container>
		</div>
	);
}

export function CacheUser() {
	const oauthState = localStorage.getItem('oauth-state');
	const tokenType = localStorage.getItem('token-type');
	const accessToken = localStorage.getItem('access-token');

	if (oauthState !== 'success') window.location.href = '/';
	function recache() {
		localStorage.removeItem('oauth-state');
		localStorage.removeItem('user-info');
		localStorage.removeItem('guild-id');

		fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then((result) => result.json())
			.then((response) => {
				localStorage.setItem('oauth-state', 'success');
				localStorage.setItem('user-info', JSON.stringify(response));
				window.location.reload();
			})
			.catch(console.error);
	}

	function delcache() {
		localStorage.removeItem('user-info');
		window.location.reload();
	}

	return (
		<div id='die' style={{ padding: '50px 0' }}>
			<Container>
				<CategoryContainer>
					<Flex alignItems='center'>
						<Title>User caching</Title>
					</Flex>
					<Grid>
						<TextButton onClick={() => {recache()}}>Refresh</TextButton>
						<TextButton onClick={() => {delcache()}}>Delete</TextButton>
					</Grid>
				</CategoryContainer>
			</Container>
		</div>
	);
}

export function CacheGuild() {
	const oauthState = localStorage.getItem('oauth-state');
	const tokenType = localStorage.getItem('token-type');
	const accessToken = localStorage.getItem('access-token');

	if (oauthState !== 'success') window.location.href = '/';
	function recache() {
		localStorage.removeItem('guild-id');
		localStorage.removeItem('guilds');

		fetch('https://discord.com/api/users/@me/guilds', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then((result) => result.json())
			.then((response) => {
				let guilds: any[] = [];
				response.forEach((element: any) => {
					if ((element.permissions & 0x20) === 0x20) guilds.push(element);
				});
				localStorage.setItem('guilds', JSON.stringify(guilds));
				window.location.reload();
			})
			.catch(console.error);
	}

	function delcache() {
		localStorage.removeItem('guild-id');
		localStorage.removeItem('guilds');
		window.location.reload();
	}

	return (
		<div style={{ padding: '50px 0' }}>
			<Container id='die'>
				<CategoryContainer>
					<Flex alignItems='center'>
						<Title>Guild caching</Title>
					</Flex>
					<Grid>
						<TextButton
							onClick={() => {
								recache();
							}}
						>
							Refresh
						</TextButton>
						<TextButton
							onClick={() => {
								delcache();
							}}
						>
							Delete
						</TextButton>
					</Grid>
				</CategoryContainer>
			</Container>
		</div>
	);
}
