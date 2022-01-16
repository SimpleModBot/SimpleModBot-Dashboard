import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/Category';
import { GuildPrefix } from './pages/GuildPrefix';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Appbar } from './components/Appbar';
import { GuildName } from './pages/GuildName';

const FourOhFour = () => {
	return (
		<div>
			<h1>404</h1>
			<p>This page does not exist.</p>
		</div>
	);
};

function App() {
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
				<Route path='/guild/name' element={<GuildName />} />
			</Routes>
		</React.StrictMode>
	);
}

export default App;
