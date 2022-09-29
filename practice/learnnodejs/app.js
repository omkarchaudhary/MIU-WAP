const express = require('express');
const path = require('path');
const session = require('express-session');

const port = 3000;
const hostname = 'localhost';

const app = express();

app.use(session({secret:'any secret key'}));
const viewsPath = path.join(__dirname,'views');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
let listItem = [];

app.get('/',(req,res,next) =>{
    //res.send('Hello Wap');
    //res.sendFile('index.html'); we need to give correct path
    //res.locals.name = 'Eman';
    if(!req.session.list){
        req.session.list =[];
    }
    listItem = req.session.list;
    res.render('index',{anyname:'Eman', list : listItem});

});

app.get('/contact',(req,res) =>{
    res.render('contact');
});

app.post('/contact',(req,res) =>{
    if(req.session.list){
        req.session.list.push(req.body);
    }
    res.redirect('/');
});

app.listen(port,hostname, () =>{
    console.log('server started..');
});