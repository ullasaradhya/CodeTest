const http = require('http');
const app = require('./app');


const PORT = process.env.PORT || 3000;


app.set('port', PORT);

process.on('unhandledRejection', function(reason ,error){
    console.log(reason);
})


var server = http.createServer(app);
server.listen(PORT)

server.on('listening', ()=>{
    console.log('Server Listening on ', PORT);
})
