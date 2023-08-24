// 1. Import http librabry/module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  res.end("Welcome to NodeJS Ninja Server");
});
// Specify a port to listne
server.listen(3100, () => {
  console.log("Server is listening on port 3100");
});
