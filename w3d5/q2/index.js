const express = require('express');
const app = express();
 app.use(express.json());
 app.use(express.urlencoded({extended: false}))

app.get('/', (req,res,next) =>{
    res.send('<form action="/result" method="post">'+
    '<label>Name</label><input name="name">'+
    '<label>Age</label><input name="age">'+
    '<button type="submit">Submit</button></form>');
})

app.post('/result', (req, res, next) =>{
    let formData = req.body;
    console.log(formData);
    res.send(`Welcome ${formData.name} and the age is ${formData.age}`);
})

app.listen(3000);