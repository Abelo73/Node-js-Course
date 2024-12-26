import path from "path";

const filePath = "./dir1/dir2/test.txt";

// Basename

console.log(path.basename(filePath));

// Dirname

console.log(path.dirname(filePath));

// Extension

console.log(path.extname(filePath));

// Parse

console.log(path.parse(filePath));
