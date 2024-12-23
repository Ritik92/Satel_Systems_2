const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'a.txt');
console.log("finaldirectory:",filePath)
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});