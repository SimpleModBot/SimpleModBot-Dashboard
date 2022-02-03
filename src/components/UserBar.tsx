import { Link } from 'react-router-dom';

export const Userbar = () => {
	const user = localStorage.getItem('user-info');
	if (!user) return <Link to='/user'>You are missing the user cache. Please login and load the cache in user settings to view the site properly</Link>;
	const cuser = JSON.parse(user);

	return (
		<div
			style={{
				display: 'inline-flex',
				justifyContent: 'right',
				width: '100%',
				alignItems: 'center',
				padding: '10px',
				boxSizing: 'border-box',
				backgroundColor: '#2121212a',
				borderBottom: '1px solid #58585863',
				borderLeft: '1px solid #58585863',
				borderRight: '1px solid #58585863',
				fontSize: '20px',
				fontWeight: 'normal',
			}}
		>
			<Link to='/' style={{ marginLeft: '50%', marginRight: '36%', padding: '1px 10px' }}>Home</Link>
			<Link to='/user/' style={{ padding: '1px 10px' }}>
				{cuser.username}
			</Link>
			<img
				style={{
					width: '45px',
					height: '45px',
					borderRadius: '50%',
					boxShadow: '0px 1px 5px 0px #000000',
				}}
				src={`https://cdn.discordapp.com/avatars/${cuser.id}/${cuser.avatar}.png?size=128`}
				alt='user-icon'
			></img>
		</div>
	);
};
