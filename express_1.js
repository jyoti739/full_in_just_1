const express = require('express')
const app = express()
const path  = require('path')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const body_parser = require('body-parser')
const passport = require('passport')

//connect to mongodb 
const db = require('./config/keys').mongodbUri
mongoose.connect(db, {useNewUrlParser : true}).then(_ => console.log("db connected"))
.catch(err => console.log(err))
//cors handling should be here before any routes
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requseted-With, Content-type, Accept, Authorization')
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-methods", "GET, PUT, PATCH, POST, DELETE")
        res.status(200).json({message_from_use_middleware : "OK" })
    }
    next()
})  

// apply body parser middleware
app.use(body_parser.urlencoded({extended : false})) 
app.use(body_parser.json())
app.use('/users', userRoutes)



// passport middleware
app.use(passport.initialize())
// passport config 
require('./config/passport')(passport)
app.get('/a', (req, res) =>{
    res.send("jyoti")
})
// Serve static assets if it is in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(app.static('clientside/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000
app.listen(port, () => console.log("port is listening at ", port ))

// module.exports = app