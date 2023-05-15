const { DataTypes } = require('sequelize');
const database = require('../database');

const Customer = database.define('Customer',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    },
    {
        timestamps: false,
        modelName: 'Customer',
    }
);

module.exports = Customer; 