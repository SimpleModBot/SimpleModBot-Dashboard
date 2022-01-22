import axios from 'axios';
import { Container, Title, InputField, Flex, Button } from '../../utils/styles';
import mongoose from 'mongoose';

export function AddCC() {
    const guildID = localStorage.getItem('guild-id');

    if (!guildID || guildID === '' || guildID.length < 1) {
        console.log('guildID is not set');
        window.location.href = '/menu';
    } else {
        console.log('guildID is set');
    }

    const handleClick = () => {
        // @ts-expect-error
        let ccname = document.getElementById('newccname').value || btoa(Math.random() * Date.now());
        // @ts-expect-error
        let ccres = document.getElementById('newccres').value || btoa(Math.random() * Date.now());

        if (ccname.length < 0 || ccname.includes(' ')) return;
        if (ccres.length < 0) return;

        axios({
            url: `http://localhost:${process.env.PORT || `3001`}/cc/new/`,
            method: `post`,
            data: {
                Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                _id: new mongoose.Types.ObjectId(),
                Guild: guildID,
                Command: ccname,
                Response: ccres,
            },
        }).then((v) => {
            console.log('ADD_CC\n', v);
        });
    };

    return (
        <div style={{ padding: '35px' }}>
            <Container style={{ width: '800px' }}>
                <Title>Update the guild member role ID</Title>
                <form>
                    <label htmlFor="cc" style={{ fontSize: '20px' }}>
                        Name
                    </label>
                    <InputField id="newccname" style={{ margin: '10px 0px' }} />
                    <label htmlFor="cc" style={{ fontSize: '20px' }}>
                        Response
                    </label>
                    <InputField id="newccres" style={{ margin: '10px 0px' }} />
                    <Flex justifyContent="flex-end">
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
