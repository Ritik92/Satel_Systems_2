// =================================================================
// MONGOOSE COMPREHENSIVE GUIDE AND CHEAT SHEET
// =================================================================
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js
// It provides a schema-based solution to model your application data and 
// includes built-in type casting, validation, query building, and business logic hooks

// Basic connection setup
const mongoose = require('mongoose');

// Connect to MongoDB Atlas (cloud database)
mongoose.connect('mongodb+srv://kartik291190:kartik291190@cluster0.xua2n.mongodb.net/')
  .then(() => console.log('Connected to MongoDB Atlas...'))
  .catch(err => console.error('Could not connect to MongoDB Atlas...', err));

// =================================================================
// 2. SCHEMA DEFINITION
// =================================================================
// Schemas are the backbone of Mongoose. They define:
// - The shape and structure of documents
// - Data types 
// - Default values 
// Think of them as blueprints for documents in a collection


// Basic Schema Example
// This simple schema shows the most basic way to define document structure
const userSchema = new mongoose.Schema({
  name: String,    // Simple field definition with just the type
  email: String,
  age: Number
});

// Advanced Schema with Comprehensive Options
// This schema demonstrates the full power of Mongoose schemas
const advancedUserSchema = new mongoose.Schema({
  // String field with complete validation rules
  username: {
    type: String,
    required: true,                // Makes this field mandatory
    minlength: 3,                 // Ensures minimum length of 3 characters
    maxlength: 50,                // Caps maximum length at 50 characters
    trim: true,                   // Automatically removes whitespace
    lowercase: true               // Converts value to lowercase before saving
  },

  // Number field with range validation
  age: {
    type: Number,
    min: 0,                       // Minimum acceptable value
    max: 120,                     // Maximum acceptable value
    required: true
  },

  // Date field with auto-setting default
  birthDate: {
    type: Date,
    default: Date.now             // Sets to current date/time if not provided
  },

  // Boolean field with default value
  isActive: {
    type: Boolean,
    default: true                 // New users are active by default
  },

  // Array field - allows multiple values of specified type
  hobbies: [String],             // Array of strings

  // Nested object - creates a sub-document structure
  address: {
    street: String,
    city: String,
    country: String
  },

  // Reference field - creates relationships between documents
  // This is similar to foreign keys in relational databases
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'                   // Points to the Post model
  }]
});

// =================================================================
// 3. MODEL CREATION
// =================================================================
// Models are fancy constructors compiled from Schema definitions
// They are responsible for creating and reading documents from MongoDB

// Create a model from schema
const User = mongoose.model('User', userSchema);
// Note: Mongoose automatically creates collection name by:
// 1. Converting 'User' to lowercase ('user')
// 2. Making it plural ('users')

// =================================================================
// 4. CRUD OPERATIONS
// =================================================================

// CREATE (Insert Documents)
// ------------------------

