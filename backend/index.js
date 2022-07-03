const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*', // cors, but allow only your client in actual project
  }
});

io.on("connection", (socket) => {
  console.log("Socket is: ", socket);

  socket.on("chat", payload => {
    console.log("Payload is: ", payload);

    io.emit("chat", payload);
  });
});

server.listen(5000, () => {
  console.log("Listening at port 5000...");
});
