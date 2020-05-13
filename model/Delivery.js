const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    "deliveries",
    {
        delivery_id:{
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
        Address: {
            type: Sequelize.STRING,
        },
        Post_code: {
            type: Sequelize.INTEGER,
        },
        Phone_num: {
            type: Sequelize.INTEGER,
        },
        Email: {
            type: Sequelize.STRING,
        },
    },
    {
        timestamps: false
    }
)