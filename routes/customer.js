var express = require("express")
var customerValidation = require("../validation/customerValidation")
var router = express.Router()
const Customer = require("../model/Customer")


// Add product
router.post("/customers", (req, res) => {
    if(!req.body.F_name,
        !req.body.L_name,
        !req.body.Email,
        !req.body.Phone_num,
        !req.body.Password,
        !req.body.Verification_num
        ){
        res.status(400)
        res.json({
            error: "Bad data"
        })
    }else{
        Customer.create(req.body)
        .then(() => {
            res.send("Customer Added")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

// get a product
router.get("/customer/:customer_id", (req, res) => {
    Customer.findOne()
    .then(customers => {
        res.json(customers)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// get all products
router.get("/customers", (req, res) => {
    Customer.findAll()
    .then(customers => {
        res.json(customers)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// delete product
router.delete("/customer/:customer_id", (req, res) => {
    Customer.destroy({
        where: {
            customer_id: req.params.customer_id
        }
    })
    .then(() => {
        res.send("Customer Deleted!")
    })
    .catch(err => {
        res.send("error: ", + err)
    })
})

// update product
router.put("/order/:prder_id", (req, res) => {
    if(!req.body.F_name,
        !req.body.L_name,
        !req.body.Email,
        !req.body.Phone_num,
        !req.body.Password,
        !req.body.Verification_num
        ) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else {
        Order.update(
            {F_name: req.body.F_name,
            L_name: req.body.L_name,
            Email: req.body.Email,
            Phone_num: req.body.Phone_num,
            Password: req.body.Password,
            Verification_num: req.body.Verification_num
        },
            {where: { customer_id: req.params.customer_id} }
        )
        .then(() => {
            res.send("Customer Updated!")
        })
        .error(err => res.send(err))
    }
})

module.exports = router