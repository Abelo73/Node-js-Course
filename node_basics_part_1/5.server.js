import { createServer } from "http";

const PORT = 8080;

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
];

// Logger middleware

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const jsonMiddlewareHandler = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users

const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id

const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/").pop();
  const user = users.find((user) => user.id == id);
  if (user) {
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.statusCode = 404;
    res.write("User not found");
    res.end();
  }
};

// Not Found handler

const notFoundHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not Found" }));
  res.end();
};

// Route handlers for POST

const createUserHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddlewareHandler(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
        getUserByIdHandler(req, res);
      }else if(req.url === "/api/users" && req.method ==="POST"){
        createUserHandler(req, res)
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
