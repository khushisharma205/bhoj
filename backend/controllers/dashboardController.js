const db = require("../config/db");

const getDashboardStats = async (req, res) => {
  try {
    const [[products]] = await db.query(
      "SELECT COUNT(*) as totalProducts FROM products"
    );

    const [[orders]] = await db.query(
      "SELECT COUNT(*) as totalOrders FROM orders"
    );

    const [[users]] = await db.query(
      "SELECT COUNT(*) as totalUsers FROM users"
    );

    const [[revenue]] = await db.query(
      "SELECT SUM(total_price) as totalRevenue FROM orders"
    );

    res.json({
      totalProducts: products.totalProducts,
      totalOrders: orders.totalOrders,
      totalUsers: users.totalUsers,
      totalRevenue: revenue.totalRevenue || 0
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getDashboardStats };