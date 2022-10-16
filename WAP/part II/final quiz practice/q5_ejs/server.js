const express= require('express');
const app = express();
const bodyParser= require('body-parser');
const path=require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('engine views', 'ejs');

let products=[];

app.get('/', (req, res)=>{
    res.locals.products=products;
    res.render('products')
});

app.get('/add', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'view', 'form.ejs'))
});

app.post('/add', (req,res, next)=>{
    let product=req.body.product;
    products.push(product);
    res.redirect('/');
});

app.listen(3001);
