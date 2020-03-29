/*
const io = require('socket.io')(3000)

io.on('connection',socket => {

socket.emit('chat-message','Hello world')

})
*/

const express = require('express');
const socket = require('socket.io');
const app = express();


const server = app.listen(3000,()=>{


})

app.use(express.static('views'));

const io = socket(server);

io.on('connection',(socket)=>{

console.log('run socket web',socket.id);

socket.on('chat',(data)=>{

io.sockets.emit('chat',data);


});

// on add

socket.on('typing',(data)=>{

socket.broadcast.emit('typing',data);

});



//



});







