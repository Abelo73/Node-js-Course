import crypto from "crypto";

// Create Hash

const hash = crypto.createHash("sha256");

hash.update("password1234");
console.log(hash.digest("hex"));


// Random bytes

crypto.randomBytes(16, (err, buf) => {
  console.log(buf.toString("hex"));
});




