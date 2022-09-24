const express = require('express');
const app = express();
const path = require('path');

 app.use(express.json());
 app.use(express.urlencoded({extended: false}));

 const date = new Date();
 const hour = date.getHours();
 
 if( hour > 6 && hour < 18)
app.use('/daycss',express.static(path.join(__dirname, 'css')));

if(hour >18 && hour < 6)
app.use('/nightcss',express.static(path.join(__dirname, 'css')));

app.get('/', (req,res,next) =>{
    res.sendFile('index.html',{root : __dirname});
})

app.post('/result', (req, res, next) =>{
    let formData = req.body;
    res.send(`Welcome ${formData.name} and the age is ${formData.age}`);
})

app.listen(3000);