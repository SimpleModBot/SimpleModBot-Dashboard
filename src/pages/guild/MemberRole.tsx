import axios from 'axios';
import { Button, Container, Flex, InputField, Title } from '../../utils/styles';

export function GuildMemberRole() {
    const guildID = localStorage.getItem('guild-id');

    if (!guildID || guildID === '' || guildID.length < 1) {
        console.log('guildID is not set');
        window.location.href = '/menu';
    } else {
        console.log('guildID is set');
    }

    const handleClick = (val?: string) => {
        // @ts-expect-error
        let memrole = val || document.getElementById('newmemrole').value;

        if (memrole.length > 0 && !memrole.includes(' ')) {
            if (memrole === 'RESET') {
                axios({
                    url: `http://localhost:${
                        process.env.PORT || `3001`
                    }/guild/update/`,
                    method: `patch`,
                    data: {
                        Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                        Guild: guildID,
                        new: {
                            memberRoleID: '',
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
                            memberRoleID: memrole,
                        },
                    },
                }).then((v) => {
                    console.log('SET_NEW_PREFIX\n', v);
                });
            }
        }
    };

    window.onload = () => {
        let doc = document.getElementById('newmemrole');

        axios({
            url: `http://localhost:${process.env.PORT || `3001`}/guild/get/`,
            method: `put`,
            data: {
                Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                Guild: guildID,
            },
        }).then((v) => {
            console.log('GET_ROLE\n', v);
            // @ts-expect-error
            doc.value = v.data.memberRoleID;
        });
    };

    return (
        <div style={{ padding: '35px' }}>
            <Container style={{ width: '800px' }}>
                <Title>Update the guild member role ID</Title>
                <form>
                    <div>
                        <label htmlFor="memrole" style={{ fontSize: '20px' }}>
                            Current member role ID
                        </label>
                    </div>
                    <InputField id="newmemrole" style={{ margin: '10px 0px' }} />
                    <Flex justifyContent="flex-end">
                        <Button
                            variant="secondary"
                            type="button"
                            style={{
                                margin: '0px 8px',
                            }}
                            onClick={() => handleClick('RESET')}
                        >
                            Reset
                        </Button>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={() => handleClick()}
                        >
                            Save
                        </Button>
                    </Flex>
                </form>
            </Container>
        </div>
    );
}
