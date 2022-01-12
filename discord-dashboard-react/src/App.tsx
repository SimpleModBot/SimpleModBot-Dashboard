import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/Category';
import { GuildPrefix } from './pages/GuildPrefix';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Appbar } from './components/Appbar';
import { GuildName } from './pages/GuildName';
import { GuildContext } from './utils/ctx/GuildContext';

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
				<Route path='/guild/name' element={<GuildName />} />
			</Routes>
		</GuildContext.Provider>
	);
}

export default App;
