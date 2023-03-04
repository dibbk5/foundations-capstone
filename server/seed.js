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
  seed: (req, res) => {
    sequelize
      .query(
        `
        DROP TABLE IF EXISTS takeoffs;

        CREATE TABLE takeoffs (
            id SERIAL PRIMARY KEY,
            description VARCHAR(245),
            unit VARCHAR(245),
            interior BOOLEAN,
            total INTEGER
        );

        INSERT INTO takeoffs (description, unit, interior, total)
        VALUES ('Cabinets', 'LF', true, 0),
            ('Countertops', 'SF', true, 0),
            ('Blinds', 'SF', true, 0),
            ('Refrigerators', 'Count', true, 0),
            ('Trees', 'Count', false, 0), 
            ('Bushes', 'Count', false, 0), 
            ('Concrete', 'SF', false, 0),
            ('Grass', 'SF', false, 0);
        `
      )
      .then(() => {
        console.log("Database seeded");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding database", err));
  },
};
