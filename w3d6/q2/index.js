const express = require('express');
const app = express();
const path = require('path');

 app.use(express.json());
 app.use(express.urlencoded({extended: false}));

 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"view"));

app.get('/', (req,res,next) =>{
    res.render('index');
})

app.post('/result', (req, res, next) =>{
    let formData = req.body;
    res.send(`Welcome ${formData.name} and the age is ${formData.age}`);
})

app.listen(3000);