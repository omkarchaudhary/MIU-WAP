const express= require('express');
const app= express();
const path= require('path');

// app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/', function(req,res){
    res.render('index');
});

app.listen(3001,()=> {
    console.log(`server running on 3001`);
});
