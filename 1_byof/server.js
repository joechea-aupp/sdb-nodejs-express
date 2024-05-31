import Waffle from "./lib/index.js";
const server = new Waffle();

server.get("/", (res) => res.send("Hello from waffle!"));

server.get("/api", (res) => {
  res.json({
    name: "Sherlock Holmes",
    occupation: "Detective",
    city: "London",
  });
});

server.get("/blog", (res) => {
  res.html("blog");
});

server.start(3000, () => console.log("server running on port 3000"));
