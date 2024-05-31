import express from "express";
import { parse } from "querystring";
const app = express();

const isPalindrome = (str) => {
  let timeAndPrepare = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return timeAndPrepare === timeAndPrepare.split("").reverse().join("");
};

app.get("/", (req, res) => {
  res.status(200).send("<h1>Blog Chef say Hello!</h1>");
});

app.post("/palindrome", (req, res) => {
  let body = "";
  req.on("data", (data) => (body += data));
  req.on("end", () => {
    let { word } = parse(body);
    res.send(
      word
        ? {
            word,
            isPalindrome: isPalindrome(word),
          }
        : { message: "No word provided" },
    );
  });
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000"),
);
