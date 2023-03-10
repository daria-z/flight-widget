const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

app.get("/flights", (reg, res) => {
  const options = {
    method: "GET",
    url: "https://toronto-pearson-airport.p.rapidapi.com/arrivals",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log("running on PORT " + PORT));
