import http from "http";

const PORT = 9000;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>Home Page</h2>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>About Page</h2>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h2>Page Not Found</h2>");  
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h2>Internal Server Error</h2>");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
