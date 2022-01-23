import {
    CategoryContainer,
    Container,
    Flex,
    Grid,
    TextButton,
    Title,
} from '../../utils/styles';
import { IoSettingsOutline, IoChatboxOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export function Category() {
    const guildID = localStorage.getItem('guild-id');
    const navigate = useNavigate();

    if (!guildID || guildID === '' || guildID.length < 1) {
        console.log('guildID is not set');
        window.location.href = '/menu';
    } else {
        console.log('guildID is set');
    }


    return (
        <div style={{ padding: '50px 0' }}>
            <Container>
                <CategoryContainer>
                    <Flex alignItems="center">
                        <IoSettingsOutline size={40} />
                        <Title>General</Title>
                    </Flex>
                    <Grid>
                        <TextButton onClick={() => navigate('/guild/prefix')}>
                            Command prefix
                        </TextButton>
                        <TextButton onClick={() => navigate('/guild/memberrole')}>
                            Member role
                        </TextButton>
                    </Grid>
                </CategoryContainer>
                <CategoryContainer>
                    <Flex alignItems="center">
                        <IoChatboxOutline size={40} />
                        <Title>Custom commands</Title>
                    </Flex>
                    <Grid>
                        <TextButton onClick={() => navigate('/guild/addcc')}>
                            Add custom command
                        </TextButton>
                        <TextButton onClick={() => navigate('/guild/delcc')}>
                            Delete custom command
                        </TextButton>
                        <TextButton onClick={() => navigate('/guild/listcc')}>
                            List custom commands
                        </TextButton>
                    </Grid>
                </CategoryContainer>
            </Container>
        </div>
    );
}
