const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const body_parser = require('body-parser')

//connect to mongodb 
const db = require('./config/keys').mongodbUri
mongoose.connect(db, {useNewUrlParser : true}).then(_ => console.log("db connected"))
.catch(err => console.log(err))

app.use(body_parser.json())
app.use('/users', userRoutes)

app.get('/a', (req, res) =>{
    res.send("jyoti")
})

module.exports = app