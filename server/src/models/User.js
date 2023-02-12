const sequelize = require("../database/database.js");
const { DataTypes } = require("sequelize");
const uuid = require("uuid").v4;
const Task = require("./Task.js");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
},{
    timestamps: false
});

User.hasMany(Task, { foreignKey: "userId", sourceKey: "id"})
Task.belongsTo(User, { foreignKey: "userId", targetKey: "id"})

module.exports = User;