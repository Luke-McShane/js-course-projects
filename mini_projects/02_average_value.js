function avgVal(myArr) {
	// Declare a running total and initialize it to 0
	let total = 0;

	// Loop over all numbers within the array
	for (num of myArr) {
		// Add the current number to the total
		total += num;
	}

	// Return the average by dividing the total by the number of items in the array
	return total / myArr.length;
}

let arr1 = [ 12, 24, 36, 48 ];
let arr2 = [ 123, 54, 345, 33, 56, 2, 623 ];
let arr3 = [ 5545, 6245, 55621, 6635, 623 ];
console.log(`Array: ${arr1} Average: ${avgVal(arr1)}`);
console.log(`Array: ${arr2} Average: ${avgVal(arr2)}`);
console.log(`Array: ${arr3} Average: ${avgVal(arr3)}`);
