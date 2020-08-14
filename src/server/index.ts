
import express from "express";

import * as client from "../client";


const app = express();

app.set("x-powered-by", false);
app.use(express.json())
app.use(require("./middlewares/loggerMiddleware"));


app.get("/", (req, res) => {
  res.status(200).end();
});

app.post("/register", (req, res) => {
  
});


console.log("API running on 8080");
app.listen(8080);
