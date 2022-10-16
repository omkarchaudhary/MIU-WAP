const express = require('express');
const app= express();
const path = require('path');
const cookieParser= require('cookie-parser');
const session= require('express-session')
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


app.use(session({
    secret:'secret1225845122',
    resave:false,
    saveUninitialized:false,
    maxAge: 60*1000
}));

// app.get('/', (req, res, next)=>{
//     if(req.cookies.studentId){
//         console.log("Your student ID is:" + req.cookies.studentId);
//         res.clearCookie('studentId');
//     }else{
//         res.cookie("studentId", 316458, {maxAge:10000});
//         console.log("cookie created!")
//     }
//     res.render('index');
// });

app.get('/', (req,res)=>{
    if(req.session.studentId){
        console.log('i got your id ' +req.session.studentId + ", " + req.session.cookie.maxAge)
    }else{
        req.session.studentId= 123456;
        console.log('session created')
    }
    res.render('index');
})


const port=3008;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})