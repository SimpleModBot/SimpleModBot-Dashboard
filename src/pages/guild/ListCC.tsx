import axios from 'axios';
import { Container, Title } from '../../utils/styles';

export function ListCC() {
    const guildID = localStorage.getItem('guild-id');

    if (!guildID || guildID === '' || guildID.length < 1) {
        console.log('guildID is not set');
        window.location.href = '/menu';
    } else {
        console.log('guildID is set');
    }

    window.onload = async () => {
        let cmds: any = [];

        await axios({
            url: `http://localhost:${process.env.PORT || `3001`}/cc/`,
            method: `put`,
            data: {
                Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
                Guild: guildID,
            },
        }).then(async (v) => {
            console.log('LIST_CC\n', v);
            await v.data.forEach((val: any) => {
                cmds.push(val);
            });
        });

        // @ts-expect-error
        document.getElementById('list').innerHTML = cmds
            .map((val: any) => {
                // return `<div style="cursor: pointer; color: #0645AD; padding: 5px 0px;">${val.Command}</div>`;
                return `<div style={{ cursor: 'pointer', color: '#0645AD', padding: '5px 0px', }}>Name: ${val.Command}</div><div>Response: ${val.Response}</div><div>​</div>`;
            })
            .join('') || '<div>No commands found</div>';
    };

    return (
        <div style={{ padding: '35px' }}>
            <Container style={{ width: '800px' }}>
                <Title>All custom commands</Title>
                <div id="list"></div>
            </Container>
        </div>
    );
}
