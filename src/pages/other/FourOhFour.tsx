/**
 * 404 Code moved from App.tsx to here by itsamedood :)
 */

import "../../utils/css/fourohfour.css";
import { Link } from "react-router-dom";

function getRandom404Message() {
    let messages: Array<string> = [];

    if (~~(Math.random() * 4)) {
        messages = [
            'Nothing here but us chickens!',
            'Whatever page you\'re looking for, it\'s probably in a galaxy far, far away...',
            'What page is that? I\'ve never seen it before...',
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
            'Even Google couldn\'t find that page.',
            'What page is that? I\'ve never seen it before...',
            'Why are you looking for that page? It\'s not here.',
            'Why would you think that page exists? It doesn\'t.',
        ];
    } else messages['The requested page does not exist or is not implemented.'];

    if (messages.length == 1) return messages[0];

    return messages[~~(Math.random() * messages.length)];
};

export function FourOhFour() {
    return (
        <div>
            <h1 className="FourOhFourHeader">404</h1>
            <div></div>
            <p className="FourOhFourMessage">{getRandom404Message()}</p>
            <div className="FourOhFourBackHome"> {/* i love my classes leave me alone @DEATH */}
                <Link to='/'>Back to homepage.</Link>
            </div>
        </div>
    );
};
