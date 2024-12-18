// ***************************************
// PRACTICE QUESTIONS: CALLBACKS, PROMISES, AND ASYNC/AWAIT
// ***************************************

// ---------------------------------------
// 1. CALLBACKS
// ---------------------------------------

/*
Question 1: Simple Callback
- Write a function called `calculate(a, b, callback)` that performs an operation (like addition, subtraction, multiplication, or division) on `a` and `b` using a callback.
- Example:
  calculate(5, 3, (result) => console.log("Result:", result)); // For addition, this should print "Result: 8".
*/
function calculate(a, b, callback) {
    // Your code here
}

/*
Question 2: Callback with setTimeout
- Create a function called `greetWithDelay(name, delay, callback)` that prints a greeting message after a specified delay using `setTimeout`.
- Example:
  greetWithDelay("Alice", 2000, () => console.log("Greeting done!"));
*/
function greetWithDelay(name, delay, callback) {
    // Your code here
}

/*

Skip this for now

Question 3: Simulate Asynchronous File Reading
- Write a function `readFile(fileName, callback)` that simulates reading a file after 2 seconds.
- The function should call the `callback` with the content: "File content of <fileName>".
- Example:
  readFile("example.txt", (content) => console.log(content)); // Should log: "File content of example.txt".
*/
function readFile(fileName, callback) {
    // Your code here
}

// ---------------------------------------
// 2. PROMISES
// ---------------------------------------

/*
Question 4: Simple Promise
- Write a Promise called `flipCoin` that simulates flipping a coin after 2 seconds.
- The Promise should resolve with "Heads" or reject with "Tails".
- Example:
  flipCoin
    .then((result) => console.log("You got:", result))
    .catch((error) => console.error("You got:", error));
*/
const flipCoin = new Promise((resolve, reject) => {
    // Your code here
});

/*
Question 5: Fetch and Process Data with Promises
- Create two functions:
  1. `fetchData()` that returns a Promise resolving with "Fetched Data" after 1 second.
  2. `processData(data)` that returns a Promise resolving with "Processed: <data>" after 1 second.
- Chain these functions to log the processed data.
*/
function fetchData() {
    // Your code here
}

function processData(data) {
    // Your code here
}

/*
Question 6: Handle Errors in Promises
- Modify the `fetchData()` function to sometimes reject the Promise with "Error: Unable to fetch data".
- Handle both success and error cases using `.then()` and `.catch()`.
*/

// ---------------------------------------
// 3. ASYNC/AWAIT
// ---------------------------------------

/*
Question 7: Async/Await for Fetch and Process Data
- Rewrite the fetch and process task from Question 5 using async/await.
- Use try/catch to handle errors.
*/
async function fetchAndProcessAsync() {
    // Your code here
}

/*
//Skip this for now
Question 8: Sequential vs Parallel Execution
- Create a function `fetchMultipleData()` that fetches data from two "fake APIs" (`fetchAPI1` and `fetchAPI2`) using Promises.
- Write two implementations:
  1. Sequentially fetch both APIs.
  2. Fetch both APIs in parallel using `Promise.all()`.
- Example:
  console.log("Start");
  await fetchMultipleData();
  console.log("End");
*/
function fetchAPI1() {
    return new Promise((resolve) => setTimeout(() => resolve("API 1 Data"), 2000));
}

function fetchAPI2() {
    return new Promise((resolve) => setTimeout(() => resolve("API 2 Data"), 3000));
}

async function fetchMultipleData() {
    // Your code here
}

/*
Question 9: Async/Await Error Handling
- Create a function `getDataWithError()` that simulates fetching data but rejects with "Failed to fetch!".
- Use async/await with try/catch to handle the error and log: "Error occurred: <error message>".
*/
async function getDataWithError() {
    return new Promise((_, reject) => setTimeout(() => reject("Failed to fetch!"), 2000));
}

async function handleErrorAsync() {
    // Your code here
}

/*
Question 10: Combining All Concepts
- Create a task where:
  1. You fetch data from an API using a Promise.
  2. Process the data using another Promise.
  3. Handle errors using both `.catch()` and `try/catch` with async/await.
  4. Compare the implementation using Promises and async/await.
*/
function fetchDataTask() {
    return new Promise((resolve) => setTimeout(() => resolve("Fetched Data"), 1000));
}

function processDataTask(data) {
    return new Promise((resolve) => setTimeout(() => resolve(data + " -> Processed"), 1000));
}

function handleWithPromises() {
    // Your code here
}

async function handleWithAsyncAwait() {
    // Your code here
}

// ***************************************
// END OF PRACTICE QUESTIONS
// ***************************************
