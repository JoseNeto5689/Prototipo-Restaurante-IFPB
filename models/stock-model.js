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

    alter(res, values, id){
        const sql = "update stock set ? where id = ?"
        connection.query(sql, [values, id],(erro ,result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }

    delete(res, id){
        const sql = "delete from product where id = ?"
        connection.query(sql, id, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }

    add(res, values){
        const sql = "insert into product set ?"
        connection.query(sql, values, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(201).json(result)
            }
        })
    }

    search(res, value){
        const sql = `SELECT * FROM product WHERE product_name like "%${value}%"`
        connection.query(sql, value, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json( result)
            }
        })
    }
}

module.exports = new Stock()