import dotenv from "dotenv";
dotenv.config();

import http from "http";

const SERVER_PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  console.log("URL: ", req.url);
  console.log(req.method );
  // res.writeHead(500, { "Content-Type": "application/json" });
  // res.end(JSON.stringify({ message: "Server error" }));
});

server.listen(SERVER_PORT, () => {
  console.log(`server is running on port: ${SERVER_PORT}`);
});
