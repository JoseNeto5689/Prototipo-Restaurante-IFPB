const mysql = require("mysql2")
const conecction = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "stock",
})

module.exports = conecction