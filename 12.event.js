import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greatHandler(name) {
  console.log("Hello " + name);
}

function goodByHandler() {
  console.log("Goodby World");
}

// Register event listener

myEmitter.on("greet", greatHandler);

myEmitter.on("goodby", goodByHandler);

// Emit event

myEmitter.emit("greet", "John");

myEmitter.emit("goodby");
