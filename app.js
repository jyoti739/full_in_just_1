const http = require('http')
const express = require('express')
const app  = require('./express_1')
const path = require('path')
const server = http.createServer(app)



// Serve static assets if it is in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('clientside/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000
server.listen(port, () => console.log("port is listening at ", port ))

