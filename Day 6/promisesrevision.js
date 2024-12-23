// Simulating fetching data from a server (Mock API)
function fetchData(apiUrl, callback) {
    // Simulate a delay using setTimeout
    setTimeout(() => {
        const data = { message: "Hello, world!" }; // Example response data
        callback(null, data); // Call the callback with the data (no error)
    }, 1000); // 1-second delay
}

// 1. Fetching data using Callbacks
function exampleUsingCallbacks() {
    fetchData("/mock-api", (error, data) => {
        if (error) {
            console.error("Something went wrong:", error); // Handle errors
        } else {
            console.log("Callback: Data fetched:", data); // Log the data
        }
    });
}

// 2. Fetching data using Promises
function fetchDataPromise(apiUrl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Hello, world!" }; // Example response data
            resolve(data); // Resolve the promise with the data
        }, 1000); // 1-second delay
    });
}

function exampleUsingPromises() {
    fetchDataPromise("/mock-api")
        .then((data) => {
            console.log("Promise: Data fetched:", data); // Log the data
        })
        .catch((error) => {
            console.error("Something went wrong:", error); // Handle errors
        });
}

// 3. Fetching data using Async/Await
async function exampleUsingAsyncAwait() {
    try {
        const data = await fetchDataPromise("/mock-api"); // Wait for the promise
        console.log("Async/Await: Data fetched:", data); // Log the data
    } catch (error) {
        console.error("Something went wrong:", error); // Handle errors
    }
}

// Running all examples
exampleUsingCallbacks();   // Call the function to fetch data using callbacks
exampleUsingPromises();    // Call the function to fetch data using promises
exampleUsingAsyncAwait();  // Call the function to fetch data using async/await
