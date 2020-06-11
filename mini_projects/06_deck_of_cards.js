const myDeck = {
	deck: [],
	drawnCards: [],
	suits: [ 'Hearts', 'Diamonds', 'Spades', 'Clubs' ],
	// We don't create an array on our own due to how we can easily use the split method to create an array from this string
	values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
	initializeDeck() {
		// We use destructuring to assign object properties to these variables
		const { suits, values, deck } = this;
		// We split the string to create an array
		for (let value of values.split(',')) {
			for (let suit of suits) {
				// We push an object, using shorthand object properties to determine the key-value paairs
				deck.push({ value, suit });
			}
		}
	},
	shuffleDeck() {
		const { deck } = this;
		// Using the Fisher-Yates method to shuffle an array
		// We work from the end of the array backward to the beginning
		for (let i = deck.length - 1; i > 0; i--) {
			// Let j be an index between the start of the array and the current index of i
			let j = Math.floor(Math.random() * (i + 1));
			// Swap the places of the values in the i and j indices
			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
		}
	},
	drawCard() {
		const { deck, drawnCards } = this;
		// Pop a card object from the end of the deck (this mutates the deck) and push it to the drawnCards array,
		// and then return the card
		const card = deck.pop();
		drawnCards.push(card);
		return card;
	},
	drawCards(num) {
		const cards = [];
		// Call the drawCard method based on how many cards the user wants to draw, and then return these cards in an array
		for (let i = 0; i < num; i++) {
			cards.push(this.drawCard());
		}
		return cards;
	}
};

myDeck.initializeDeck();
console.log(myDeck.deck);

myDeck.shuffleDeck();
console.log(myDeck.deck);

myDeck.drawCard();
console.log(myDeck.deck);
console.log(myDeck.drawnCards);

myDeck.drawCards(3);
console.log(myDeck.deck);
console.log(myDeck.drawnCards);
