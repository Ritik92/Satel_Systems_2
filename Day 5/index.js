// JavaScript Concepts for Beginners

/**
 * 1. Variables: var, let, and const
 * ==================================
 */

// **What are variables?**
// Variables store data values that can be used and manipulated in your program. JavaScript provides three ways to declare variables: `var`, `let`, and `const`.

// **1.1 var**
// - Declared globally or within a function scope.
// - Can be redeclared and updated.
// - Not recommended due to its function-scoped behavior, which can lead to bugs.

var x = 5; // Declare x with var
var x = 10; // Redeclare and update x
console.log(x); // Output: 10

if (true) {
  var y = 20; // Accessible outside this block due to function scoping
}
console.log(y); // Output: 20

// **1.2 let**
// - Block-scoped (restricted to the block where it is declared).
// - Cannot be redeclared in the same scope but can be updated.

let a = 10; // Declare a with let
// let a = 20; // Error: Cannot redeclare 'a' in the same scope
a = 15; // Update the value of a
console.log(a); // Output: 15

// **1.3 const**
// - Block-scoped.
// - Cannot be redeclared or updated after declaration.
// - Typically used for values that should remain constant.

const b = 30; // Declare b with const
// b = 40; // Error: Assignment to constant variable
console.log(b); // Output: 30

// **Summary:**
// - Use `var` sparingly.
// - Prefer `let` for variables that need to be updated.
// - Use `const` for values that should not be reassigned.

/**
 * 2. Functions
 * =============
 */

// **What are functions?**
// Functions are reusable blocks of code that perform specific tasks. You can define functions using declarations, expressions, or arrow functions.



// function sumNmul(num1,num2){
// let sum=num1+num2;
// console.log(sum)
// let mul=num1*num2;
// console.log(mul)
// }
// // 1,2,3,4,5

// sumNmul(1,2)

// let sum=1+2;
// console.log(sum)
// let mul=1*2;
// console.log(mul)

//  sum=2+3;
// console.log(sum)
//  mul=2*3;
// console.log(mul)

//  sum=3+4;
// console.log(sum)
//  mul=3*4;
// console.log(mul)

//  sum=4+5;
// console.log(sum)
//  mul=4*5;
// console.log(mul)






// name()

// function  name(){

// }

// **2.1 Function Declaration**
// - Can be used before they are defined (hoisted).
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // Output: Hello, John!

// **2.2 Arrow Function**
// - A concise syntax for writing functions.
// - Does not have its own `this` context.


// function some(){

// }
//  const some= ()=>{

//  }

const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Jane")); // Output: Hello, Jane!

// **Difference between function declaration and arrow function:**
// - Function declarations are hoisted.
console.log(hoistedFunction()); // Output: I'm hoisted!
function hoistedFunction() {
  return "I'm hoisted!";
}

// - Arrow functions are not hoisted.
// console.log(hoistedArrow()); // Error: Cannot access 'hoistedArrow' before initialization
const hoistedArrow = () => "I'm not hoisted.";

/**
 * 3. Destructuring Arrays and Objects
 * =====================================
 */

// **What is destructuring?**
// Destructuring is a way to extract values from arrays or objects and assign them to variables.

// **3.1 Array Destructuring**
const colors = ["red", "green", "blue"];
const [primary, secondary] = colors; // Extract first and second elements
console.log(primary, secondary); // Output: red green

// Skipping elements
const [, , third] = colors;
console.log(third); // Output: blue

// **3.2 Object Destructuring**
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
const { brand, model } = car; // Extract brand and model properties
console.log(brand, model); // Output: Toyota Corolla

// Renaming variables
const { year: carYear } = car;
console.log(carYear); // Output: 2020

/**
 * 4. Rest and Spread Operators
 * =============================
 */

// **What are Rest and Spread operators?**
// - Rest operator `...` gathers remaining elements into an array.
// - Spread operator `...` expands elements of an array or object.

// **4.1 Rest Operator**
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // Output: 1
console.log(tail); // Output: [2, 3, 4]

// **4.2 Spread Operator**
// Expanding arrays
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // Output: [1, 2, 3, 4]

// Combining objects
const user1 = { name: "Alice" };
const user2 = { age: 25 };
const mergedUser = { ...user1, ...user2 };
console.log(mergedUser); // Output: { name: 'Alice', age: 25 }

/**
 * 5. Ternary Operator
 * ====================
 */

// **What is a ternary operator?**
// - A shorthand for `if-else` statements.
// Syntax: `condition ? value_if_true : value_if_false`

const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

// Equivalent if-else statement
let canVoteIfElse;
if (age >= 18) {
  canVoteIfElse = "Yes";
} else {
  canVoteIfElse = "No";
}
console.log(canVoteIfElse); // Output: Yes

/**
 * 6. Optional Chaining
 * =====================
 */

// **What is optional chaining?**
// - A way to safely access nested properties without risking errors.

const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // Output: Alice
console.log(user?.address?.city); // Output: undefined

/**
 * 7. Array Methods: map and filter
 * =================================
 */

// **map**: Transform each element in an array.
const numbers = [1, 2, 3];
const squares = numbers.map((n) => n * n);
console.log(squares); // Output: [1, 4, 9]

// **filter**: Filter elements based on a condition.
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // Output: [2]

/**
 * 8. setInterval and clearInterval
 * =================================
 */

// **setInterval**: Execute a function repeatedly at specified intervals.
let counter = 0;
const interval = setInterval(() => {
  console.log("Count:", counter++);
  if (counter > 5) clearInterval(interval); // Stops after counter > 5
}, 1000);

/**
 * 9. Async/Await
 * ===============
 */

// **What is async/await?**
// - A way to handle asynchronous operations in a cleaner and more readable manner.
async function fetchData() {
  const data = await Promise.resolve("Fetched Data");
  console.log(data); // Output: Fetched Data
}
fetchData();

/**
 * 10. Error Handling
 * ===================
 */

// **What is error handling?**
// - A way to handle runtime errors and prevent application crashes.

try {
  JSON.parse("Invalid JSON"); // Throws an error
} catch (error) {
  console.log("Error:", error.message); // Output: Error: Unexpected token I in JSON
}
