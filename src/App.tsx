import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Appbar } from './components/Appbar';
import { Particle } from './components/Particle';
import { Userbar } from './components/UserBar';
import { FourOhFour, About } from './pages/other';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Docs } from './pages/Docs';

import { User, CacheUser, CacheGuild, CacheAdditional } from './pages/user';

import { AddCC, DeleteCC, EditCC, ListCC } from './pages/cc';
import { Category, Prefix, MemberRole, WelcomeChannel, AntiInvite } from './pages/guild';

function App() {
	return (
		<React.StrictMode>
			<Routes>
				<Route path='/guild/*' element={<Appbar />} />
				<Route path='/' element={<div><Particle /><Userbar /></div>} />
				<Route path='/menu' element={<Userbar />} />
				<Route path='/user/cache/*' element={<Userbar />} />
			</Routes>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<FourOhFour />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/about' element={<About />} />
				<Route path="/docs" element={<Docs />} />

				<Route path='/user' element={<User />} />
				<Route path='/user/cache/user' element={<CacheUser />} />
				<Route path='/user/cache/guild' element={<CacheGuild />} />
				<Route path='/user/cache/additional' element={<CacheAdditional />} />

				<Route path='/guild/categories' element={<Category />} />

				<Route path='/guild/prefix' element={<Prefix />} />
				<Route path='/guild/memberrole' element={<MemberRole />} />
				<Route path='/guild/welcomechannel' element={<WelcomeChannel />} />
				<Route path='/guild/antiinvite' element={<AntiInvite />} />

				<Route path='/guild/addcc' element={<AddCC />} />
				<Route path='/guild/updatecc' element={<EditCC />} />
				<Route path='/guild/delcc' element={<DeleteCC />} />
				<Route path='/guild/listcc' element={<ListCC />} />
				
			</Routes>
			
		</React.StrictMode>
	);
}

export default App;
