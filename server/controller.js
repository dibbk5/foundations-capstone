require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getAllInterior: (req, res) => {
    sequelize
      .query(
        `
        SELECT * FROM takeoffs
        WHERE interior = true
        ORDER BY id ASC;`
      )
      .then((dbResult) => {
        res.status(200).send(dbResult[0]);
      })
      .catch((err) => console.log(err));
  },
  plusTakeoff: (req, res) => {
    let { id } = req.params;

    sequelize
      .query(
        `
    UPDATE takeoffs
    SET total = total + 1
    WHERE id = ${id};`
      )
      .then((dbResult) => {
        res.status(200).send(dbResult[0]);
      })
      .catch((err) => console.log(err));
  },
  minusTakeoff: (req, res) => {
    let { id } = req.params;

    sequelize
      .query(
        `
    UPDATE takeoffs
    SET total = total - 1
    WHERE id = ${id};`
      )
      .then((dbResult) => {
        res.status(200).send(dbResult[0]);
      })
      .catch((err) => console.log(err));
  },
  zeroTakeoff: (req, res) => {
    let { id } = req.params;

    sequelize
      .query(
        `
    UPDATE takeoffs
    SET total = 0
    WHERE id = ${id};`
      )
      .then((dbResult) => {
        res.status(200).send(dbResult[0]);
      })
      .catch((err) => console.log(err));
  },
  newInteriorTakeoff: (req, res) => {
    let { description, unit, total } = req.body;

    sequelize
      .query(
        `
    INSERT INTO takeoffs (description, unit, interior, total)
    VALUES ('${description}', '${unit}', true, ${total});
    `
      )
      .then((dbResult) => {
        res.status(200).send(dbResult[0]);
      })
      .catch((err) => console.log(err));
  },
};
