const mongoose = require('mongoose');

const mongoDB = process.env.DB;

function dbConnect(){
   
   return mongoose.connect(mongoDB, {useNewUrlParser : true, useUnifiedTopology : true});
}

function dbClose(){
   return mongoose.disconnect();
}

module.exports = {dbConnect, dbClose};