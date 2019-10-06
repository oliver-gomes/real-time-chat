const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require("./router");

const PORT = process.env.PORT || 5000;

io.on("connection", socket => {
  console.log("We have a new connection!!!");

  socket.on("disconnect", () => {
    console.log("User had left!!!");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
