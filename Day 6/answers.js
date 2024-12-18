// ***************************************
// ANSWERS: CALLBACKS, PROMISES, AND ASYNC/AWAIT
// ***************************************

// ---------------------------------------
// 1. CALLBACKS
// ---------------------------------------

/*
Answer 1: Simple Callback
- Function `calculate(a, b, callback)` performs operations using a callback.
*/
function calculate(a, b, callback) {
    const result = a + b; // Example: addition
    callback(result); // Calling the callback with the result
}

// Example Usage
calculate(5, 3, (result) => console.log("Result:", result)); // Output: Result: 8

/*
Answer 2: Callback with setTimeout
- Function `greetWithDelay(name, delay, callback)` prints a greeting message after the delay.
*/
function greetWithDelay(name, delay, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, delay);
}

// Example Usage
greetWithDelay("Alice", 2000, () => console.log("Greeting done!")); 
// Output after 2 seconds: Hello, Alice!
// Followed by: Greeting done!

/*
Answer 3: Simulate Asynchronous File Reading
- Function `readFile(fileName, callback)` simulates reading a file after 2 seconds.
*/
function readFile(fileName, callback) {
    setTimeout(() => {
        const content = `File content of ${fileName}`;
        callback(content);
    }, 2000);
}

// Example Usage
readFile("example.txt", (content) => console.log(content)); 
// Output after 2 seconds: File content of example.txt

// ---------------------------------------
// 2. PROMISES
// ---------------------------------------

/*
Answer 4: Simple Promise
- Promise `flipCoin` resolves with "Heads" or rejects with "Tails".
*/
const flipCoin = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isHeads = Math.random() > 0.5;
        if (isHeads) {
            resolve("Heads");
        } else {
            reject("Tails");
        }
    }, 2000);
});

// Example Usage
flipCoin
    .then((result) => console.log("You got:", result))
    .catch((error) => console.error("You got:", error));

/*
Answer 5: Fetch and Process Data with Promises
- Two functions:
  1. `fetchData` resolves with "Fetched Data".
  2. `processData(data)` resolves with "Processed: <data>".
*/
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Fetched Data"), 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Processed: ${data}`), 1000);
    });
}

// Example Usage
fetchData()
    .then((data) => processData(data))
    .then((processedData) => console.log(processedData))
    .catch((error) => console.error(error));
// Output:
// After 1 second: Processed: Fetched Data

/*
Answer 6: Handle Errors in Promises
- Modified `fetchData` function sometimes rejects the promise.
*/
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve("Fetched Data");
            } else {
                reject("Error: Unable to fetch data");
            }
        }, 1000);
    });
}

// Example Usage
fetchDataWithError()
    .then((data) => processData(data))
    .then((processedData) => console.log(processedData))
    .catch((error) => console.error(error));
// Output depends on random success or failure.

// ---------------------------------------
// 3. ASYNC/AWAIT
// ---------------------------------------

/*
Answer 7: Async/Await for Fetch and Process Data
- Rewrite fetch and process task using async/await.
*/
async function fetchAndProcessAsync() {
    try {
        const data = await fetchData(); // Wait for fetchData
        const processedData = await processData(data); // Wait for processData
        console.log(processedData);
    } catch (error) {
        console.error(error); // Handle errors
    }
}

// Example Usage
fetchAndProcessAsync(); 
// Output: Processed: Fetched Data

/*
Answer 8: Sequential vs Parallel Execution
- Function `fetchMultipleData` fetches data from two fake APIs sequentially and in parallel.
*/
async function fetchMultipleData() {
    console.log("Fetching sequentially...");
    const data1 = await fetchAPI1(); // Wait for API 1
    console.log("API 1:", data1);
    const data2 = await fetchAPI2(); // Wait for API 2
    console.log("API 2:", data2);

    console.log("Fetching in parallel...");
    const [parallelData1, parallelData2] = await Promise.all([fetchAPI1(), fetchAPI2()]); // Parallel
    console.log("Parallel API 1:", parallelData1);
    console.log("Parallel API 2:", parallelData2);
}

// Example Usage
fetchMultipleData();
// Outputs sequential and parallel fetching results.

/*
Answer 9: Async/Await Error Handling
- Function `handleErrorAsync` handles errors in async tasks.
*/
async function handleErrorAsync() {
    try {
        const data = await getDataWithError(); // Simulates error
        console.log(data);
    } catch (error) {
        console.error("Error occurred:", error); // Logs error message
    }
}

// Example Usage
handleErrorAsync();
// Output: Error occurred: Failed to fetch!

/*
Answer 10: Combining All Concepts
- Task combines fetching and processing data with Promises and async/await.
*/
function handleWithPromises() {
    fetchData()
        .then((data) => processData(data))
        .then((processedData) => console.log("Promise Result:", processedData))
        .catch((error) => console.error("Promise Error:", error));
}

async function handleWithAsyncAwait() {
    try {
        const data = await fetchData(); // Wait for fetchData
        const processedData = await processData(data); // Wait for processData
        console.log("Async/Await Result:", processedData);
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}

// Example Usage
handleWithPromises(); // Uses Promises
handleWithAsyncAwait(); // Uses Async/Await
// Outputs results from both approaches.

// ***************************************
// END OF ANSWERS
// ***************************************
