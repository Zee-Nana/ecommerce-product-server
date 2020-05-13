var express = require("express")
var router = express.Router()
const Cart = require("../model/Cart")


// Add product
router.post("/carts", (req, res) => {
    if(!req.body.customer_id,
        !req.body.product_id,
        !req.body.quantity
        ){
        res.status(400)
        res.json({
            error: "Bad data"
        })
    }else{
        Cart.create(req.body)
        .then(() => {
            res.send("Cart Added")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

// get a product
router.get("/cart/:cart_id", (req, res) => {
    Cart.findOne()
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// get all products
router.get("/carts", (req, res) => {
    Cart.findAll()
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// delete product
router.delete("/cart/:cart_id", (req, res) => {
    Cart.destroy({
        where: {
            cart_id: req.params.cart_id
        }
    })
    .then(() => {
        res.send("Cart Deleted!")
    })
    .catch(err => {
        res.send("error: ", + err)
    })
})

// update product
router.put("/cart/:cart_id", (req, res) => {
    if(!req.body.customer_id,
        !req.body.product_id,
        !req.body.quantity
        ) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else {
        Cart.update(
            {customer_id: req.body.customer_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity},
            {where: { cart_id: req.params.cart_id} }
        )
        .then(() => {
            res.send("Cart Updated!")
        })
        .error(err => res.send(err))
    }
})

module.exports = router