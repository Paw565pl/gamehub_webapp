const axios = require("axios");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.RAWG_API_KEY,
  },
});

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

app.get("/games", (req, res) => {
  rawgApi
    .get("/games", {
      params: req.query,
    })
    .then(({ data }) => res.send(data.results))
    .catch((err) => res.send(err));
});

app.get("/genres", (req, res) => {
  rawgApi
    .get("/genres", {
      params: req.query,
    })
    .then(({ data }) => res.send(data.results))
    .catch((err) => res.send(err));
});

app.get("/platforms/lists/parents", (req, res) => {
  rawgApi
    .get("/platforms/lists/parents", {
      params: req.query,
    })
    .then(({ data }) => res.send(data.results))
    .catch((err) => res.send(err));
});

app.listen(process.env.PORT);
