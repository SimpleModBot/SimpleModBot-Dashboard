import axios from 'axios';
import { Button, Container, Flex, InputField, Title } from '../../utils/styles';

export function GuildPrefix() {
    const guildID = localStorage.getItem('guild-id');

    if (!guildID || guildID === '' || guildID.length < 1) {
        console.log('guildID is not set');
        window.location.href = '/menu';
    } else {
        console.log('guildID is set');
    }

    const handleClick = (val?: string) => {
        // @ts-expect-error
        let prefix = val || document.getElementById('newprefix').value;

        if (prefix.length > 0 && !prefix.includes(' ')) {
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
    };

    window.onload = () => {
        let doc = document.getElementById('newprefix');

        axios({
            url: `http://localhost:${process.env.PORT || `3001`}/guild/get/`,
            method: `put`,
            data: {
                Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                Guild: guildID,
            },
        }).then((v) => {
            console.log('GET_PREFIX\n', v);
            // @ts-expect-error
            doc.value = v.data.prefix;
        });
    };

    return (
        <div style={{ padding: '35px' }}>
            <Container style={{ width: '800px' }}>
                <Title>Update the command prefix</Title>
                <form>
                    <div>
                        <label htmlFor="prefix" style={{ fontSize: '20px' }}>
                            Current prefix
                        </label>
                    </div>
                    <InputField id="newprefix" style={{ margin: '10px 0px' }} />
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
