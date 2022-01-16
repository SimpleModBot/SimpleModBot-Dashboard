import { GuildItemStyle } from '../utils/styles';
import '../utils/css/menu.css';

type Props = {
    guild: {
        id: string;
        name: string;
        icon: string;
    };
};

export const GuildItem = ({ guild }: Props) => (
    <GuildItemStyle>
        <img className='image' src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=128`} alt={guild.name} />
        <p style={{ fontSize: '20px', }}>{guild.name}</p>
    </GuildItemStyle>
);