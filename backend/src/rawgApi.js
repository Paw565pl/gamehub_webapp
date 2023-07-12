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

const sendRequest = (endpoint, queryParams = {}) => {
  return rawgApi
    .get(endpoint, { params: queryParams })
    .then(({ data }) => ({
      next: data.next !== null ? true : false,
      results: data.results,
    }))
    .catch((err) => err);
};

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // DEV
    // origin: "https://gamehub-6pvp.onrender.com",
    optionsSuccessStatus: 200,
  })
);

app.get("/games", (req, res) =>
  sendRequest("/games", req.query).then((response) => res.send(response))
);

app.get("/games/:id", (req, res) =>
  rawgApi
    .get("/games/" + req.params.id)
    .then(({ data }) => res.send(data))
    .catch((err) => res.send(err))
);

app.get("/games/:id/:resource", (req, res) =>
  sendRequest(`/games/${req.params.id}/${req.params.resource}`).then(
    (response) => res.send(response)
  )
);

app.get("/genres", (req, res) =>
  sendRequest("/genres", req.query).then((response) => res.send(response))
);

app.get("/platforms/lists/parents", (req, res) =>
  sendRequest("/platforms/lists/parents", req.query).then((response) =>
    res.send(response)
  )
);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
