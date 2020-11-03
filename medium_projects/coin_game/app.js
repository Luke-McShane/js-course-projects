const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

// Logic that checks if two DOM elements are touching
// If so, return true, else false
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();


	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const moveCoin = () => {
	console.log(coin.width);
	console.log(coin.height);
	const x = Math.floor(Math.random() * (window.innerWidth - coin.width));
	const y = Math.floor(Math.random() * (window.innerHeight - coin.height));
	console.log(x);
	console.log(y);
	coin.style.left = `${x}px`;
	coin.style.top = `${y}px`;
}

const getPos = pos => !pos ? 100 : parseInt(pos.slice(0, -2));

window.addEventListener('keyup', function (e) {
	console.log(`Key Pressed: ${e.key}`);
	switch (e.key) {
		case ('ArrowUp' || 'Up'):
			avatar.style.top = `${getPos(avatar.style.top) - 25}px`;
			break;
		case ('ArrowDown' || 'Down'):
			avatar.style.top = `${getPos(avatar.style.top) + 25}px`;
			break;
		case ('ArrowLeft' || 'Left'):
			avatar.style.left = `${getPos(avatar.style.left) - 25}px`;
			avatar.style.transform = 'scale(-1, 1)';
			break;
		case ('ArrowRight' || 'Right'):
			avatar.style.left = `${getPos(avatar.style.left) + 25}px`;
			avatar.style.transform = 'scale(1, 1)';
			break;
		default:
			break;
	}

	if (isTouching(player, coin)) { moveCoin(); }
})

moveCoin();