const db = require("../config/db");

const allProducts = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.*, 
        pi.image_url
      FROM products p
      LEFT JOIN product_images pi 
      ON p.id = pi.product_id
    `);

    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

 const searchProducts = async (req, res) => {
  try {
    const search = req.query.search

    const [products] = await db.query(
      "SELECT * FROM products WHERE title LIKE ?",
      [`%${search}%`]
    )

    res.json(products)

  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Server error"})
  }
}

const allProductsByType = async (req, res) => {
  try {
    const { type } = req.params;

    const [rows] = await db.query(
      `
      SELECT 
        p.*, 
        pi.image_url
      FROM products p
      LEFT JOIN product_images pi
      ON p.id = pi.product_id
      WHERE p.type = ?
    `,
      [type],
    );

    res.json({
      message: "Data fetch",
      data: rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      old_price,
      stock,
      category_id,
      vendor_id,
    } = req.body;

    console.log(req.body);

    const [result] = await db.query(
      `INSERT INTO products 
      (title, description, price, old_price, stock, category_id, vendor_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, description, price, old_price, stock, category_id, vendor_id],
    );

    res.json({
      message: "Product added successfully",
      productId: result.insertId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const productGetById = async (req, res) => {
  const {id} = req.params

  try {
    const [rows] = await db.query(
      `
      SELECT 
        p.*, 
        pi.image_url
      FROM products p
      LEFT JOIN product_images pi
      ON p.id = pi.product_id
      WHERE p.id = ?
    `,
      [id],
    );
    res.json({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  allProducts,
  addProduct,
  allProductsByType,
  productGetById,
};
