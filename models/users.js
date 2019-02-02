const mongoose = require('mongoose')
const schema  = mongoose.Schema({
    name : {type : String, required : false}, 
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    gender : {type : String, required : false},
    dob : {type : Date, default : Date.now()},
    email : {type : String, required : true},
    phone : {type : Number, required : true},
    password : {type : String, requried : true }
})

module.exports  = mongoose.model("Users", schema)