const express = require("express");
const { PORT } = require("./config/serverConfig");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/hello", (req, res) => {
  res.json({
    wow: "nice",
  });
});

const setupAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
};

setupAndStartServer();
