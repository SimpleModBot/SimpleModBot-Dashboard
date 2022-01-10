import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GuildContext } from './utils/ctx/GuildContext';
import { Category } from './pages/Category';
import { GuildPrefix } from './pages/GuildPrefix';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Appbar } from './components/Appbar';

function App() {
	const [guildID, setGuildID] = useState('');
	function updateGuildID(id: string) {
		setGuildID(id);
	}

	return (
		<GuildContext.Provider value={{ guildID, updateGuildID: updateGuildID }}>
			<Routes>
				<Route path='/guild/*' element={<Appbar />} />
			</Routes>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/guild/categories' element={<Category />} />
				<Route path='/guild/prefix' element={<GuildPrefix />} />
			</Routes>
		</GuildContext.Provider>
	);
}

export default App;
