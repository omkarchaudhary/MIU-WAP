const express = require('express');
const app = express();
app.get('/', (req, res) => {
 let name = req.query.name;
 let age = req.query.age;
 if (!name || !age) {
 name = "person";
 age = 25;
 }
 res.send(`Welcome ${name} and the age is ${age}`);
});
app.listen(3000);
