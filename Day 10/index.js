const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mysecret";
const app = express();
app.use(express.json());

const users = []; //simulation of database

// Signup route  
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Ensure username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  // Check if user already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists." });
  }

  // Add user
  users.push({ username, password });

  res.json({ message: "You are signed up." });
  console.log(users);
});

// Signin route
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  // Ensure username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  // Find user
  const foundUser = users.find((user) => user.username === username && user.password === password);

  if (foundUser) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(403).json({ message: "Invalid username or password." });
  }
});

// Me route


app.get("/me", (req, res) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ message: "Token is required." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const foundUser = users.find((user) => user.username === decoded.username);

    if (foundUser) {
      res.json({ username: foundUser.username, password: foundUser.password });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
