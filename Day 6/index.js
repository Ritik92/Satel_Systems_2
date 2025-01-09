// ***************************************
// BEGINNER-FRIENDLY GUIDE: CALLBACKS, PROMISES, AND ASYNC/AWAIT
// ***************************************

// ---------------------------------------
// 1. CALLBACKS
// ---------------------------------------

/*
What is a callback?
- A callback is a function passed as an argument to another function.
- It gets "called back" once the main function finishes its task.
*/

// Example 1: Basic Callback Example
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Call the function and pass the callback
greet("John", sayGoodbye);

/*
OUTPUT:
Hello, John!
Goodbye!
*/

const cart=["shoes","shirt","glasses","watches"]

let created_Cart=createcart(cart)
let finalPlaceOrder=placeorder(created_Cart)
let finalsummary=ordersummary(finalPlaceOrder)
console.log("TAsk")



createcart(cart,function (createdcart){
    placeorder(createdcart,function(finalPlaceOrderDat){
        ordersummary(finalPlaceOrderDat);
        console.log("Operation Completed")
    });
});


functionPromise().then(function (output){
    console.log(output)
}).catch(function(message){
    console.log(message)
})




// Example 2: Callback with Delay (setTimeout)
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds.");
}, 2000);

console.log("End");

/*
OUTPUT:
Start
End
This runs after 2 seconds.
*/

/*
Why use callbacks?
- Callbacks are used when a task takes time (like reading a file or fetching data).
*/

// ---------------------------------------
// 2. PROMISES    https://jsonplaceholder.typicode.com/posts
// ---------------------------------------

/*
What is a Promise?
- A Promise is used to handle tasks that take time (asynchronous tasks).
- A Promise can either "resolve" (success) or "reject" (failure).
- Promises help avoid callback mess and make code cleaner.
*/

// Example 1: Basic Promise Example

const p=new Promise(function(resolve,reject){
    resolve("Promise Resolved")
})




const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to simulate failure

    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!"); // Task successful
        } else {
            reject("Promise rejected!"); // Task failed
        }
    }, 2000);
});

// Handling the Promise
console.log("Promise started...");

myPromise
    .then((message) => {
        console.log(message); // Runs when resolved
    })
    .catch((error) => {
        console.error(error); // Runs when rejected
    });

/*
OUTPUT (if success = true):
Promise started...
Promise resolved successfully!

OUTPUT (if success = false):
Promise started...
Promise rejected!
*/

// Example 2: Fetching and Processing Data Using Promises
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetching data...");
            resolve("Data fetched successfully");
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing: " + data);
            resolve("Processed Data");
        }, 1000);
    });
}

// Chain the Promises
fetchData()
    .then((data) => {
        return processData(data); // Pass fetched data to processData
    })
    .then((processedData) => {
        console.log(processedData);
    })
    .catch((error) => {
        console.error("Error: ", error);
    });

/*
OUTPUT:
Fetching data...
Processing: Data fetched successfully
Processed Data
*/

// ---------------------------------------
// 3. ASYNC/AWAIT
// ---------------------------------------

/*
What is Async/Await?
- Async/Await is a cleaner way to handle Promises.
- It allows you to write asynchronous code in a "synchronous" style.
- It uses the keywords 'async' and 'await'.

Rules:
1. An 'async' function always returns a Promise.
2. 'await' waits for the Promise to resolve or reject.
*/



async function getData1(){
    //calling an api 
    //implementation


    const response=await fetch("xyz.com")
    console.log(response)

    //database
    //response
}

// Example 1: Basic Async/Await Example
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data retrieved successfully!");
        }, 2000);
    });
}

async function runAsyncExample() {
    console.log("Fetching data...");
    const data = await getData(); // Wait for the Promise to resolve
    console.log(data);
}

runAsyncExample();

/*
OUTPUT:
Fetching data...
Data retrieved successfully!
*/

// Example 2: Async/Await with Error Handling
function getErrorData() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Error retrieving data!");
        }, 2000);
    });
}

async function handleErrors() {
    try {
        console.log("Trying to fetch data...");
        const data = await getErrorData(); // Wait for Promise (this will reject)
        console.log(data);
    } catch (error) {
        console.error("Caught an error:", error);
    }
}

handleErrors();

/*
OUTPUT:
Trying to fetch data...
Caught an error: Error retrieving data!
*/

// ---------------------------------------
// COMPARISON: PROMISES vs ASYNC/AWAIT
// ---------------------------------------

/* Example: Same Task Using Promises and Async/Await */

// Task: Fetch and Process Data
function fetchDataTask() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Fetched Data"), 1000);
    });
}

function processDataTask(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data + " -> Processed"), 1000);
    });
}

// Using Promises (Chaining)
console.log("Using Promises:");
fetchDataTask()
    .then((data) => processDataTask(data))
    .then((processedData) => console.log(processedData))
    .catch((error) => console.error(error));

// Using Async/Await
console.log("Using Async/Await:");
async function runTaskAsync() {
    try {
        const data = await fetchDataTask();
        const processedData = await processDataTask(data);
        console.log(processedData);
    } catch (error) {
        console.error(error);
    }
}

runTaskAsync();

/*
OUTPUT:
Using Promises:
Fetched Data -> Processed

Using Async/Await:
Fetched Data -> Processed
*/

// ---------------------------------------
// SUMMARY
// ---------------------------------------

/*
1. Callbacks:
   - Basic way to handle asynchronous tasks.
   - Can become messy (Callback Hell) when tasks depend on each other.

2. Promises:
   - A cleaner way to handle asynchronous tasks.
   - Uses .then() for success and .catch() for errors.

3. Async/Await:
   - Simplifies Promises by making code look synchronous.
   - Use 'async' to declare a function that works with Promises.
   - Use 'await' to pause execution until a Promise resolves.

Tips:
- Use Callbacks for simple tasks like `setTimeout`.
- Use Promises or Async/Await for tasks involving multiple steps.
- Always handle errors with `.catch()` (for Promises) or `try/catch` (for Async/Await).

*/
