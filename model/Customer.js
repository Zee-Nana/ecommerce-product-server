const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    "customers",
    {
        customer_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        F_name: {
            type: Sequelize.STRING,
        },
        L_name: {
            type: Sequelize.STRING,
        },
        Email: {
            type: Sequelize.STRING,
        },
        Phone_num: {
            type: Sequelize.INTEGER,
        },
        Password: {
            type: Sequelize.STRING,
        },
        Verification_num: {
            type: Sequelize.STRING,
        },
    },
    {
        timestamps: false
    }
)