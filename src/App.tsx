import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Appbar } from './components/Appbar';
import { Userbar } from './components/UserBar';
import { FourOhFour, About } from './pages/other';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

import { AddCC, DeleteCC, ListCC } from './pages/cc';
import { Category, Prefix, MemberRole } from './pages/guild';

function App() {
	if (window.location.host.split('.')[0] !== 'dashboard') return <div>Did you mean to go to https://dashboard.localhost:3000/ ?</div>;

	return (
		<React.StrictMode>
			<Routes>
				<Route path='/guild/*' element={<Appbar />} />
				<Route path='/' element={<Userbar />} />
			</Routes>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<FourOhFour />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/about' element={<About />} />

				<Route path='/guild/categories' element={<Category />} />

				<Route path='/guild/prefix' element={<Prefix />} />
				<Route path='/guild/memberrole' element={<MemberRole />} />

				<Route path='/guild/addcc' element={<AddCC />} />
				<Route path='/guild/delcc' element={<DeleteCC />} />
				<Route path='/guild/listcc' element={<ListCC />} />
			</Routes>
		</React.StrictMode>
	);
}

export default App;
