const express= require('express');
const app= express();
const path= require('path');
// const bodyParser= require('body-parser');
const session = require('express-session');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}));

app.use(session({
    secret: "something",
    resave: false,
    saveUninitialized:true
}));
app.use((req,res,next)=>{
    if(!(req.session.list)){
        req.session.list=[];
    }
    next();
})
app.get('/',(req,res)=>{
    res.locals.list=req.session.list;
    res.render('list');
})
app.get('/add', (req,res)=>{
    res.render('form');
})
app.post('/add',(req,res)=>{
    req.session.list.push(req.body.item);
    res.redirect('/');
})

const port=3004;
app.listen(port,()=>{
    console.log(`running server on port ${port}`);
});