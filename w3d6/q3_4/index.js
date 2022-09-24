const express = require('express');
const app = express();
const path = require('path');

 app.use(express.json());
 app.use(express.urlencoded({extended: false}));

 
app.set('view engine', 'ejs');
let productList =[];
let product = {
    name : "Macbook Pro",
    price : "$2000",
    description: "The latest MacBook pro with M2 chip",
    id: "MAC-1234",
    imageUrl : "https://www.itresale.co.uk/wp-content/uploads/2020/12/IMG_4072-2048x1984.jpg"
}

app.get('/', (req,res,next) =>{
    res.render('product',{
        pageTitle:"Product",
        product: product
    });
})

app.post('/addToCart', (req, res, next) =>{
    //productList.push(req.body);
    productList.push(product);
    res.render('shoppingcart', {
        pageTitle:"Product",
        product:productList
    })
})

app.listen(3000);