const express = require('express');
const app = express();
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
let listOfCookie = [];

app.get('/',(req,res)=>{
    let htmlElement = '<form method="post" action="/addCookie">';
        htmlElement += '<label>Key</label><input type="text" name="key" />';
        htmlElement += '<label>Value</label><input type="text" name="value" />';
        htmlElement += '<input type="submit" value="Add Cookies" />';
        htmlElement += '</form>';
        if(req.cookies.key){
            let cookObj = {"key" : req.cookies.key, "value":req.cookies.value};
            listOfCookie.push(cookObj);
            htmlElement += `<table>
            <tr><th>Key</th><th>Value</th></tr>`;
            for(ls of listOfCookie){
                htmlElement += `<tr><td>${ls.key}</td><td>${ls.value}</td></tr>`;
            };
            htmlElement += '</table>';
        }
    res.send(htmlElement);
})

app.post('/addCookie',(req,res) =>{
    res.cookie('key', req.body.key);
    res.cookie('value', req.body.value);
    res.redirect(303,'/');
})

app.listen(3000);