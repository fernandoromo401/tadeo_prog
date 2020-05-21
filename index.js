const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const port = "8080";

let corsOption = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOption));
app.use(bodyparser.json());
app.listen(port, () => {
  console.log("Puerto ", port);
});

app.get("/", (req, res) => {
  res.status(200).send({
    response: "API funcionando en el puerto 8080",
    status: 200,
  });
});

app.get("/version", (req, res) => {
  const apiInfo = {
    name: "api-1",
    version: "1.0",
    author: "Fernando Romo",
    licence: "MIT",
  };

  res.status(200).send(apiInfo);
});

app.get("/profesor", (req, res) => {
  const apiInfo = {
    name: "Tadeo",
    lastName: "Riveros",
    mail: "prof.tadeoriveros@iesmb.edu.ar",
  };

  res.status(200).send(apiInfo);
});

app.post("/", (req, res) => {
  res.status(200).send({
    ip: req.ip,
    host: req.host,
  });
});
