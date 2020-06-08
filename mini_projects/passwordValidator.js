// Write a JS function
// It accepts 2 arguments: username and password
// Password must:
//  - Be at least 8 characters long
//  - Not contain spaces
//  - Not contain the username
// If all conditions are met, return true, otherwise return false

function isValidPassword(username, password) {
	// Converting to lowercase to equalize both arguments.
	username = username.toLowerCase();
	password = password.toLowerCase();
	// Checking that the password doesn't contain the username or spaces, and that it's length is at least 8 characters
	return !(password.includes(username) || password.includes(' ') || password.length < 8);
}

let username = 'luke';
let password1 = 'passwordluke';
let password2 = 'pass';
let password3 = 'my password';
let password4 = 'workingpass';

console.log(`Username: ${username} Password: ${password1} Valid Password: ${isValidPassword(username, password1)}`);
console.log(`Username: ${username} Password: ${password2} Valid Password: ${isValidPassword(username, password2)}`);
console.log(`Username: ${username} Password: ${password3} Valid Password: ${isValidPassword(username, password3)}`);
console.log(`Username: ${username} Password: ${password4} Valid Password: ${isValidPassword(username, password4)}`);
