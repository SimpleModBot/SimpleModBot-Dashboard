import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/Category';
import { GuildPrefix } from './pages/GuildPrefix';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Appbar } from './components/Appbar';
import { GuildName } from './pages/GuildName';

/*
	This function was brought to you by `Stanford47` :3
*/
function fourohfourkindasucks() {
	return Math.round(Math.random() * 5);
}
let canthisworkplease: number = fourohfourkindasucks();


/*
	This function was brought to you by `itsamedood` 😎👌
 */

//sorry dood
const getRandom404Message = (): string => {
	let messages: Array<string>;

	if (canthisworkplease === 4) messages = [
		"Nothing here but us chickens!",
		"Whatever page you're looking for, it's probably in a galaxy far, far away...",
		"What page is that? I've never seen it before...",
		"Four Oh Four LOLLLL",
		"itsamedood was here, because he got lost :(",
		"Stanford47 hates GNU.",
		"DEATHB4DEFEAT: *indistinguishable screeching noises*",
		"tsx tbh",
		".dnuoF toN 404",
		"CSS is love, CSS is life.",
		"TypeScript > JavaScript.",
		"Imagine searching for a page that doesn't exist lmao",
		"Try searching in the void for that page.",
		"if (page === null) return true;",
		"Even Google couldn't find that page.",
		"What page is that? I've never seen it before...",
		"Why are you looking for that page? It's not here.",
		"Why would you think that page exists? It doesn't.",
		"C++ is the greatest language to exist (other than ts of course)"
	];
	else messages = ["404: page not found."];

	return fourohfourkindasucks() != 4 ? messages[0] : messages[Math.round(Math.random() * messages.length)];
} // dood loves to advertise himself lol - Stanford47

const FourOhFour = () => {
	return (
		<div>
			<h1> Error: 404 <span> <img src='https://cdn.discordapp.com/emojis/912603383041511454.webp?size=96&quality=lossless' style={{ height: '50px', width: '50px' }}></img> </span> </h1>
			<p>{getRandom404Message()}</p>
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
