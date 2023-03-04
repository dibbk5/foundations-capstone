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
        WHERE interior = true;`
      )
      .then((dbResult) => {
        res.status(200).send(dbResult[0]);
      })
      .catch((err) => console.log(err));
  },
  updateTakeoff: (req, res) => {
    let { id, total } = req.body;

    sequelize.query(`
    UPDATE takeoffs
    SET total = ${total}
    WHERE id = ${id};`);
  },
};
