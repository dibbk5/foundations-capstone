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
    console.log(req.body);
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
    console.log(req.body);
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
    console.log(req.body);
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
};
