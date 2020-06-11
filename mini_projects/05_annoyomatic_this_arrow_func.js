// const annoyer = {
// 	phrases: [ 'Oh Ma Gawd!', 'REEEEEE!', 'Literally!', "I Can't Even!", 'Totes!', 'No Way!' ],
// 	pickPhrase() {
// 		console.log(this);
// 		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
// 	},
// 	start() {
// 		console.log(this);
// 		setInterval(function() {
// 			console.log(this);
// 			this.pickPhrase();
// 		}, 1000);
// 	}
// };

// When we call annoyer.start(), the method will first log the annoyer as 'this', for it is the parent object.
// setInterval will then be unable to call annoyer.pickPhrase(), because the parent object is the window object.
// This is because setInterval is a method of the window object, and is where it's executed, not from annoyer
// annoyer.start();

//
//
//
//
//
//
const annoyer = {
	phrases: [ 'Oh Ma Gawd!', 'REEEEEE!', 'Literally!', "I Can't Even!", 'Totes!', 'No Way!' ],
	pickPhrase() {
		// console.log(this);
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	},
	start() {
		// console.log(this);
		// Each setInterval ran has its own separate ID, which we can store in a variable and use to clear (stop) the interval running
		this.timerId = setInterval(() => {
			// console.log(this);
			console.log(this.pickPhrase());
		}, 1000);
	},

	stop() {
		clearInterval(this.timerId);
	}
};

annoyer.start();
// However, when we call 'this.pickPhrase()' using an arrow function, we get different functionality.
// Recall that arrow functions don't get their own special 'this' keyword
// Thus, because the 'this' within the setInterval() has not had its own 'this' defined, the 'this' keyword will retain the
// definition from the lexical scope, which pertains to the annoyer object
