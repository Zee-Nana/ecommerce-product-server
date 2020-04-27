var express = require('express')
var bodyParser = require("body-parser")
var cors = require("cors")

var products = require("./routes/product")

var port = 3050

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api", products)

app.listen(port, function() {
    console.log("Server started on port" + port)
})