const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgresql://postgres:tv7Jdf9hc3oxEKn8yMVR@containers-us-west-147.railway.app:7166/railway");

module.exports = sequelize;