
const express = require("express");
const app = express();
app.set('view engine','ejs');
app.use("/", (req, res ,next)=> {
    console.log(`serving static page`);
    res.send("<p>This is my static response</p>");
});

app.get('/hello', (req, res, next)=>{
    res.redirect(path.join(__dirname, "/", "index.html"));
});

app.use("/red", (req, res, next)=> {
    //do with parameters.....
    res.redirect("https:www.google.com");
});

app.post('/red', (req,res, next)=>{
    res.redirect("/hello");
});
app.post('/blue', (req, res, next)=> {
    let x=15;
    res.render("blue.ejs");
});


const port= 3000;
app.listen(port, ()=> {
    console.log(`Running server on port ${port}`);
});


 