const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    "carts",
    {
        cart_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: Sequelize.INTEGER,
            foreignKeyConstraint: true,
            references: {
                model: 'customer', 
                key: 'customer_id',
             }
        },
        product_id: {
            type: Sequelize.INTEGER,
            foreignKeyConstraint: true,
            references: {
                model: 'product', 
                key: 'product_id',
             }
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)