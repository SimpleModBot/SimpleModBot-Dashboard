import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/guild/Category';
import { GuildPrefix } from './pages/guild/Prefix';
import { GuildMemberRole } from './pages/guild/MemberRole';
import { AddCC } from './pages/guild/AddCC';
import { DeleteCC } from './pages/guild/DeleteCC';
import { ListCC } from './pages/guild/ListCC';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Appbar } from './components/Appbar';
// @ts-ignore
import { FourOhFour } from './pages/other/FourOhFour';
import { About } from './pages/other/About';

function App() {
	if (window.location.host.split('.')[0] !== 'dashboard') return <div></div>;
	return (
		<React.StrictMode>
			<Routes>
				<Route path='/guild/*' element={<Appbar />} />
			</Routes>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<FourOhFour />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/about' element={<About />} />
				<Route path='/guild/categories' element={<Category />} />
				<Route path='/guild/prefix' element={<GuildPrefix />} />
				<Route path='/guild/memberrole' element={<GuildMemberRole />} />
				<Route path='/guild/addcc' element={<AddCC />} />
				<Route path='/guild/delcc' element={<DeleteCC />} />
				<Route path='/guild/listcc' element={<ListCC />} />
			</Routes>
		</React.StrictMode>
	);
}

export default App;
