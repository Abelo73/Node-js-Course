import fs from "fs/promises";

const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readFile();

const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", "\nThis is appended text");
    console.log("File appended successfully");
  } catch (error) {
    console.log(error);
  }
};

appendFile();
