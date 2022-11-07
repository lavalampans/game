const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('ping', () => {
        console.log('pong')
		socket.emit('pong', 'hello world');
	});
});

server.listen(3000, () => {
	console.log(`listening on *:${PORT}`);
});
