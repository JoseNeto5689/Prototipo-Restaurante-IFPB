const Stock = require("../models/stock-model")
module.exports = app => {
    app.get("/", (req, res) => {
        Stock.list(res)
    })
}