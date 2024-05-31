import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Blog Chef say Hello!</h1>");
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000"),
);
