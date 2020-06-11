// Write a getCard() function which returns a random playing card object, like:
//  {
//    value: 'K',
//    suit: 'clubs'
//  }
//
// Pick a random value from:
//    A,2,3,4,5,6,7,8,9,10,J,Q,K
//
// Pick a random suit from:
//    clubs,spades,hearts,diamonds
// Return both in an object

let values = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];
let suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

function getCard() {
	let obj = {};
	obj.value = values[Math.floor(Math.random() * values.length)];
	obj.suit = suits[Math.floor(Math.random() * suits.length)];
	return obj;
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
