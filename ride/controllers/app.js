
const express = require('express');
const cookieParser = require('cookie-parser');
const connect = require('./db/db');
const rideRoute = require('./routes/rideRoutes')
const dotenv = require('dotenv')
dotenv.config();
connect();
const rabbitMq = require('./service/rabbit')

rabbitMq.connect();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use('/',rideRoute)


module.exports = app;