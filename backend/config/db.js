const mysql = require("mysql2/promise")

const db = mysql.createPool({
 host: "localhost",
 user: "root",
 password: "1234",
 database: "ecommerce_db"
})

console.log("MySQL Connected")

module.exports = db