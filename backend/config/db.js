const mysql = require("mysql2/promise")

const db = mysql.createPool({
 host: "localhost",
 user: "root",
 password: "Admin@123",
 database: "ecommerce_db"
})

console.log("MySQL Connected !!")

module.exports = db