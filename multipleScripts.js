// 1. Adding Multiple External JavaScript Files

// You simply add multiple <script> tags.

// Example:

<!DOCTYPE html>
<html>
<head>
    <title>Multiple Scripts</title>
</head>
<body>

<h1>Multiple JS Files Example</h1>

<script src="file1.js"></script>
<script src="file2.js"></script>
<script src="file3.js"></script>

</body>
</html>


// Important: Script Loading Order

// JavaScript files load top to bottom.

// That means:

<script src="file1.js"></script>
<script src="file2.js"></script>

// file1.js loads first

// file2.js loads second

// If file2.js depends on something from file1.js, it must come after it.

// Example of Dependency

// file1.js
function greet() {
    console.log("Hello!");
}

// file2.js
greet(); // This works only if file1.js is loaded first


// If you reverse the order ❌ → error occurs.

// Using defer (Recommended for Multiple Scripts)

// Instead of placing scripts at the bottom, you can use defer inside <head>.

<head>
    <script src="file1.js" defer></script>
    <script src="file2.js" defer></script>
</head>

// What defer Does:

// Downloads scripts in parallel

// Executes them in order

// Runs after HTML is fully loaded

// This is the modern best practice.

// Using async (Be Careful)
<script src="file1.js" async></script>


// Downloads in parallel

// Executes immediately when ready

// ❌ Order is NOT guaranteed

// So don’t use async if scripts depend on each other.

// Best Practice in Real Projects

// In large projects

// ✔ Separate logic into different files
// ✔ Keep utilities in one file
// ✔ Keep main logic in another
// ✔ Use defer
// ✔ Maintain correct order

// Example structure:

// js/
//  ├── utils.js
//  ├── api.js
//  ├── main.js
