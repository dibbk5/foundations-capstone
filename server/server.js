require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { SERVER_PORT } = process.env;
const { seed } = require("./seed.js");
const {} = require("./controller.js");

app.use(express.json());
app.use(cors());

//Seed Database
app.post("/seed", seed);

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));
