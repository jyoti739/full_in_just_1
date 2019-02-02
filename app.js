const http = require('http')

const app  = require('./express_1')
const server = http.createServer(app)



const port = process.env.PORT || 5000
server.listen(port, () => console.log("port is listening at ", port ))

