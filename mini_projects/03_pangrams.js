// A pangram is a sentence that contains every letter of the alphabet
// Write a function called isPangram which checks to see if a given sentence is a pangram or not

let alphabet;
let charIndex;

// This version adds a letter to the pangramCheck array each time a new letter is found in the sentence parameter
// If pangramCheck isn't the length of the alphabet, then sentence doesn't include all alphabetical letters
function isPangram(sentence) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let pangramCheck = [];
	sentence = sentence.toLowerCase();
	for (char of sentence) {
		// indexOf is used because .includes is not supported in IE
		if (alphabet.indexOf(char) !== -1 && !pangramCheck.includes(char)) {
			pangramCheck.push(char);
		}
	}
	return pangramCheck.length === 26;
}

// This function works in a manner opposite to the one above, in that it iterates through the alphabet, checking the sentence
// parameter that it contains that current letter iterated on
function isPangramAlt(sentence) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (let char of alphabet) {
		if (sentence.toLowerCase().indexOf(char) === -1) return false;
	}
	return true;
}

let sentence = 'the quick brown fox jumps over the lazy dog';
console.log(isPangram(sentence));
console.log(isPangramAlt(sentence));
