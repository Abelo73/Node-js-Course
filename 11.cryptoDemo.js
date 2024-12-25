import crypto from "crypto";

// Create Hash

const hash = crypto.createHash("sha256");

hash.update("password1234");
console.log(hash.digest("hex"));

// Random bytes

crypto.randomBytes(16, (err, buf) => {
  console.log(buf.toString("hex"));
});

// createCipheriv

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update("Hello this is a secret message", "utf8", "hex");

encrypted += cipher.final("hex");

console.log(encrypted);

// Decoding

const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encrypted, "hex", "utf8");

decrypted += decipher.final("utf8");

console.log(decrypted);
