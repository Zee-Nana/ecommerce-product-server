var express = require("express")
var router = express.Router()
const Order = require("../model/Order")


// Add product
router.post("/orders", (req, res) => {
    if(!req.body.customer_id,
        !req.body.delivery_id,
        !req.body.payment_type,
        !req.body.Date,
        !req.body.Total
        ){
        res.status(400)
        res.json({
            error: "Bad data"
        })
    }else{
        Order.create(req.body)
        .then(() => {
            res.send("Order Added")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

// get a product
router.get("/order/:order_id", (req, res) => {
    Order.findOne()
    .then(orders => {
        res.json(orders)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// get all products
router.get("/orders", (req, res) => {
    Order.findAll()
    .then(orders => {
        res.json(orders)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// delete product
router.delete("/order/:order_id", (req, res) => {
    Order.destroy({
        where: {
            order_id: req.params.order_id
        }
    })
    .then(() => {
        res.send("Order Deleted!")
    })
    .catch(err => {
        res.send("error: ", + err)
    })
})

// update product
router.put("/order/:prder_id", (req, res) => {
    if(!req.body.customer_id,
        !req.body.delivery_id,
        !req.body.payment_type,
        !req.body.Date,
        !req.body.Total
        ) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else {
        Order.update(
            {customer_id: req.body.customer_id,
            delivery_id: req.body.delivery_id,
            payment_type: req.body.payment_type,
            Date: req.body.Date,
            Total: req.body.Total,
        },
            {where: { order_id: req.params.order_id} }
        )
        .then(() => {
            res.send("Order Updated!")
        })
        .error(err => res.send(err))
    }
})

module.exports = router