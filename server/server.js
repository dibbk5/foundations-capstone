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
  zeroTakeoff,
  newInteriorTakeoff,
  getAllExterior,
  newExteriorTakeoff,
} = require("./controller.js");

app.use(express.json());
app.use(cors());

//Seed Database
app.post("/seed", seed);

//Get All Interior Takeoffs
app.get("/interior", getAllInterior);
app.get("/exterior", getAllExterior);

//Add/Subtract/Zero Out Takeoffs
app.put("/plus/:id", plusTakeoff);
app.put("/minus/:id", minusTakeoff);
app.put("/zero/:id", zeroTakeoff);

//Create new takeoff
app.post("/interior", newInteriorTakeoff);
app.post("/exterior", newExteriorTakeoff);

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));
