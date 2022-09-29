const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/', async(req, res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.send('Error '+err);
    }
});

router.post('/',async(req,res) =>{
    const user = new User({
        name: req.body.name,
        gender: req.body.gender,
        address: req.body.address,
    });

    try{
        const user1 = await user.save();
    }catch(err){
        res.send('Error '+err);
    }
})

module.exports = router;