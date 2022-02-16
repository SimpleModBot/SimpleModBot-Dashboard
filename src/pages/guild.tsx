import { CategoryContainer, Container, Flex, Grid, TextButton, Title, Button, InputField } from '../utils/styles';
import { IoSettingsOutline, IoChatboxOutline, IoHandLeftSharp } from 'react-icons/io5';
import axios from 'axios';

export function Category() {
	const guildID = localStorage.getItem('guild-id');

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
					<Flex alignItems='center'>
						<IoSettingsOutline size={40} />
						<Title>Guild</Title>
					</Flex>
					<Grid>
						<TextButton onClick={() => (window.location.href = '/guild/prefix')}>Command prefix</TextButton>
						<TextButton onClick={() => (window.location.href = '/guild/memberrole')}>Member role</TextButton>
						<TextButton onClick={() => (window.location.href = '/guild/welcomechannel')}>Welcome channel</TextButton>
						<TextButton onClick={() => (window.location.href = '/guild/antiinvite')}>Anti-invite</TextButton>
					</Grid>
				</CategoryContainer>
				<CategoryContainer>
					<Flex alignItems='center'>
						<IoChatboxOutline size={40} />
						<Title>Custom commands</Title>
					</Flex>
					<Grid>
						<TextButton onClick={() => (window.location.href = '/guild/addcc')}>Add custom command</TextButton>
						<TextButton onClick={() => (window.location.href = '/guild/updatecc')}>Edit custom command</TextButton>
						<TextButton onClick={() => (window.location.href = '/guild/delcc')}>Delete custom command</TextButton>
						<TextButton onClick={() => (window.location.href = '/guild/listcc')}>List custom commands</TextButton>
					</Grid>
				</CategoryContainer>
			</Container>
		</div>
	);
}

export function MemberRole() {
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
					url: `http://localhost:${process.env.PORT || `3001`}/guild/update/`,
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
					url: `http://localhost:${process.env.PORT || `3001`}/guild/update/`,
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
				<Title>Guild member role ID</Title>
				<form>
					<div>
						<label htmlFor='memrole' style={{ fontSize: '20px' }}>
							Current member role ID
						</label>
					</div>
					<InputField id='newmemrole' style={{ margin: '10px 0px' }} />
					<Flex justifyContent='flex-end'>
						<Button
							variant='secondary'
							type='button'
							style={{
								margin: '0px 8px',
							}}
							onClick={() => handleClick('RESET')}
						>
							Reset
						</Button>
						<Button variant='primary' type='button' onClick={() => handleClick()}>
							Save
						</Button>
					</Flex>
				</form>
			</Container>
		</div>
	);
}

