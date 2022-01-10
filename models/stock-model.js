const connection = require("../Infraestrutura/connection")
class Stock{
    list(res){
        const sql = "SELECT product.id, product.product_name, product.product_description,product.amount, food_kinds.food_kind, product.expiration_date FROM product join food_kinds ON product.food_kind = food_kinds.id"
        connection.query(sql, (erro ,result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }

    alter(res, values, id){
        const sql = "update product set ? where id = ?"
        connection.query(sql, [values, id],(erro ,result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }

    delete(res, id){
        const sql = `delete from product where id IN ${id}`
        connection.query(sql, id, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({result})
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
        const sql = `SELECT product.id, product.product_name, product.product_description,product.amount, food_kinds.food_kind, product.expiration_date FROM product join food_kinds ON product.food_kind = food_kinds.id WHERE product_name like "%${value}%" OR product_description like "%${value}%"`
        connection.query(sql, value, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }
}

module.exports = new Stock()