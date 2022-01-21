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
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export function Category() {
    const guildID = localStorage.getItem('guild-id');

    if (!guildID || guildID === '' || guildID.length < 1) {
        console.log('guildID is not set');
        window.location.href = '/menu';
    } else {
        console.log('guildID is set');
    }

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const prefix = searchParams.get('prefix')?.toString() || '\\';

    if (prefix.length > 0 && !prefix.includes(' ') && prefix !== '\\') {
        if (prefix === 'RESET') {
            axios({
                url: `http://localhost:${
                    process.env.PORT || `3001`
                }/guild/update/`,
                method: `patch`,
                data: {
                    Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                    Guild: guildID,
                    new: {
                        prefix: '\\',
                    },
                },
            }).then((v) => {
                console.log('RESET\n', v);
            });
        } else {
            axios({
                url: `http://localhost:${
                    process.env.PORT || `3001`
                }/guild/update/`,
                method: `patch`,
                data: {
                    Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                    Guild: guildID,
                    new: {
                        prefix: prefix,
                    },
                },
            }).then((v) => {
                console.log('SET_NEW_PREFIX\n', v);
            });
        }
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
                        <TextButton onClick={() => navigate('/guild/member')}>
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
