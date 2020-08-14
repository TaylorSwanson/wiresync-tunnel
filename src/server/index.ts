
import express from "express";

import * as client from "../client";


const app = express();

app.set("x-powered-by", false);
app.use(express.json())


app.get("/connect", (req, res) => {
  console.log({
    ip: req.ip,
    method: req.method,
    path: req.path,
    query: req.query,
    subdomains: req.subdomains
  });


});

app.post("/register", (req, res) => {
  
});


console.log("API running on 8080");
app.listen(8080);
