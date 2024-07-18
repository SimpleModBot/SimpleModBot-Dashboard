import { useNavigate } from 'react-router-dom';
import { GuildItem } from '../components/GuildItem';
import { Container } from '../utils/styles';

export function Menu() {
	const navigate = useNavigate();
	const handleClick = (guildID: string) => {
		localStorage.setItem('guild-id', guildID);
		navigate('/guild/categories');
	};

	const oauthState = localStorage.getItem('oauth-state');
	const tokenType = localStorage.getItem('token-type');
	const accessToken = localStorage.getItem('access-token');

	if (oauthState !== 'success') window.location.href = '/';
	return (
		<div>
			<Container>
				<h2 style={{ fontWeight: 300 }}>Select a Guild to edit.</h2>
				<div>
					{
						// @ts-expect-error
						JSON.parse(localStorage.getItem('guilds'))?.map((guild) => {
							return (
								<div style={{ cursor: 'pointer', color: '#0645AD' }} key={guild.id} onClick={() => handleClick(guild.id)}>
									<GuildItem guild={guild} />
								</div>
							);
						}) || <div>Please refresh the guild cache to view the list.</div>
					}
				</div>
			</Container>
		</div>
	);
}
