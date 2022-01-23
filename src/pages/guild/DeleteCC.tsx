import axios from 'axios';
import { Container, Title, InputField, Flex, Button } from '../../utils/styles';

export function DeleteCC() {
    const guildID = localStorage.getItem('guild-id');

    if (!guildID || guildID === '' || guildID.length < 1) {
        console.log('guildID is not set');
        window.location.href = '/menu';
    } else {
        console.log('guildID is set');
    }

    const handleClick = () => {
        // @ts-expect-error
        let ccname = document.getElementById('ccname').value || btoa(Math.random() * Date.now());
        if (ccname.length < 0 || ccname.includes(' ')) return;

        axios({
            url: `http://localhost:${process.env.PORT || `3001`}/cc/delete/`,
            method: `delete`,
            data: {
                Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                Guild: guildID,
                Command: ccname,
            },
        }).then((v) => {
            console.log('DELETE_CC\n', v);
        });
    };

    return (
        <div style={{ padding: '35px' }}>
            <Container style={{ width: '800px' }}>
                <Title>Delete a custom command</Title>
                <form>
                    <label htmlFor="cc" style={{ fontSize: '20px' }}>
                        Name
                    </label>
                    <InputField id="ccname" style={{ margin: '10px 0px' }} />
                    <Flex justifyContent="flex-end">
                        <Button
                            variant="danger"
                            type="button"
                            onClick={() => handleClick()}
                        >
                            Delete
                        </Button>
                    </Flex>
                </form>
            </Container>
        </div>
    );
}
