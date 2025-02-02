const WebSocket = require('ws'); 
const port = 8080; // Set the desired port 
const wss = new WebSocket.Server({ port }); 
// Shared state of the to-do list 
let todos = []; 
wss.on('listening', () => { 
console.log(`WebSocket server is listening on port ${port}`); 
}); 
wss.on('connection', ws => { 
// Send the current to-do list to the newly connected client 
ws.send(JSON.stringify(todos)); 
ws.on('message', message => { 
const receivedMessage = message.toString(); // Convert the message to a string 
console.log(receivedMessage); 
if (receivedMessage === '\"reset!*(@h9890138ch1908\"') { 
// Reset the to-do list 
todos = []; 
} else { 
// Add the new to-do item to the shared state 
todos.push(receivedMessage); 
} 
// Broadcast the updated to-do list to all connected clients 
wss.clients.forEach(client => { 
client.send(JSON.stringify(todos)); 
}); 
}); 
});