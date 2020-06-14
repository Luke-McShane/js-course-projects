const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

// For each list item we want awayTeam at homeTeam scoreAway-scoreHome, with the winning score
// highlighted and the background corresponding to whether Golden State won or lost
//
//
// Returns the the string literal of innerHTML with either the away points or home points bolded depending on which team has the most points
const boldScore = (awayPoints, homePoints) =>
	awayPoints > homePoints ? `<b>${awayPoints}</b>-${homePoints}` : `${awayPoints}-<b>${homePoints}</b>`;

// Return the innerHTML after destructuring the game object passed and utilizing the boldScore function
const scoreLine = ({ awayTeam, homeTeam }) => {
	let line;
	line = `${awayTeam.team} @ ${homeTeam.team} `;
	line += boldScore(awayTeam.points, homeTeam.points);
	return line;
};

// Add a class to the list item - win or loss - depending on whether the team we target won or lost their game
// The class is not directly added here, but rather we return the string which is added to the class from the line of invokation
const addClass = ({ awayTeam, homeTeam }, myTeam) => {
	const target = awayTeam.team === myTeam ? awayTeam : homeTeam;
	return target.isWinner === true ? 'win' : 'loss';
};

// Create a chart based on the list of games we pass and the team we want to target
const createChart = (gameList, myTeam) => {
	// Create a parent unordered list that will house all the games
	const parentUl = document.createElement('ul');
	// Add a table class - see stylesheet
	parentUl.classList.add('table');
	// Iterate through each game object within the gameList array
	for (game of gameList) {
		// Create the list item
		const gameLi = document.createElement('li');
		// Add the scoreline
		gameLi.innerHTML = scoreLine(game);
		// Add the class
		gameLi.classList.add(addClass(game, myTeam));
		// Append this list item to the unorered list
		parentUl.append(gameLi);
	}
	// Return the unordered list, now housing all game list items
	return parentUl;
};

// Create a container that will house all game lists
const container = document.createElement('div');
// Set the id attribute of the container to 'container'
container.setAttribute('id', 'container');

// Create a div element that will house one set of games
const gsw = document.createElement('div');
// Create a header for this set of games
const gswHeader = document.createElement('h2');
// Set the inner text of the header
gswHeader.innerText = 'Golden State Warriors';
// Prepend the header to the beginning of the div
gsw.prepend(gswHeader);
gsw.setAttribute('id', 'gsw');

const hr = document.createElement('div');
const hrHeader = document.createElement('h2');
hrHeader.innerText = 'Houston Rockets';
hr.prepend(hrHeader);
hr.setAttribute('id', 'hr');

// Append the games from both teams' viewpoints, to the div, by invoking the createChart method and passing the list of games and the target team
gsw.append(createChart(warriorsGames, 'Golden State'));
hr.append(createChart(warriorsGames, 'Houston'));

// Prepend the container to the body of the document, ensuring the HTML is added before the script is inserted
container.prepend(gsw, hr);
document.body.prepend(container);
//
// First instance of the project, before partitioning the project into functions through code refactoring
// const parentUl = document.createElement('ul');
// for (game of warriorsGames) {
// 	const gameLi = document.createElement('li');
// 	const { homeTeam, awayTeam } = game;
// 	gameLi.innerText = `${awayTeam.team} @ ${homeTeam.team} `;
// 	gameLi.innerHTML += boldScore(awayTeam.points, homeTeam.points);
// 	const warriors = awayTeam.team === 'Golden State' ? awayTeam : homeTeam;
// 	gameLi.classList.add(warriors.isWinner === true ? 'win' : 'loss');
// 	parentUl.append(gameLi);
// }
