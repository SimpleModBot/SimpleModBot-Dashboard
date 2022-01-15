import { AppbarStyle } from '../utils/styles';

export const Appbar = () => {
	const guildID = localStorage.getItem('guild-id');

	return (
		<AppbarStyle>
			{/* <img
				style={{
					width: '45px',
					height: '45px',
					borderRadius: '50%',
					boxShadow: '0px 1px 5px 0px #000000',
				}}
				src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=128`}
			></img> */}
			<p style={{ fontSize: '20px', fontWeight: 'normal' }}>Configuring {guildID}</p>
		</AppbarStyle>
	);
};
