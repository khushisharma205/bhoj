import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Partone() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [view, setView] = useState(4);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState("featured");

  // FETCH PRODUCTS FROM DATABASE
  useEffect(() => {
    fetch("http://localhost:5001/api/product/all/partone")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(products)

  // SORTING
  let sortedProducts = [...products];

  if (sortBy === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const visibleProducts = sortedProducts.slice(0, itemsPerPage);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* TOP BAR */}



      {/* PRODUCTS */}

      {view === 1 ? (
        <div className="space-y-12">
          {visibleProducts.map((item) => (
            <div key={item.id} className="flex gap-10 bg-white p-6">
              <img
                src={item.image_url}
                alt=""
                className="w-fit max-w-xl max-h-[300px] h-fit object-cover"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3">{item.title}</h2>

                <p className="text-gray-500 mb-4">{item.description}</p>

                <div className="mb-4">
                  <span className="line-through text-gray-400 mr-2">
                    ₹{item.old_price}
                  </span>

                  <span className="font-bold">₹{item.price}</span>
                </div>

                <button
                  className="bg-[#cbb26a] text-white px-10 py-3"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  QUICK ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: `repeat(${view},1fr)` }}
        >
          {visibleProducts.map((item) => (
            <div key={item.id} className="bg-white group relative">
              <div className="relative overflow-hidden">
                <img
                  src={`${item.image_url}`}
                  alt=""
                  className="w-full h-fit object-cover"
                />

                <button
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-3 text-sm opacity-0 group-hover:opacity-100 transition duration-300"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  QUICK ADD
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold">{item.title}</h3>

                <div className="mt-2 text-sm">
                  <span className="line-through text-gray-400 mr-2">
                    ₹{item.old_price}
                  </span>

                  <span className="font-bold">₹{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
