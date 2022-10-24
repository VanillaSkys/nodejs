const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database.config");
const uuid = require('uuid');

const Crud = sequelize.define("Crud", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid.v4(),
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Crud;