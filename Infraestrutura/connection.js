const mysql = require("mysql2")
const conecction = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Prototype",
    password: "!FP3-2020",
    database: "stock",
})

module.exports = conecction