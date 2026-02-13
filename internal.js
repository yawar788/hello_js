// In JavaScript, there are three main ways to add (embed) JS into an HTML file:


// Inline JavaScript


// Internal JavaScript


// External JavaScript


// Let’s understand each clearly 👇


// 1. Inline JavaScript

// JavaScript written directly inside an HTML tag.

// Example:

<button onclick="alert('Hello Yawar!')">Click Me</button>

// 2. Internal JavaScript

// JavaScript written inside the same HTML file using the <script> tag.

<!DOCTYPE html>
<html>
<head>
    <title>Internal JS</title>
</head>
<body>

<h1>Internal JavaScript Example</h1>

<script>
    function greet() {
        alert("Hello Yawar!");
    }
</script>

<button onclick="greet()">Click Me</button>

</body>
</html>

// Where to Place <script>?

// Inside <head>
// OR

// Before closing </body> (Recommended for better performance)

// 3. External JavaScript (Best Practice)

// JavaScript written in a separate .js file.

// Step 1: Create a JS file

// script.js

function greet() {
    alert("Hello Yawar!");
}

// Step 2: Link it in HTML

<!DOCTYPE html>
<html>
<head>
    <title>External JS</title>
</head>
<body>

<h1>External JavaScript Example</h1>

<button onclick="greet()">Click Me</button>

<script src="script.js"></script>

</body>
</html>

// Why External JS is Best?

// ✔ Clean code
// ✔ Easy maintenance
// ✔ Reusable
// ✔ Faster loading (cached by browser)
// ✔ Professional practice