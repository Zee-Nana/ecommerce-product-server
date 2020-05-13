const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    "orders",
    {
        order_id:{
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
        delivery_id: {
            type: Sequelize.INTEGER,
            foreignKeyConstraint: true,
            references: {
                model: 'deliveries', 
                key: 'delivery_id',
             }
        },
        payment_type: {
            type: Sequelize.ENUM,
            values: ['PAY WITH CARD', 'PAY ON DELIVERY']
        },
        Date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        Total: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false,
            field: 'Total'
        }
    },
    {
        timestamps: false
    }
)