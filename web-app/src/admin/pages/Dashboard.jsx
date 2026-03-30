import React, { useState, useEffect } from "react";

function Dashboard() {

  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0
  });

  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    old_price: "",
    stock: "",
    category_id: "",
    vendor_id: ""
  });

  useEffect(() => {
    fetch("http://localhost:5001/api/dashboard/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5001/api/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      console.log(result);

      alert("Product Added Successfully");

      setData({
        title: "",
        description: "",
        price: "",
        old_price: "",
        stock: "",
        category_id: "",
        vendor_id: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Total Products</h3>
          <p className="text-2xl font-bold">{stats.totalProducts}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Total Orders</h3>
          <p className="text-2xl font-bold">{stats.totalOrders}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">₹{stats.totalRevenue}</p>
        </div>

      </div>

      {/* Add Product Form */}

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg">

        <h2 className="text-xl font-semibold mb-6">Add New Product</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="border p-3 rounded"
          />

          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="old_price"
            value={data.old_price}
            onChange={handleChange}
            placeholder="Old Price"
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="stock"
            value={data.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="category_id"
            value={data.category_id}
            onChange={handleChange}
            placeholder="Category ID"
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="vendor_id"
            value={data.vendor_id}
            onChange={handleChange}
            placeholder="Vendor ID"
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            Add Product
          </button>

        </form>
      </div>

    </div>
  );
}

export default Dashboard;