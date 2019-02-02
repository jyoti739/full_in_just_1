const mongoose = require('mongoose')
const schema  = mongoose.Schema({
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    gender : {type : String, required : false},
    dob : {type : Date, default : Date.now()},
    gmail : {type : String, required : true},
    phone : {type : Number, required : true}
})

module.exports  = mongoose.model("User", schema)