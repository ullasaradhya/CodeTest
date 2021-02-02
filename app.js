const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const env               = require('dotenv').config();
const routes            = require('./routes/shorturl')  
const databaseConnect   = require('./helpers/dbConnect');  
const logger            = require('morgan');


databaseConnect.dbConnect()
    .then(()=>{
        console.log('DATABASE CONNECTED SUCCESFULLY....');
    })
    .catch((error)=>{
        console.log('ERROR IN DATABASE CONNECTION ....', error);
        process.exit(0);
    })

process.on('SIGINT', ()=>{
    console.log('RECIEVED SIGNAL TO CLOSE, PLEASE WAIT...');
    databaseConnect.dbClose()
    .then(()=>{
        console.log('DB CONNECTION SUCCESFULLY CLOSED');
        process.exit(0);
    })
    .catch(()=>{
        console.log('ERROR IN CLOSING DATABASE CONNECTION');
        process.exit(0);
    });    
})

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded(false));

app.use('/', routes);

module.exports = app;