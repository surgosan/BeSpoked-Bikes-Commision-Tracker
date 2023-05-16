const { DataTypes } = require('sequelize');
const database = require('../dbInstance');

const Product = database.define('Product',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        manufacturer: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        style: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        purchase_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        sale_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        quantity_on_hand: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commission_percentage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        modelName: 'Product',
    }
);

module.exports = Product; 