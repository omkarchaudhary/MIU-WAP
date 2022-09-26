const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(session({secret:'anything you want'}));
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
    req.session.user = req.body; 
    res.redirect(303,`/output`);
})

app.get('/output', (req, res) => {
    if(req.session.user.name){
        res.send(`Welcome ${req.session.user.name} and the age is ${req.session.user.age}`);
    }
    else{
        res.redirect('back');
    }
   });

app.listen(3000);