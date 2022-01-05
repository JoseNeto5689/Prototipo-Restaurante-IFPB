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
    app.patch("/stock/alter/:id",(req, res) => {
        const values = req.body
        const id = parseInt(req.params.id)
        Stock.alter(res, values, id)
    })

    app.delete("/stock/delete", (req, res) => {
        let ids = req.body.id
        ids = "(" + ids.join(",") + ")"
        Stock.delete(res,ids)
    })
}