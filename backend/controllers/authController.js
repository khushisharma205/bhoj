const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// exports.register = async (req, res) => {
//   const { name, email, password, role, phoneno } = req.body;

//   try {
//     console.log(req.body);

//     const hash = await bcrypt.hash(password, 10);

//     const sql =
//       "INSERT INTO users (name,email,password,role,phone) VALUES (?,?,?,?,?)";

//     const [result] = await db.execute(sql, [
//       name,
//       email,
//       hash,
//       role || "user",
//       phoneno,
//     ]);

//     return res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       userId: result.insertId,
//     });

//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// LOGIN
exports.register = async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  try {
    console.log(req.body);

    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (name,email,password,role,phone) VALUES (?,?,?,?,?)";

    const [result] = await db.execute(sql, [
      name,
      email,
      hash,
      role || "user",
      phone,
    ]);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: result.insertId,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    const [rows] = await db.execute(sql, [email]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = rows[0];

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message: "Account disabled",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        name: user.name,
      },
      "secretkey",
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const [result] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (result.length === 0) {
      return res.json({ message: "User not found" });
    }

    const user = result[0];

    if (!user.is_active) {
      return res.json({ message: "Account disabled" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, name: user.name },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      role: user.role,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }





  
};