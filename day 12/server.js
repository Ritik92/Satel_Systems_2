// Importing the Mongoose library to interact with MongoDB.
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, 
// which allows you to define schemas with strongly typed data and perform CRUD operations easily.
const mongoose = require('mongoose');

// Connecting to the MongoDB database using a connection string.
// Replace the connection string with your specific MongoDB URI, 
// including username, password, and the cluster or database you want to connect to.
mongoose
  .connect('mongodb+srv://kartik291190:kartik291190@cluster0.xua2n.mongodb.net/')
  .then(() => console.log('MongoDB Connected')) // Logs a success message when the connection is successful.
  .catch(err => console.error('Connection error:', err)); // Logs detailed error information if the connection fails.

/**
 * Defining a schema for the `User` collection in MongoDB.
 * A schema is a blueprint that defines the structure, data types, and constraints of documents within a MongoDB collection.
 * For example, here we define that a User must have a name, age, and email, all of which are required fields.
 */
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Defines a `name` field that is of type String and must be present in every document.
  age: { type: Number, required: true },  // Defines an `age` field that is of type Number and must be present in every document.
  email: { type: String, required: true, unique: true }, // Defines an `email` field of type String, which is required and must be unique across all documents in the collection.
});

// Creating a Mongoose model from the schema.
// A model represents a collection in the database, and it provides methods to create, query, update, and delete documents.
const User = mongoose.model('User', userSchema);

/**
 * Function to create and add a new user document to the database.
 * Demonstrates how to instantiate a document, set its properties, and save it to MongoDB.
 */
const addUser = async () => {
  try {
    const user = new User({
      name: 'John Doe', // The `name` field is assigned the value "John Doe".
      age: 25,          // The `age` field is assigned the value 25.
      email: 'johndoe@example.com', // The `email` field is assigned the value "johndoe@example.com".
    });

    // Saves the user document to the database and logs the saved user.
    const savedUser = await user.save();
    console.log('User Created:', savedUser);
  } catch (err) {
    // Logs an error message if the save operation fails.
    console.error('Error Creating User:', err.message);
  }
};

/**
 * Function to retrieve all user documents from the database.
 * Utilizes the `find` method to fetch all documents in the `User` collection.
 */
const getUsers = async () => {
  try {
    // Fetches all user documents from the collection and logs them.
    const users = await User.find();
    console.log('All Users:', users);
  } catch (err) {
    // Logs an error message if the fetch operation fails.
    console.error('Error Fetching Users:', err.message);
  }
};

/**
 * Function to update a user's age by their unique ID.
 * Demonstrates how to locate a document by its `_id` and modify specific fields.
 */
const updateUser = async (id) => {
  try {
    // Uses the `findByIdAndUpdate` method to locate a document by ID and update it.
    const updatedUser = await User.findByIdAndUpdate(
      id,                 // The unique ID of the user to update.
      { age: 30 },        // Updates the `age` field to 30.
      { new: true }       // Ensures the updated document is returned instead of the original.
    );
    console.log('Updated User:', updatedUser); // Logs the updated document.
  } catch (err) {
    // Logs an error message if the update operation fails.
    console.error('Error Updating User:', err.message);
  }
};

/**
 * Function to delete a user document by their unique ID.
 * Demonstrates how to locate and remove a document from the database using its `_id`.
 */
const deleteUser = async (id) => {
  try {
    // Deletes the user document by ID and logs the deleted document.
    const deletedUser = await User.findByIdAndDelete(id);
    console.log('Deleted User:', deletedUser);
  } catch (err) {
    // Logs an error message if the delete operation fails.
    console.error('Error Deleting User:', err.message);
  }
};

/**
 * Example of Defining Relationships in Mongoose.
 * The `ref` option allows linking two collections by establishing a reference between schemas.
 * Here, each Post document includes a reference to a User document.
 */
const postSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Defines a `title` field that is required and of type String.
  content: { type: String, required: true }, // Defines a `content` field that is required and of type String.
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Links the `author` field to the `User` collection by referencing its `_id`.
});

// Creating a model for the `Post` collection.
const Post = mongoose.model('Post', postSchema);

/**
 * Function to add a new post document with a reference to a user.
 * Demonstrates how to create a document with a relationship to another collection.
 */
const addPost = async (userId) => {
  try {
    const post = new Post({
      title: 'My First Post',
      content: 'This is the content of my first post.',
      author: userId, // The `author` field references a User document by its ID.
    });

    // Saves the post document to the database and logs the saved post.
    const savedPost = await post.save();
    console.log('Post Created:', savedPost);
  } catch (err) {
    // Logs an error message if the save operation fails.
    console.error('Error Creating Post:', err.message);
  }
};

/**
 * Function to retrieve all posts with their associated user details.
 * Demonstrates the use of `populate` to fetch referenced documents.
 */
const getPosts = async () => {
  try {
    // Fetches all Post documents and populates the `author` field with `name` and `email` from the referenced User documents.
    const posts = await Post.find().populate('author', 'name email');
    console.log('All Posts with Authors:', posts);
  } catch (err) {
    // Logs an error message if the fetch operation fails.
    console.error('Error Fetching Posts:', err.message);
  }
};

// Example Usage
// Uncomment these lines to test the respective functions:

//addUser(); // Adds a new user to the database.
//getUsers(); // Fetches and logs all users in the database.
//updateUser('677eb3b22c6e73adb3b12298'); // Updates a user's age by their ID (replace placeholder with an actual ID).
//deleteUser('677eb3b22c6e73adb3b12298'); // Deletes a user by their ID (replace placeholder with an actual ID).

//addPost('677eb3b22c6e73adb3b12298'); // Adds a post with a reference to a user (replace placeholder with an actual user ID).
//getPosts(); // Fetches and logs all posts with their associated authors.
