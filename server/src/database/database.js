const { Sequelize } = require("sequelize");
require("dotenv").config();
// const sequelize = new Sequelize(process.env.DATABASE_URL);
const sequelize = new Sequelize("todo_db", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
})


module.exports = sequelize;