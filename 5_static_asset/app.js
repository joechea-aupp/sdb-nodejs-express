import express from "express";
import { join } from "path";
const app = express();

app.use("/assets", express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Blog Chef say Hello!</h1>");
});

app
  .get("/admin/login", (req, res) => {
    res.sendFile(join(__dirname, "views", "login.html"));
  })
  .post("/admin/login", (req, res) => {
    res.send("Login successful");
  });

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000"),
);
