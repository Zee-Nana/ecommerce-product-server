var express = require("express")
var deliveryValidation = require("../validation/deliveryValidation")
var router = express.Router()
const Delivery = require("../model/Delivery")


// Add product
router.post("/deliveries", (req, res) => {
    if(!req.body.F_name,
        !req.body.L_name,
        !req.body.Address,
        !req.body.Post_code,
        !req.body.Phone_num,
        !req.body.Email
        ){
        res.status(400)
        res.json({
            error: "Bad data"
        })
    }else{
        Delivery.create(req.body)
        .then(() => {
            res.send("Delivery Added")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

// get a product
router.get("/delivery/:delivery_id", (req, res) => {
    Delivery.findOne()
    .then(deliveries => {
        res.json(deliveries)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// get all products
router.get("/deliveries", (req, res) => {
    Delivery.findAll()
    .then(deliveries => {
        res.json(deliveries)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// delete product
router.delete("/delivery/:delivery_id", (req, res) => {
    Delivery.destroy({
        where: {
            delivery_id: req.params.delivery_id
        }
    })
    .then(() => {
        res.send("Delivery Deleted!")
    })
    .catch(err => {
        res.send("error: ", + err)
    })
})

// update product
router.put("/order/:prder_id", (req, res) => {
    if(!req.body.F_name,
        !req.body.L_name,
        !req.body.Address,
        !req.body.Post_code,
        !req.body.Phone_num,
        !req.body.Email
        ) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else {
        Order.update(
            {F_name: req.body.F_name,
            L_name: req.body.L_name,
            Address: req.body.Address,
            Post_code: req.body.Post_code,
            Phone_num: req.body.Phone_num,
            Email: req.body.Email
        },
            {where: { delivery_id: req.params.delivery_id} }
        )
        .then(() => {
            res.send("Delivery Updated!")
        })
        .error(err => res.send(err))
    }
})

module.exports = router