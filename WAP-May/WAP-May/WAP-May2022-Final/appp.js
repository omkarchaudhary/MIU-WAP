
const path=require("path")
/*import express here --->*/
const express = require('express');

const session = require('express-session');


/*import product here --->*/

const product = require('./product');


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
const app = express();
/*set up the view engine here --->*/
app.set( 'view engine', 'ejs');


app.use(express.static('public'));

// app.use('/mycss', express.static(path.join(__dirname, 'public', 'css')));
// app.use('/img', express.static(path.join(__dirname, 'public', 'images')));
//  app.use('/js', express.static(path.join(__dirname, 'public', 'js')));

app.use(bodyParser())

/*set up your session secret here*/
app.use(session({
    secret:"some secret word",
    resave:true,
    saveUninitialized:true
}));

app.get('/', (req,res)=>{
    // if(req.session.items){
    // res.locals.products=req.session.products + req.items.length;
    // }else{
    //     res.locals.products=req.session.products;
    // }

   let n=0;
   if(!req.session.items){
       
    req.session.items=[]
   } else {
    n= req.session.items.length
   }

    res.render('index',{n: n, products: products});
});

app.get('/p', (req,res)=>{
    const index=req.query.pnumber;
   
    const product=products[index];

    let n=0;
    if(!req.session.items){
        
     req.session.items=[]
    } else {
     n= req.session.items.length
    }

    res.render('product',{product:product,n:n,i:index})
});

app.post('/add',(req,res, next)=>{
    
    const index=req.body.cartItem;
    
     const product=products[index];

    if(!(req.session.items)){
        req.session.items=[];
    }
  
   req.session.items.push(product);
   console.log(req.session.items)

    res.redirect('/');

});

app.get('/cart', (req,res)=>{

    if(!(req.session.items)){
        req.session.items=[];
    }
  //  res.locals.items=req.session.items + req.session.items.length ;


  let total=0;
  if(req.session.items.length > 0){
    //let items = req.session.items;
    //items.map(item => item.price).reduce((total,price) => total+price);
    // another way
    //total=req.session.items.map(item=> item.price).reduce((total,init)=>total+init,0);
    req.session.items.forEach(item => {
        total += item.price;
    });
  }

    res.render('cart',{items: req.session.items , n:req.session.items.length, total: total});
});
app.get('/contact',(req,res)=>{
   
    if(!(req.session.items)){
        req.session.items=[];
    }
    res.render('contact',{n:req.session.items.length});
});

const port=4000;
/*start your server here --->*/app.listen(port, ()=>{
    console.log(`server running on ${port}`)
});



