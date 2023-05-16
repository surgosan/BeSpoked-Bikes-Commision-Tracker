const { DataTypes } = require('sequelize');
const database = require('../dbInstance');

const Discount = database.define('Discount',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        begin_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        discount_percentage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        timestamps: false,
        modelName: 'Discount',
    }
); 

module.exports = Discount;