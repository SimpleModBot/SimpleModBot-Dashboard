import { Link } from 'react-router-dom';
import '../utils/css/about.css';
import '../utils/css/fourohfour.css';

export function About() {
	return (
		<div>
			<h1 className='AboutHeader'>About my bot!</h1>
			<div></div>
			<p className='AboutText'>sheisse</p>
		</div>
	);
}

function getRandom404Message() {
	let messages: Array<string> = [
		'Nothing here but us chickens!',
		"Whatever page you're looking for, it's probably in a galaxy far, far away...",
		"What page is that? I've never seen it before...",
		'Four Oh Four LOLLLL',
		'itsamedood was here, because he got lost :(',
		'Stanford47 hates GNU.',
		'DEATHB4DEFEAT: *indistinguishable screeching noises*',
		'tsx tbh',
		'.dnuoF toN 404',
		'CSS is love, CSS is life.',
		'TypeScript > JavaScript.',
		"Imagine searching for a page that doesn't exist lmao",
		'Try searching in the void for that page.',
		'if (page === null) return true;',
		"Even Google couldn't find that page.",
		"What page is that? I've never seen it before...",
		"Why are you looking for that page? It's not here.",
		"Why would you think that page exists? It doesn't.",
		'The requested page does not exist or is not implemented.',
	];

	return messages[~~(Math.random() * messages.length)];
}

export function FourOhFour() {
	return (
		<div>
			<h1 className='FourOhFourHeader'>404</h1>
			<div></div>
			<p className='FourOhFourMessage'>{getRandom404Message()}</p>
			<div className='FourOhFourBackHome'>
				<Link to='/'>Back to homepage.</Link>
			</div>
		</div>
	);
}
