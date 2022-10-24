const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database.config");
const uuid = require('uuid');

const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid.v4(),
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;