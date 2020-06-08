// A pangram is a sentence that contains every letter of the alphabet
// Write a function called isPangram which checks to see if a given sentence is a pangram or not

let alphabet;
let charIndex;

function isPangram(sentence) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let pangramCheck = [];
	sentence = sentence.toLowerCase();
	for (char of sentence) {
		if (alphabet.indexOf(char) !== -1 && !pangramCheck.includes(char)) {
			pangramCheck.push(char);
		}
	}
	return pangramCheck.length === 26;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog'));
