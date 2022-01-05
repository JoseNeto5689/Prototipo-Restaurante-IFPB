const Stock = require("../models/stock-model")
module.exports = app => {
    app.get("/stock", (req, res) => {
        Stock.list(res)
    })

    app.get("/stock/:value", (req, res) => {
        const value = (req.params.value)
        Stock.search(res, value)
    })

    app.post("/stock/add", (req, res) => {
        const values = req.body
        Stock.add(res, values)
    })
}