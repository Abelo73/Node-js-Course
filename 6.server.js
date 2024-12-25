import { createServer } from "http";

const PORT = 5000;

const Products = [
  { id: 1, name: "Mango", price: 10 },
  { id: 2, name: "Avocado", price: 20 },
  { id: 3, name: "Banana", price: 30 },
  { id: 4, name: "Apple", price: 40 },
  { id: 5, name: "Orange", price: 50 },
];

const getProducts = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(Products));
  res.end();
};

const getProductByID = (req, res) => {
  const id = req.url.split("/")[2];
  const product = Products.find((product) => product.id == id);
  if (product) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Product not found" }));
  }
};

const server = createServer((req, res) => {
  if (req.url === "/products") {
    getProducts(req, res);
  } else if (req.url.match(/\/products\/\d+/)) {
    getProductByID(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
