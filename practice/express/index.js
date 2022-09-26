const express = require('express');
const app = express();

// middleware
app.use(express.urlencoded({extended:false}));

//local variable
let list = [];

app.get('/',(req,res) => {
    let output = "<ul>";
    for(ls of list){
        output += `<li>${ls} </li>`;
    };
    output += "</ul><a href ='/add'>add</href>";
    res.send(output);
});

app.get('/add',(req,res) =>{
    let htmlForm = '<form method="post" action="/add"><input type="text" name="item" /><input type="submit" /></form>';
    res.send(htmlForm);
})

app.post('/add',(req,res) =>{
    list.push(req.body.item);
    res.redirect(303,'/');
})

app.listen(3000,'localhost',() => {
    console.log("listen server..");
});