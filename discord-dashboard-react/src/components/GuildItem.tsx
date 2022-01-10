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
        <img className='image' src={guild.icon} alt={guild.name} />
        <p style={{ fontSize: '20px', }}>{guild.name}</p>
    </GuildItemStyle>
);