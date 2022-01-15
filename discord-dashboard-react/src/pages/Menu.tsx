import { useNavigate } from 'react-router-dom';
import { GuildItem } from '../components/GuildItem';
import { Container } from '../utils/styles';

export function Menu() {
	const navigate = useNavigate();
	let guilds: any[] = [];
	const handleClick = (guildID: string) => {
		localStorage.setItem('guild-id', guildID);
		navigate('/guild/categories');
	};

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
				response.forEach((element: any) => {
					guilds.push(element);
				});
				localStorage.setItem('guilds', JSON.stringify(guilds));
				window.location.reload();
			})
			.catch(console.error);
	}

	return (
		<div>
			<div onClick={() => recache()}>Reload guild cache?</div>
			<Container>
				<h2 style={{ fontWeight: 300 }}>Select a Guild to edit.</h2>
				<div>
					{
						// @ts-expect-error
						JSON.parse(localStorage.getItem('guilds')).map((guild) => {
							return (
								<div key={guild.id} onClick={() => handleClick(guild.id)}>
									<GuildItem guild={guild} />
								</div>
							);
						})
					}
				</div>
			</Container>
		</div>
	);
}