export function Prefix() {
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

		if (prefix.length > 0) {
			if (prefix === 'RESET') {
				axios({
					url: `http://localhost:${process.env.PORT || `3001`}/guild/update/`,
					method: `patch`,
					data: {
						Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
						Guild: guildID,
						new: {
							prefix: '\\',
							prefixes: [],
						},
					},
				}).then((v) => {
					console.log('RESET\n', v);
					window.location.reload();
				});
			} else {
				let prefixs = prefix.split(/,\s/g);

				axios({
					url: `http://localhost:${process.env.PORT || `3001`}/guild/update/`,
					method: `patch`,
					data: {
						Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
						Guild: guildID,
						new: {
							prefixes: prefixs,
						},
					},
				}).then((v2) => {
					console.log('SET_NEW_PREFIX\n', v2);
					window.location.reload();
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
			console.log('GET_PREFIXES\n', v);
			// @ts-expect-error
			doc.value = v.data.prefixes.join(', ');
		});
	};

	return (
		<div style={{ padding: '35px' }}>
			<Container style={{ width: '800px' }}>
				<Title>Command prefixes</Title>
				<form>
					<div>
						<label htmlFor='prefix' style={{ fontSize: '20px' }}>
							Current prefixes separated by a comma and space
						</label>
					</div>
					<InputField id='newprefix' style={{ margin: '10px 0px' }} />
					<Flex justifyContent='flex-end'>
						<Button
							variant='secondary'
							type='button'
							style={{
								margin: '0px 8px',
							}}
							onClick={() => handleClick('RESET')}
						>
							Reset
						</Button>
						<Button variant='primary' type='button' onClick={() => handleClick()}>
							Save
						</Button>
					</Flex>
				</form>
			</Container>
		</div>
	);
}

export function WelcomeChannel() {
	const guildID = localStorage.getItem('guild-id');

	if (!guildID || guildID === '' || guildID.length < 1) {
		console.log('guildID is not set');
		window.location.href = '/menu';
	} else {
		console.log('guildID is set');
	}

	const handleClick = (val?: string) => {
		// @ts-expect-error
		let channelID = val || document.getElementById('newchannel').value;

		if (channelID.length > 0) {
			axios({
				url: `http://localhost:${process.env.PORT || `3001`}/guild/get/`,
				method: `put`,
				data: {
					Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
					Guild: guildID,
				},
			}).then((v1) => {
				axios({
					url: `http://localhost:${process.env.PORT || `3001`}/guild/update/`,
					method: `patch`,
					data: {
						Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
						Guild: guildID,
						new: {
							welcomeChannel: channelID,
						},
					},
				}).then((v2) => {
					console.log('SET_WELCOME_CHANNEL\n', v2);
					window.location.reload();
				});
			});
		}
	};

	window.onload = () => {
		let doc = document.getElementById('newchannel');

		axios({
			url: `http://localhost:${process.env.PORT || `3001`}/guild/get/`,
			method: `put`,
			data: {
				Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
				Guild: guildID,
			},
		}).then((v) => {
			console.log('GET_WELCOME_CHANNEL\n', v);
			// @ts-expect-error
			doc.value = v.data.welcomeChannelID;
		});
	};

	return (
		<div style={{ padding: '35px' }}>
			<Container style={{ width: '800px' }}>
				<Title>Welcome channel</Title>
				<form>
					<div>
						<label htmlFor='channel' style={{ fontSize: '20px' }}>
							Current welcome channel ID
						</label>
					</div>
					<InputField id='newchannel' style={{ margin: '10px 0px' }} />
					<Flex justifyContent='flex-end'>
						<Button
							variant='secondary'
							type='button'
							style={{
								margin: '0px 8px',
							}}
							onClick={() => handleClick('RESET')}
						>
							Reset
						</Button>
						<Button variant='primary' type='button' onClick={() => handleClick()}>
							Save
						</Button>
					</Flex>
				</form>
			</Container>
		</div>
	);
}

export function AntiInvite() {
	const guildID = localStorage.getItem('guild-id');

	if (!guildID || guildID === '' || guildID.length < 1) {
		console.log('guildID is not set');
		window.location.href = '/menu';
	} else {
		console.log('guildID is set');
	}

	const handleClick = (val?: string) => {
		// @ts-expect-error
		let channelID = val || document.getElementById('newchannel').value;

		if (channelID.length > 0) {
			axios({
				url: `http://localhost:${process.env.PORT || `3001`}/guild/get/`,
				method: `put`,
				data: {
					Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
					Guild: guildID,
				},
			}).then((v1) => {
				axios({
					url: `http://localhost:${process.env.PORT || `3001`}/guild/update/`,
					method: `patch`,
					data: {
						Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
						Guild: guildID,
						new: {
							antiInvite: channelID,
						},
					},
				}).then((v2) => {
					console.log('SET_ANTI_INVITE\n', v2);
					window.location.reload();
				});
			});
		}
	};

	window.onload = () => {
		let doc = document.getElementById('newchannel');

		axios({
			url: `http://localhost:${process.env.PORT || `3001`}/guild/get/`,
			method: `put`,
			data: {
				Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
				Guild: guildID,
			},
		}).then((v) => {
			console.log('GET_ANTI_INVITE\n', v);
			// @ts-expect-error
			doc.value = v.data.antiInvite;
		});
	};

	return (
		<div style={{ padding: '35px' }}>
			<Container style={{ width: '800px' }}>
				<Title>Anti-invite</Title>
				<form>
					<div>
						<label htmlFor='channel' style={{ fontSize: '20px' }}>
							Current anti-invite
						</label>
					</div>
					<InputField id='newchannel' style={{ margin: '10px 0px' }} />
					<Flex justifyContent='flex-end'>
						<Button
							variant='secondary'
							type='button'
							style={{
								margin: '0px 8px',
							}}
							onClick={() => handleClick('RESET')}
						>
							Reset
						</Button>
						<Button variant='primary' type='button' onClick={() => handleClick()}>
							Save
						</Button>
					</Flex>
				</form>
			</Container>
		</div>
	);
}
