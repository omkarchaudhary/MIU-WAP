const express = require('express');
const app= express();

app.use(express.urlencoded({extended:false}));

let list= [];

app.get('/', (req,res, next)=>{
    let output='<ul>';
    for (i of list){
        output+=`<li>${i}</li>`;
    }
    output+= "</ul><a href= '/add'>Add to List</a href>";
    res.send(output);
});

// BRAVO Mahi
app.get('/add', (req,res)=>{
    res.send(`<form method="post"><input name="item"/><input type="submit" value="Add"></form>`)
});
app.post('/add', (req,res)=>{
    list.push(req.body.item);
    res.redirect('/');
});

const port =3007;
app.listen(port, ()=>{
    console.log(`server running on port ${3007}`);
});

