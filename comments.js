// In JavaScript, you can add comments using two types of syntax: single-line comments and multi-line comments. 
// Comments are ignored by the JavaScript engine and are used by developers to explain code, add documentation,
// and temporarily disable code during testing or debugging. 

// Types of Comments
// Single-line comments: These start with two forward slashes (//).
// // All text after // to the end of the line is treated as a comment.

// This is a single-line comment
let name = "JavaScript"; // An inline comment

// Multi-line comments: These start with /* and end with */. Any text between the opening 
// and closing tags can span multiple lines.

/*
This is a multi-line comment.
It can be used for longer explanations or to comment out
blocks of code.
*/

// JSDoc Comments
// For documentation purposes, a specific convention called JSDoc is used. These comments start with 
/** and allow editors to provide type hints and auto-completion. 
 
/**
 * Calculates the area of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} - The area of the rectangle.
 */
function calculateArea(length, width) {
  return length * width;
}