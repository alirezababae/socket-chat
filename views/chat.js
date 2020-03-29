var socket = io.connect('http://localhost:3000');


// Query Dom

var message = document.getElementById('Message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var dbchat = document.getElementById('dbchat');
// emit events

btn.addEventListener('click',()=>{

socket.emit('chat',{
    message:message.value,
    handle:handle.value 
});

});

// on ad

message.addEventListener('keypress',()=>{

socket.emit('typing',handle.value);


});
//

// lisent events


socket.on('chat',(data)=>{
dbchat.innerHTML = "";
output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';



});

//on add


socket.on('typing',(data)=>{

    dbchat.innerHTML = '<p><em>' + data + ' is typing...</em></p>'; 


})