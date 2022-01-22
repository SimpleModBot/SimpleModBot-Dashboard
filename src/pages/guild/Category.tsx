// btoa(Math.random() * Date.now())
import {
    CategoryContainer,
    Container,
    Flex,
    Grid,
    TextButton,
    Title,
} from '../../utils/styles';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaQuestionCircle } from 'react-icons/fa';
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
                        <FaQuestionCircle size={40} />
                        <Title>Random</Title>
                    </Flex>
                    <Grid>
                        <TextButton onClick={() => navigate('/guild/name')}>
                            Bot nickname
                        </TextButton>
                    </Grid>
                </CategoryContainer>
            </Container>
        </div>
    );
}
