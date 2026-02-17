/**
 * JavaScript provides several loop mechanisms to execute a block of code repeatedly until a specific 
 * condition is met. The most common types include: for loop: Used when the number of iterations is known.
 * */ 

for (let i = 0; i < 5; i++) {
  // code to be executed repeatedly
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

/** The syntax is for (initialization; condition; increment/decrement).
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

for...of loop: Iterates over the values of iterable objects like Arrays, strings, maps, and sets.

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
