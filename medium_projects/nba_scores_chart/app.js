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

const parentUl = document.createElement('ul');
for (game of warriorsGames) {
	const gameLi = document.createElement('li');
	const { homeTeam, awayTeam } = game;
	gameLi.innerText = `${awayTeam.team} @ ${homeTeam.team} `;
	gameLi.innerHTML += boldScore(awayTeam.points, homeTeam.points);
	const warriors = awayTeam.team === 'Golden State' ? awayTeam : homeTeam;
	gameLi.classList.add(warriors.isWinner === true ? 'win' : 'loss');
	parentUl.append(gameLi);
}
document.body.prepend(parentUl);

// function createChart(gameList) {

// }
