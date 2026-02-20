/**
 * The arguments object in JavaScript is an array-like object that is automatically available inside all 
 * non-arrow functions. It contains all the values of the arguments passed to that specific function call, 
 * allowing functions to handle a variable number of inputs, also known as variadic functions. 
 * 
 * Key Characteristics
 * Array-like, not an Array: It has indexed properties (e.g., arguments[0], arguments[1]) and a length property,
 * but it lacks built-in Array methods like forEach(), map(), or filter().
 * 
 * Accessing Arguments: Individual arguments are accessed using zero-based indexing, just like array elements.
 * length Property: arguments.length returns the actual number of arguments passed to the function, which can be 
 * different from the number of formally declared parameters in the function definition.
 * 
 * Availability: It is a local variable within regular (non-arrow) functions. It is not available inside arrow
 * functions or in strict mode for certain properties like arguments.callee.
 * Synchronization (Non-strict mode only): In non-strict mode with simple parameters, the arguments object's indices
 * and the named parameters are linked (aliased). Changing one affects the other. This "exotic" behavior is removed
 * in strict mode and in functions using modern ES6 features like rest parameters or default parameters. 
 * 
 * Example Usage
 * You can use the arguments object to create functions that accept an indefinite number of arguments. 
 * 
 * 
 */
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumAll(1, 2, 3));      // Output: 6
console.log(sumAll(4, 5, 6, 7));   // Output: 22

/**
 * Converting to a Real Array
 * To use Array methods, you must convert the arguments object into a true Array using methods like Array.from() 
 * or the spread syntax (...): 
 * 
 * */

function myFunction() {
  const args = [...arguments]; // Using spread syntax

  // Now you can use array methods, e.g., forEach
  args.forEach(arg => console.log(arg));
}

/**
 *  Modern Alternative: Rest Parameters 
 * In modern JavaScript (ES6+), rest parameters (...args) are generally preferred over the arguments object. 
 * Rest parameters provide an actual Array instance, which is more predictable and allows direct use of array
 * methods. 

*/

function sumAllModern(...args) {
  return args.reduce((total, current) => total + current, 0);
}

console.log(sumAllModern(1, 2, 3, 4)); // Output: 10
 