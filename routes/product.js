var express = require("express")
var router = express.Router()
const Product = require("../model/Product")


// Add product
router.post("/products", (req, res) => {
    if(!req.body.product_name,
        !req.body.product_title,
        !req.body.description,
        !req.body.price
        ){
        res.status(400)
        res.json({
            error: "Bad data"
        })
    }else{
        Product.create(req.body)
        .then(() => {
            res.send("Product Added")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

// get a product
router.get("/product/:product_id", (req, res) => {
    Product.findOne()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// get all products
router.get("/products", (req, res) => {
    Product.findAll()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send("error: " +err)
    })
})

// delete product
router.delete("/product/:product_id", (req, res) => {
    Product.destroy({
        where: {
            product_id: req.params.product_id
        }
    })
    .then(() => {
        res.send("Product Deleted!")
    })
    .catch(err => {
        res.send("error: ", + err)
    })
})

// update product
router.put("/product/:product_id", (req, res) => {
    if(!req.body.product_name,
        !req.body.product_title,
        !req.body.description,
        !req.body.price
        ) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else {
        Product.update(
            {product_name: req.body.product_name,
            product_type: req.body.product_type,
            description: req.body.description,
            price: req.body.price},
            {where: { product_id: req.params.product_id} }
        )
        .then(() => {
            res.send("Product Updated!")
        })
        .error(err => res.send(err))
    }
})

module.exports = router