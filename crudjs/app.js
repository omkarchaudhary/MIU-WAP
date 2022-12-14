const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/testdb';

const userRoute = require('./routes/user');

const app = express();
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', function(){
    console.log('connected...');
});

app.use(express.urlencoded({extended:false}));

app.get('/user',userRoute);

app.listen(3000, function(){
    console.log('Server started');
})