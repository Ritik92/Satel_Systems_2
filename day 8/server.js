const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

function middleware(req,res,next){
 if(req.username=="somethng"){
  next();
 }
 else{
  res.status(400).send("Username is wrong")
 }

}

// get route
app.get('/',middleware, (req, res) => {
  res.send('Hello from GET route!');
});

// post route
app.post('/add',middleware, (req, res) => {
  res.send('Hello from POST route!');
});

// PUT route - updation
app.put('/put/:id', (req, res) => {

  res.send('Hello from PUT route!');
});

//DELETE route 
app.delete('/delete/:id', (req, res) => {
  res.send('Hello from DELETE route!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});