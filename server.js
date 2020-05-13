var express = require('express')
var bodyParser = require("body-parser")
var cors = require("cors")

var products = require("./routes/product")

var carts = require("./routes/cart")

var orders = require("./routes/order")

var deliveries = require("./routes/delivery")

var customers = require("./routes/customer")

var port = 3050

var app = express()
app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api", products)

app.use("/api", carts)

app.use("/api", orders)

app.use("/api", deliveries)

app.use("/api", customers)

app.listen(port, function() {
    console.log("Server started on port" + port)
})