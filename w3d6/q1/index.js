const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"view"));

app.use(express.static("css"))

const date = new Date();
const hour = date.getHours();
let dayTime = false;

app.use((req,res,next)=>{
    if( hour > 6 && hour < 18){
        dayTime = true;
    }else{
        dayTime = false;
    }
    next()
})



app.get('/', (req,res) =>{
    const date = new Date();
    res.render("index",{
        time: date.toTimeString(),
        cssSelector : dayTime ? "/day.css" : "/night.css",
    });
});

app.listen(3000);