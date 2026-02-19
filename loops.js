/**
 * JavaScript provides several loop mechanisms to execute a block of code repeatedly until a specific 
 * condition is met. The most common types include: for loop: Used when the number of iterations is known.
 * */ 

// A for loop in JavaScript is a control flow statement used to repeatedly execute a block of code a 
// known number of times. It is ideal for tasks such as iterating over arrays or performing an action 
// a specific number of times. 

// Syntax
// The syntax for a for loop is:
for (initialization; condition; update) {
  // code block to be executed
}

// The loop header inside the parentheses consists of three optional expressions separated by semicolons: 
// initialization: Executed once before the loop starts. It typically initializes a counter variable (e.g., let i = 0).
// condition: Evaluated before each loop iteration. If it is true, the code block executes. If false, the loop terminates.
// update: Executed after each iteration of the code block. It typically increments or decrements the counter variable (e.g., i++ or i--). 

// Example
// Here is an example that prints numbers from 0 to 4 to the console: 
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4

// Other Types of For Loops in JavaScript
// Besides the classic for loop, JavaScript offers other types for different iteration needs: 
// for...in loop: Iterates over the enumerable properties (keys) of an object. It is not recommended
// for use with arrays where index order is important.

const person = {fname:"John", lname:"Doe", age:25};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for...of loop: Iterates over the values of an iterable object (including Array, String, Map, Set, etc.). 
// This is generally the preferred method for iterating over arrays.

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(car);
}

for (let i = 0; i < 5; i++) {
  // code to be executed repeatedly
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

/**
 * while loop: Repeats a block of code as long as a specified condition evaluates to true. 
 * The condition is checked before each iteration.
*/

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4

/** do...while loop: Similar to the while loop, but it guarantees that the code block will be executed
at least once before checking the condition.
*/


let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4

/**for...in loop: Iterates over the enumerable properties (keys) of an object. 
 */

const person = { fname: "John", lname: "Doe", age: 25 };
for (const key in person) {
  console.log(key + ": " + person[key]);
}
// Output: fname: John, lname: Doe, age: 25

// for...of loop: Iterates over the values of iterable objects like Arrays, strings, maps, and sets.

const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (const car of cars) {
  console.log(car);
}
// Output: BMW, Volvo, Saab, Ford

/**Array.prototype.forEach() method: A concise way to iterate over the elements of an array, 
*executing a provided function once for each element. It is a popular, more modern approach for arrays.
*/

const numbers = [45, 4, 9, 16, 25];
numbers.forEach((value) => {
  console.log(value);
});
// Output: 45, 4, 9, 16, 25

/**Note that you cannot use break or continue within a forEach loop. */
