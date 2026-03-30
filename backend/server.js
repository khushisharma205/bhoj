const express = require("express")
const cors = require("cors")
const authRoutes = require("./routes/authRoutes")
const productRoutes = require('./routes/productRoutes')
const dashboardRoutes = require("./routes/dashboardRoutes");


const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>res.json("hello backend server is started"))
// app.get ('/',(res,req) =>{
//     const sql = "SELECT * FROM users WHERE email = ?";
//     const [rows] = db.execute(sql, [product]);
//     return res.product 

// })

// app.use("/uploads", express.static("uploads"))
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes)
app.use("/api/product", productRoutes)
app.use("/api/dashboard", dashboardRoutes);


app.listen(5001, ()=>{
 console.log("Server running on port 5001")

})