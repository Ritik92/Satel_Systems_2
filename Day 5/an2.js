// Import the prompt-sync library for taking user input
const prompt = require("prompt-sync")(); 

// 1. Declare a variable to store your name, age, and whether you are a student
let name = "John";
let age = 25;
let isStudent = true;

// 2. Swap two variables without using a third variable
let a = 5, b = 10;
a = a + b; // a now becomes 15
b = a - b; // b becomes 5 (original value of a)
a = a - b; // a becomes 10 (original value of b)
console.log(`After swapping: a = ${a}, b = ${b}`);

// 3. Check the type of a given variable
let variable = 42; // Can be any value: number, string, etc.
if (typeof variable === "number") {
    console.log("The variable is a number.");
} else if (typeof variable === "string") {
    console.log("The variable is a string.");
} else if (typeof variable === "boolean") {
    console.log("The variable is a boolean.");
} else {
    console.log("Unknown type.");
}

// 4. Take a user's name as input and print a greeting
let userName = prompt("Enter your name: ");
console.log("Hello, " + userName + "!");

// 5. Ask for two numbers and print their sum, difference, product, and division
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Division: " + (num1 / num2));

// 6. Reverse a string input by the user
let str = prompt("Enter a string: ");
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Reversed string: " + reversedStr);

// 7. Check if a number is even or odd
let number = parseInt(prompt("Enter a number: "));
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 8. Determine if a year is a leap year
let year = parseInt(prompt("Enter a year: "));
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// 9. Find the largest among three numbers
let x = parseInt(prompt("Enter the first number: "));
let y = parseInt(prompt("Enter the second number: "));
let z = parseInt(prompt("Enter the third number: "));
if (x >= y && x >= z) {
    console.log("Largest number: " + x);
} else if (y >= x && y >= z) {
    console.log("Largest number: " + y);
} else {
    console.log("Largest number: " + z);
}

// 10. Print the first 10 natural numbers
console.log("First 10 natural numbers:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11. Calculate the factorial of a number
let n = parseInt(prompt("Enter a number: "));
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log("Factorial: " + factorial);

// 12. Generate the Fibonacci sequence up to a certain number
let limit = parseInt(prompt("Enter the number of Fibonacci terms: "));
let fib1 = 0, fib2 = 1;
console.log("Fibonacci sequence:");
console.log(fib1);
if (limit > 1) console.log(fib2);
for (let i = 3; i <= limit; i++) {
    let nextTerm = fib1 + fib2;
    console.log(nextTerm);
    fib1 = fib2;
    fib2 = nextTerm;
}

// 13. Print a pattern of stars (e.g., a triangle)
let rows = parseInt(prompt("Enter the number of rows for the star pattern: "));
for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// 14. Function to calculate the square of a number
function square(num) {
    return num * num;
}
let numberToSquare = parseInt(prompt("Enter a number to find its square: "));
console.log("Square: " + square(numberToSquare));

// 15. Function to check if a string is a palindrome
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
let word = prompt("Enter a string to check if it's a palindrome: ");
console.log(isPalindrome(word) ? "Palindrome" : "Not a palindrome");

// 16. Find the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let numA = parseInt(prompt("Enter the first number: "));
let numB = parseInt(prompt("Enter the second number: "));
console.log("GCD: " + gcd(numA, numB));

// 17. Print all elements of an array
let arr = [1, 2, 3, 4, 5];
console.log("Array elements:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 18. Find the largest and smallest elements in an array
let numbers = [3, 1, 4, 1, 5, 9];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i];
    if (numbers[i] < smallest) smallest = numbers[i];
}
console.log("Largest: " + largest);
console.log("Smallest: " + smallest);

// 19. Reverse an array without using built-in functions
let original = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}
console.log("Reversed array: " + reversed);

// 20. Concatenate two strings and print the result
let str1 = "Hello";
let str2 = "World";
let concatenated = str1 + " " + str2;
console.log("Concatenated string: " + concatenated);

// 21. Count the number of vowels in a given string
function countVowels(s) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}
let vowelString = prompt("Enter a string to count vowels: ");
console.log("Number of vowels: " + countVowels(vowelString));
