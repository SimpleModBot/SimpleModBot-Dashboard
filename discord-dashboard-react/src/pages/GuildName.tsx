import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuildContext } from '../utils/ctx/GuildContext';
import { Button, Container, Flex, InputField, Title } from '../utils/styles';

export function GuildName() {
	const { guildID } = useContext(GuildContext);

	if (!guildID || guildID == '' || guildID.length < 1) {
		console.log('guildID is not set');
		window.location.href = '/menu';
	} else {
        console.log('guildID is set');
    };
    
    const navigate = useNavigate();
    const handleClick = (val?: string) => {
        // @ts-expect-error
        const v = val || document.getElementById('newname').value;
        navigate({
            pathname: `/guild/categories`,
            search: `?name=${v.replace(/ /g, '')}`,
        });
    };

    return (
        <div style={{ padding: '35px', }}>
            <Container style={{ width: '800px', }}>
                <Title>Change the bot nickname</Title>
                <form>
                    <div>
                        <label htmlFor='name' style={{ fontSize: '20px' }}>
                            Current nickname
                        </label>
                    </div>
                    <InputField id='newname' style={{ margin: '10px 0px' }} />
                    <Flex justifyContent='flex-end'>
                        <Button variant='secondary' type='button' style={{
                            margin: '0px 8px',
                        }} onClick={() => handleClick('RESET')}>Reset</Button>
                        <Button variant='primary' type='button' onClick={() => handleClick()}>Save</Button>
                    </Flex>
                </form>
            </Container>
        </div>
    );
};