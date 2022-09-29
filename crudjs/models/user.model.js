const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    gender :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    active :{
        type:String,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('User',userSchema);