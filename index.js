const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const job = require("./job");

server.listen(3002, () => console.log("Server is running at port 3002"));

io.of("/live").on("connection", (socket) => {
  console.log("connected new user from live");
  job.initializeSocket(socket);
});

job.start();
