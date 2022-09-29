const express = require('express');
const path = require('path');
const app = express();

let list =[];
app.set('views',path.join(__dirname,'view'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) =>{
    res.locals.list = list;
    res.render("list");
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'form.html'));
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(302, "/");
   });
   app.listen(3000);