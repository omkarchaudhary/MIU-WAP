const express = require('express');
const app= express();
const path = require('path');
const cookieParser= require('cookie-parser');
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/', (req, res)=>{
    if(req.cookies.newcookie2){
        console.log('your cookie id is ' + req.cookies.newcookie2)
        res.clearCookie('newcookie');
    }else{
        res.cookie('newcookie2',3456, {maxAge: 7*24*60*60*1000});
        console.log('cookie just created')
    }
    res.render('index')
})

let port=4002;
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})