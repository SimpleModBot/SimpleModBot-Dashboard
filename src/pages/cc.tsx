import axios from 'axios';
import { InputField, Flex, Button, Container, Title } from '../utils/styles';
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
			window.location.reload();
		});
	};

	return (
		<div style={{ padding: '35px' }}>
			<Container style={{ width: '800px' }}>
				<Title>Create a custom command</Title>
				<form>
					<label htmlFor='cc' style={{ fontSize: '20px' }}>
						Name
					</label>
					<InputField id='newccname' style={{ margin: '10px 0px' }} />
					<label htmlFor='cc' style={{ fontSize: '20px' }}>
						Response
					</label>
					<InputField id='newccres' style={{ margin: '10px 0px' }} />
					<Flex justifyContent='flex-end'>
						<Button variant='primary' type='button' onClick={() => handleClick()}>
							Save
						</Button>
					</Flex>
				</form>
			</Container>
		</div>
	);
}

export function EditCC() {
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
			url: `http://localhost:${process.env.PORT || `3001`}/cc/update/`,
			method: `patch`,
			data: {
				Token: `OTAwOTg3NjU4NDEwLjMwMzI=`,
				Guild: guildID,
				Command: ccname,
				new: {
					Response: ccres,
				},
			},
		}).then((v) => {
			console.log('UPDATE_CC\n', v);
			window.location.reload();
		});
	};

	return (
		<div style={{ padding: '35px' }}>
			<Container style={{ width: '800px' }}>
				<Title>Edit a custom command</Title>
				<form>
					<label htmlFor='cc' style={{ fontSize: '20px' }}>
						Name
					</label>
					<InputField id='newccname' style={{ margin: '10px 0px' }} />
					<label htmlFor='cc' style={{ fontSize: '20px' }}>
						New response
					</label>
					<InputField id='newccres' style={{ margin: '10px 0px' }} />
					<Flex justifyContent='flex-end'>
						<Button variant='primary' type='button' onClick={() => handleClick()}>
							Save
						</Button>
					</Flex>
				</form>
			</Container>
		</div>
	);
}

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
			window.location.reload();
		});
	};

	return (
		<div style={{ padding: '35px' }}>
			<Container style={{ width: '800px' }}>
				<Title>Delete a custom command</Title>
				<form>
					<label htmlFor='cc' style={{ fontSize: '20px' }}>
						Name
					</label>
					<InputField id='ccname' style={{ margin: '10px 0px' }} />
					<Flex justifyContent='flex-end'>
						<Button variant='danger' type='button' onClick={() => handleClick()}>
							Delete
						</Button>
					</Flex>
				</form>
			</Container>
		</div>
	);
}

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
		document.getElementById('list').innerHTML =
			cmds
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
				<div id='list'></div>
			</Container>
		</div>
	);
}
