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
const boldScore = (awayPoints, homePoints) =>
	awayPoints > homePoints ? `<b>${awayPoints}</b>-${homePoints}` : `${awayPoints}-<b>${homePoints}</b>`;

const scoreLine = ({ awayTeam, homeTeam }) => {
	let line;
	line = `${awayTeam.team} @ ${homeTeam.team} `;
	line += boldScore(awayTeam.points, homeTeam.points);
	return line;
};

const addClass = ({ awayTeam, homeTeam }, myTeam) => {
	const target = awayTeam.team === myTeam ? awayTeam : homeTeam;
	return target.isWinner === true ? 'win' : 'loss';
};

const createChart = (gameList, myTeam) => {
	const parentUl = document.createElement('ul');
	parentUl.classList.add('table');
	for (game of gameList) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = scoreLine(game);
		gameLi.classList.add(addClass(game, myTeam));
		parentUl.append(gameLi);
	}
	return parentUl;
};

const container = document.createElement('div');
container.setAttribute('id', 'container');

const gsw = document.createElement('div');
const gswHeader = document.createElement('h2');
gswHeader.innerText = 'Golden State Warriors';
gsw.prepend(gswHeader);
gsw.setAttribute('id', 'gsw');

const hr = document.createElement('div');
const hrHeader = document.createElement('h2');
hrHeader.innerText = 'Houston Rockets';
hr.prepend(hrHeader);

hr.setAttribute('id', 'hr');

gsw.append(createChart(warriorsGames, 'Golden State'));
hr.append(createChart(warriorsGames, 'Houston'));

document.body.prepend(container);
container.prepend(gsw, hr);
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
