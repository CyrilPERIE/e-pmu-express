import { dbConfig } from "../config/dbConfig.js";
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(process.env.DB, process.env.DBUSER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    port: dbConfig.port,
});
sequelize.authenticate()
    .then(() => {
    console.log("Connected.");
})
    .catch((err) => {
    console.log("Unable to connect to the database: ", err);
});
