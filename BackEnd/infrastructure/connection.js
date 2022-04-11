const mysql = require("mysql2") //Importação do BD
const conecction = mysql.createConnection({ //Parametros do banco de dados
    host: "database",
    port: 3306,
    user: "root",
    password: "123456",
    database: "storage",
})

module.exports = conecction