// Create a single document
async function createUser() {
  // Create a new user instance
  const user = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  });

  try {
    // .save() returns a promise that resolves to the saved document
    const result = await user.save();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// Create multiple documents efficiently
async function createManyUsers() {
  try {
    // insertMany is more efficient than multiple .save() calls
    // for inserting multiple documents
    const result = await User.insertMany([
      { name: 'John', email: 'john@example.com' },
      { name: 'Jane', email: 'jane@example.com' }
    ]);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// READ (Query Documents)
// ---------------------

// Retrieve all documents from a collection
async function getAllUsers() {
  try {
    // .find() without parameters returns all documents
    const users = await User.find();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

// Advanced query with filters, projections, and options
async function findSpecificUsers() {
  try {
    const users = await User
      .find({ age: { $gte: 18 } })  // Query filter: age >= 18
      .select('name email -_id')     // Projection: include name and email, exclude _id
      .sort({ name: 1 })            // Sort by name ascending (1) or descending (-1)
      .limit(10);                   // Limit results to 10 documents
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

// Find a single document by criteria
async function findOneUser() {
  try {
    // Returns the first document that matches the criteria
    const user = await User.findOne({ email: 'john@example.com' });
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}

// Find document by its ID
async function findUserById() {
  try {
    // Shorthand for findOne({ _id: id })
    const user = await User.findById('6783edc8bfbd550e33014795');
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}

// UPDATE (Modify Documents)
// ------------------------

// Update a single document by criteria
async function updateUser() {
  try {
    const result = await User.updateOne(
      { _id: '6783edc8bfbd550e33014795' },            // Filter criteria
      { $set: {                    // Update operations using MongoDB operators
        name: 'John Smith',
        age: 32
      }}
    );
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// Find document, update it, and return the updated version
async function findAndUpdateUser() {
  try {
    const user = await User.findByIdAndUpdate('6783edc8bfbd550e33014795',
      { name: 'Raj' },
      { new: true }               // Return updated document instead of original
    );
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}

// DELETE (Remove Documents)
// ------------------------

// Remove a single document
async function deleteUser() {
  try {
    // Removes the first document that matches the criteria
    const result = await User.deleteOne({ _id: '12345' });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// Remove multiple documents matching criteria
async function deleteUsers() {
  try {
    // Removes all documents where age < 18
    const result = await User.deleteMany({ age: { $lt: 18 } });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// =================================================================
// 5. POPULATION (Working with References)
// =================================================================
// Population is the process of automatically replacing
// specified paths in the document with document(s) from other collection(s)

// Define related schemas for demonstration
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to User model
    ref: 'User'                           // Specify which model to use
  }
});

const Post = mongoose.model('Post', postSchema);

// Retrieve post and populate author details
async function getPostWithAuthor() {
  try {
    const post = await Post
      .findById('12345')
      .populate('author', 'name email -_id')  // Replace author ID with actual user document
    console.log(post);
  } catch (err) {
    console.error(err);
  }
}

// =================================================================
// 8. TRANSACTIONS
// =================================================================

// Transactions allow multiple database operations to be executed as a single unit.
// This ensures data consistency, especially in critical scenarios like financial transfers.
// If any operation in the transaction fails, all changes made during the transaction are rolled back.

// This function demonstrates a basic use case: transferring money between two accounts.
async function transferMoney(fromId, toId, amount) {
    // Start a session for the transaction. The session groups all the operations 
    // together so that they are treated as a single transaction.
    const session = await mongoose.startSession();
    
    // Begin the transaction within the session.
    session.startTransaction();
  
    try {
      // STEP 1: Fetch both accounts involved in the transaction.
      // Use the session to ensure the operations are part of the transaction.
      
      // Find the account from which money will be deducted.
      const from = await Account.findById(fromId).session(session);
      
      // Find the account to which money will be added.
      const to = await Account.findById(toId).session(session);
  
      // STEP 2: Perform the necessary operations on the data.
      // Deduct the amount from the "from" account's balance.
      from.balance -= amount;
      
      // Add the amount to the "to" account's balance.
      to.balance += amount;
  
      // STEP 3: Save the changes to the database for both accounts.
      // Saving these changes ensures that the balances are updated in the database.
      // If any save operation fails, the transaction will be rolled back in the catch block.
      await from.save();
      await to.save();
  
      // STEP 4: Commit the transaction.
      // If all operations (find, modify, and save) were successful, commit the transaction.
      // This makes all changes permanent.
      await session.commitTransaction();
  
      // End the session after committing the transaction.
      session.endSession();
  
    } catch (err) {
      // If any part of the transaction fails (e.g., an error during save), 
      // the code enters this catch block to handle the failure.
  
      // Roll back any changes made during the transaction.
      // This ensures that the database remains in a consistent state.
      await session.abortTransaction();
  
      // End the session after aborting the transaction.
      session.endSession();
  
      // Re-throw the error so it can be handled by the caller of the function.
      throw err;
    }
  }
  
// =================================================================
// 10. COMMON QUERY OPERATORS
// =================================================================
// MongoDB provides powerful query operators for complex queries

// Demonstrating the use of comparison operators in MongoDB queries
const comparisonQueries = async () => {
    // Basic comparison operators for numerical fields
    
    // Finds all users whose age is exactly 25
    await User.find({ age: { $eq: 25 } });     
    
    // Finds all users whose age is not 25
    await User.find({ age: { $ne: 25 } });     
    
    // Finds all users whose age is greater than 25
    await User.find({ age: { $gt: 25 } });     
    
    // Finds all users whose age is greater than or equal to 25
    await User.find({ age: { $gte: 25 } });    
    
    // Finds all users whose age is less than 25
    await User.find({ age: { $lt: 25 } });     
    
    // Finds all users whose age is less than or equal to 25
    await User.find({ age: { $lte: 25 } });    
  
    // Array operators for matching values in an array
    
    // Finds all users whose age matches any value in the specified array (25, 30, or 35)
    await User.find({ age: { $in: [25, 30, 35] } });    
      
    // Finds all users whose age does NOT match any value in the specified array (25, 30, or 35)
    await User.find({ age: { $nin: [25, 30, 35] } });   
  };
  
// Demonstrating the use of logical operators in MongoDB queries
const logicalQueries = async () => {
    // $and operator: Ensures that all conditions in the array must be true
    
    // Finds all users who meet both of the following conditions:
    // 1. Their age is greater than or equal to 25
    // 2. They are active users (isActive: true)
    await User.find({
      $and: [
        { age: { $gte: 25 } },    // Condition 1: Age >= 25
        { isActive: true }        // Condition 2: User is active
      ]
    });
    
    // $or operator: Ensures that at least one condition in the array must be true
    
    // Finds all users who meet at least one of the following conditions:
    // 1. Their age is greater than or equal to 25
    // 2. They are active users (isActive: true)
    await User.find({
      $or: [
        { age: { $gte: 25 } },    // Condition 1: Age >= 25
        { isActive: true }        // Condition 2: User is active
      ]
    });
    
    // $not operator: Negates a condition (returns results where the condition is not true)
    
    // Finds all users whose age does NOT satisfy the condition of being greater than or equal to 25.
    // Effectively, this query finds users with age less than 25.
    await User.find({
      age: { $not: { $gte: 25 } } // Negated condition: Age is NOT >= 25 (same as age < 25)
    });
  };
  