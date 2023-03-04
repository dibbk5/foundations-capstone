require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { SERVER_PORT } = process.env;
const { seed } = require("./seed.js");
const {
  getAllInterior,
  plusTakeoff,
  minusTakeoff,
} = require("./controller.js");

app.use(express.json());
app.use(cors());

//Seed Database
app.post("/seed", seed);

//Get All Interior Takeoffs
app.get("/interior", getAllInterior);
app.put("/plus/:id", plusTakeoff);
app.put("/minus/:id", minusTakeoff);

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));
