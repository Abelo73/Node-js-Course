import url from "url";

const urlString = "https://www.google.com/search?q=hello+worlled";

const urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.searchParams.get("q")); // outputs: "hello+world"
