import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuildContext } from '../utils/ctx/GuildContext';
import { Button, Container, Flex, InputField, Title } from '../utils/styles';

export function GuildPrefix() {
	const { guildID } = useContext(GuildContext);

	if (!guildID || guildID == '' || guildID.length < 1) {
		console.log('guildID is not set');
		window.location.href = '/menu';
	} else {
        console.log('guildID is set');
    };
    
    const navigate = useNavigate();
    const handleClick = (value: string) => {
        // @ts-expect-error
        const v = document.getElementById('newprefix').value;
        navigate({
            pathname: `/guild/categories`,
            search: `?prefix=${v.replace(/ /g, '')}`,
        });
    };

    return (
        <div style={{ padding: '35px', }}>
            <Container style={{ width: '800px', }}>
                <Title>Update the command prefix</Title>
                <form>
                    <div>
                        <label htmlFor='prefix' style={{ fontSize: '20px' }}>
                            Current prefix
                        </label>
                    </div>
                    <InputField id='newprefix' style={{ margin: '10px 0px' }} />
                    <Flex justifyContent='flex-end'>
                        <Button variant='secondary' type='button' style={{
                            margin: '0px 8px',
                        }}>Reset</Button>
                        <Button variant='primary' type='button' onClick={() => handleClick('g')}>Save</Button>
                    </Flex>
                </form>
            </Container>
        </div>
    );
};