const http = require ('http')
const app = require('./app')

const server = http.createServer(app);

server.listen(3001,()=>{
    console.log('user services is running on port 3001')
});