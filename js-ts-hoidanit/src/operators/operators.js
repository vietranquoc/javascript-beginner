// Operators in JavaScript

// Toán tử số học (Arithmetic Operators)
const a = 10;
const b = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); // Exponentiation

// So sánh a++ và ++a
let x = 5;
console.log("x++ =", x++); // Post-increment
console.log("After x++:", x);
x = 5; // Reset x
console.log("++x =", ++x);  // Pre-increment
console.log("After ++x:", x);


// Toán tử so sánh (Comparison Operators)
const c = 5; // number
const d = '5'; // string 

console.log("\nComparison Operators:");
console.log("c == d:", c == d);   // Loose equality
console.log("c === d:", c === d);  // Strict equality
console.log("c != d:", c != d);   // Loose inequality
console.log("c !== d:", c !== d);  // Strict inequality
console.log("c > d:", c > d);
console.log("c < d:", c < d);
console.log("c >= d:", c >= d);
console.log("c <= d:", c <= d);