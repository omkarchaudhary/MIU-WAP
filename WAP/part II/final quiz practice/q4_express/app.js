const express= require('express');
const app= express();

app.use(express.urlencoded({extended:false}))

let list =[];

app.get('/', (req,res)=>{
    let output='<ul>';
    for(i of list){
        output+=`<li>${i}</li>`;
    }
    output+= "</ul><a href= '/add'>Add</a href>";
    res.send(output);
})
app.get('/add', (req,res)=>{
    res.send(`<form method="post"><input name="item"/><input type="submit" value="Add"></form>`)
})
app.post('/add', (req,res)=>{
    list.push(req.body.item);
    res.redirect('/');
})
app.listen(4000);