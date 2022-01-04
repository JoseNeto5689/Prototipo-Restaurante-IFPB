const connection = require("../Infraestrutura/connection")
class Stock{
    list(res){
        const sql = "select * from product"
        connection.query(sql, (erro ,result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }
}

module.exports = new Stock()