// Import the Express library
// Express is a Node.js framework that simplifies building web servers and APIs.
const express = require('express');

// Create an instance of an Express app
// This app will handle incoming HTTP requests.
const app = express();

/**
 * Route to handle QUERY PARAMETERS
 * Query parameters are part of the URL after the `?` symbol.
 * They are used to send additional information to the server.
 * 
 * Example URL:
 * http://localhost:3000/search?query=shoes&sort=price&category=men
 */
app.get('/search', (req, res) => {
    // Access query parameters using req.query
    // req.query is an object containing key-value pairs from the URL.
    const { query, sort, category } = req.query;

    // Send a response back to the client with the received query parameters
    res.send({
        message: 'Search Results',
        query: query || 'Not provided',     // Default value if query is missing
        sort: sort || 'Not provided',       // Default value if sort is missing
        category: category || 'Not provided', // Default value if category is missing
    });
});

/**
 * Route to handle ROUTE PARAMETERS
 * Route parameters are part of the URL itself and defined in the route using `:`.
 * They are typically used for identifying specific resources (like users, posts, etc.).
 * 
 * Example URL:
 * http://localhost:3000/users/123
 */
app.get('/users/:id', (req, res) => {
    // Access route parameters using req.params
    // req.params is an object containing dynamic parts of the URL.
    const userId = req.params.id; // Extract the "id" parameter from the URL

    // Send a response back to the client with the user ID
    res.send({
        message: 'User Details',
        userId: userId, // Dynamic value provided in the URL
    });
});

/**
 * Route to handle both ROUTE PARAMETERS and QUERY PARAMETERS
 * Sometimes, you need both types of parameters in the same route.
 * 
 * Example URL:
 * http://localhost:3000/users/123/orders?status=completed&sort=date
 */
app.get('/users/:id/orders', (req, res) => {
    // Access route parameter (user ID) using req.params
    const userId = req.params.id;

    // Access query parameters (status and sort) using req.query
    const { status, sort } = req.query;

    // Send a response back to the client with both types of parameters
    res.send({
        message: 'User Orders',
        userId: userId,         // The dynamic user ID from the route
        status: status || 'No status provided', // Query parameter for order status
        sort: sort || 'No sort order provided', // Query parameter for sorting
    });
});

/**
 * Start the server and listen on port 3000
 * The server will be available at http://localhost:3000
 */
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
