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