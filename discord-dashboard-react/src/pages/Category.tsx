import { CategoryContainer, Container, Flex, Grid, TextButton, Title } from '../utils/styles';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaQuestionCircle } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GuildContext } from '../utils/ctx/GuildContext';
import { useContext } from 'react';

export function Category() {
	const { guildID } = useContext(GuildContext);

	if (!guildID || guildID == '' || guildID.length < 1) {
		console.log('guildID is not set');
		window.location.href = '/menu';
	} else {
		console.log('guildID is set');
	}

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const prefix = searchParams.get('prefix')?.toString() || '\\';
	const name = searchParams.get('name')?.toString() || 'SimpleModBot';

	if (prefix.length > 0 && !prefix.includes(' ') && prefix !== '\\') {
		if (prefix == 'RESET') {
			console.log('RESET');
			setTimeout(() => {
				navigate({ pathname: '/guild/categories', search: '?prefix=\\' });
			}, 1000);
		} else console.log('SET_NEW_PREFIX\n', prefix);
	}

	if (name.length > 0 && !name.includes(' ') && name !== 'SimpleModBot') {
		if (name == 'RESET') {
			console.log('RESET');
			setTimeout(() => {
				navigate({ pathname: '/guild/categories', search: '?name=SimpleModBot' });
			}, 1000);
		} else console.log('SET_NEW_NAME\n', name);
	}

	return (
		<div style={{ padding: '50px 0' }}>
			<Container>
				<CategoryContainer>
					<Flex alignItems='center'>
						<IoSettingsOutline size={40} />
						<Title>Basic</Title>
					</Flex>
					<Grid>
						<TextButton onClick={() => navigate('/guild/prefix')}>Command prefix</TextButton>
					</Grid>
				</CategoryContainer>
				<CategoryContainer>
					<Flex alignItems='center'>
						<FaQuestionCircle size={40} />
						<Title>Random</Title>
					</Flex>
					<Grid>
						<TextButton onClick={() => navigate('/guild/name')}>Bot nickname</TextButton>
					</Grid>
				</CategoryContainer>
			</Container>
		</div>
	);
}
