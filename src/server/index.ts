
import express from "express";

import { connector, register } from "../client/connector"


const app = express();

app.set("x-powered-by", false);
app.use(express.json())
app.use(require("./middlewares/loggerMiddleware"));


app.get("/help", (req, res) => {
  res.status(200).send(`Connect to server via "<hostname>.wolframblack.com"`);
});

// Main proxy entrance
app.get("/", (req, res) => {
  // Tunnel here
  const hostname = req.subdomains[0];

  connector(hostname, req.socket);
});

app.post("/register", (req, res) => {
  register(req.hostname, req.ip);
  res.status(201).end();
});


console.log("API running on 8080");
app.listen(8080);
