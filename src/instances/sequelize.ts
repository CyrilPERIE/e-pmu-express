import { dbConfig } from "../config/dbConfig.js";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB || "expressapp",
  process.env.DBUSER || "root",
  process.env.PASSWORD || "root",
  {
    host: process.env.HOST || "localhost",
    dialect: "mysql",
    port: dbConfig.port || 3306,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log("Connected.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });
