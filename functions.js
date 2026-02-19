/**
 * JavaScript functions are reusable blocks of code that perform a specific task, take optional 
 * inputs (parameters/arguments), and can return a value. They are fundamental building blocks in
 * JavaScript, which treats functions as first-class objects, meaning they can be assigned to variables,
 * passed as arguments, and returned from other functions
 */

/**Key Concepts
 * Definition vs. Invocation: Defining a function specifies what it does, but it does not execute the 
 * code inside it. The function runs only when it is called or "invoked" by using its name followed by 
 * parentheses (e.g., myFunction() ).
 * Parameters vs. Arguments: Parameters are the placeholders or variable names listed in the function 
 * definition. Arguments are the actual values passed to the function when it is called.
 * return Statement: The return statement is used to send a value back to the calling code. When return is
 * executed, the function stops running immediately. If a function does not have a return statement or has 
 * an empty one, it implicitly returns undefined.
 * Scope: Variables defined inside a function are local to that function and cannot be accessed from outside
 *  it. Functions can, however, access variables from their parent or global scopes. 
 * Ways to Define Functions
 * JavaScript offers several ways to define functions: 
 * Function Declarations
 * Syntax: function name(parameters) { ...code... }.
 * Hoisting: They are "hoisted," meaning they can be called in your code before they are textually defined.
 * Call the function first
 */ 

greet("World"); // Output: Hello, World!
function greet(name) { // Function declaration
  console.log(`Hello, ${name}!`);
}
/**
 * Function Expressions
 * Syntax: A function created as part of an expression, often assigned to a variable.
 * Hoisting: They are not hoisted. You can only call a function expression after the line where it is defined.
*/
const multiply = function(a, b) { // Function expression
  return a * b;
};
console.log(multiply(4, 3)); // Output: 12

/**
 * Arrow Functions
 * Syntax: A more concise syntax for function expressions using =>. They are particularly useful for short,
 *  anonymous functions and callbacks.
 * Features: They do not have their own this, arguments, or super bindings, which can simplify code in 
 * certain contexts.
*/

const add = (a, b) => a + b; // Arrow function
console.log(add(5, 10)); // Output: 15

/**
 * Immediately Invoked Function Expressions (IIFEs)
 * Syntax: A function expression that runs immediately after it is defined, often used to create a 
 * private scope for variables.
 * */

(function() {
  var privateVariable = "I am private";
  // Code runs immediately
})();
// privateVariable is not accessible here */