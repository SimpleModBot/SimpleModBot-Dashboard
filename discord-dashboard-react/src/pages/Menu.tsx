import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuildContext } from '../utils/ctx/GuildContext';
import { mockGuilds } from '../__mocks__/guilds';
import { GuildItem } from '../components/GuildItem';
import { Container } from '../utils/styles';

export function Menu() {
    const navigate = useNavigate();
    const { updateGuildID } = useContext(GuildContext);
    const handleClick = (guildID: string) => {
        updateGuildID(guildID);
        navigate('/guild/categories');
    };

    return (
        <div>
            <Container>
                <h2 style={{ fontWeight: 300 }}>Select a Guild to edit.</h2>
                <div>
                    {mockGuilds.map((guild) => (
                        <div key={guild.id} onClick={() => handleClick(guild.id)}>
                            <GuildItem guild={guild} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};