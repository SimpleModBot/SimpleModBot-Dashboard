import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/guild/Category';
import { GuildPrefix } from './pages/guild/GuildPrefix';
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
			</Routes>
		</React.StrictMode>
	);
}

export default App;
