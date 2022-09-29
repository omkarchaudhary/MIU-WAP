const req = require('express/lib/request');
const res = require('express/lib/response');
/*import express here --->*/const express = require('express');
const session = require('express-session');
/*import product here --->*/const product = require('./product');
const bodyParser = require('body-parser');
const products = [new product("Clock", "To tell the time.", 15, 'https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdda7d87988621de332dd_simply-productimg-6.jpg'),
new product("Chair", "To sit on.", 200, 'https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde965d8bac2ad7160b2e_simply-productimg-4.jpg'),
new product("Light", "To see things.", 394, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf797c41e5725aee16df_simply-productimg-1.jpg"),
new product("Table", "To put things on.", 302, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf006640d06648846d06_simply-productimg-3.jpg"),
new product("Zebra Frame", "A picture frame showcasing zebra skin.", 44934, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf24dec3494629cc1926_simply-productimg-7.jpg"),
new product("Sofa", "To chill on.", 230, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdde6c1617c0acf787ae3_simply-productimg-2.jpg"),
new product("Dining Chair", "To sit on while dining", 34, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdeefdec349268ccc173b_simply-productimg-9.jpg"),
new product("Wooden Chair", "To sit on, but less comfortably.", 232, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde857c41e5fb5dee10b9_simply-productimg-5.jpg"),
new product("Bowls", "To serve soup in.", 2, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde13dec3492863cc1310_simply-productimg-8.jpg")]

/*initialize your app here --->*/
app = express();
/*set up the view engine here --->*/
app.set( 'view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser());
app.use(express.urlencoded({extended:false}));
/*set up your session secret here*/
app.use(session({
    secret:"some secret word"
}));
let cartCount = 0;


app.get('/', (req,res)=>{
    if(req.session.items){
    // res.locals.products=req.session.products + req.session.items.length;
    //res.locals.products = req.session.items;
    cartCount = req.session.items.length;
    }
    res.locals.products = products;
    res.locals.n = cartCount;
    
    res.render('index.ejs');
});

app.get('/p', (req,res)=>{
    //res.locals.products=req.session.products;
    res.locals.products=products[req.query.pnumber];
    res.locals.n = cartCount;
    res.locals.i = req.query.pnumber;
    res.render('product.ejs')
});

app.post('/add',(req,res, next)=>{
    if(!(req.session.items)){
        req.session.items=[];
    }
    //next();
    // req.session.items.push(req.body.products[i]);
    req.session.items.push(products[req.body.i]);
    res.redirect('/');
});

app.get('/cart', (req,res)=>{
    if(req.session.items){
        //res.locals.items=req.session.items + req.session.items.length ;
        res.locals.items=req.session.items;
        cartCount = req.session.items.length;
    }
    res.locals.n = cartCount;
    res.render('cart');
});
app.get('/contact',(req,res)=>{
    if(req.session.items){
        res.locals.items=req.session.items;
        cartCount = req.session.items.length;
    }
    res.locals.n = cartCount;
    res.render('contact');
});

const port=3000;
/*start your server here --->*/app.listen(port, ()=>{
    console.log(`server running on ${port}`)
});



