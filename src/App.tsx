import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/guild/Category';
import { GuildPrefix } from './pages/guild/Prefix';
import { GuildMemberRole } from './pages/guild/MemberRole';
import { AddCC } from './pages/guild/AddCC';
import { DeleteCC } from './pages/guild/DeleteCC';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Appbar } from './components/Appbar';
import { FourOhFour } from './pages/FourOhFour';

function App() {
	if (window.location.host.split('.')[0] !== 'dashboard') return <div></div>;
	return (
		<React.StrictMode>
			<Routes>
				<Route path='/guild/*' element={<Appbar />} />
			</Routes>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<FourOhFour />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/guild/categories' element={<Category />} />
				<Route path='/guild/prefix' element={<GuildPrefix />} />
				<Route path='/guild/memberrole' element={<GuildMemberRole />} />
				<Route path='/guild/addcc' element={<AddCC />} />
				<Route path='/guild/delcc' element={<DeleteCC />} />
			</Routes>
		</React.StrictMode>
	);
}

export default App;
