import http from "http";

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end({ message: "Hello World" });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
