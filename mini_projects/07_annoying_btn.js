// Select the button
const btn = document.querySelector('#btn');
// Add an event onMouseOver
btn.addEventListener('mouseover', function() {
	// The the button to a random place on the screen using the Math.random function
	btn.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
	btn.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
});

btn.addEventListener('click', function() {
	btn.innerText = "I'VE BEEN CLICKED!";
	document.body.style.backgroundColor = 'green';
});
