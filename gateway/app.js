const express =require('express');
const expressProxy = require('express-http-proxy')
const app = express();

app.use('/user',expressProxy('http://localhosy:3001'))
app.use('/captain',expressProxy('http://localhosy:3002'))
app.use('/ride',expressProxy('http://localhosy:3003'))

app.listen(3000,()=>{
    console.log('gateeay is running on port 3000')
})