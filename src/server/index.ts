
import express from "express";

import { register } from "../client/connector"


const app = express();

app.set("x-powered-by", false);
app.use(express.json())
app.use(require("./middlewares/loggerMiddleware"));


app.get("/help", (req, res) => {
  res.status(200).send(`Connect to server via "<hostname>.wolframblack.com"`);
});

app.post("/register", (req, res) => {
  const hostname = req.body.hostname;
  register(hostname, req.ip, req.socket);
  // res.status(201).end();
});


console.log("API running on 80");
app.listen(80);
