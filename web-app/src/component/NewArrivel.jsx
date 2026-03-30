import React from "react";

export default function NewArrivel() {
  const products = [
    {
      id: 1,
      title: "Blue Floral Dress",
      price: 999,
      oldPrice: 1999,
      image: "/img/new1.jpg",
    },
    {
      id: 2,
      title: "Pink Kurta Set",
      price: 1299,
      oldPrice: 2499,
      image: "/img/new2.jpg",
    },
    {
      id: 3,
      title: "White Summer Top",
      price: 799,
      oldPrice: 1599,
      image: "/img/new3.jpg",
    },
     {
      id: 3,
      title: "White Summer Top",
      price: 799,
      oldPrice: 1599,
      image: "/img/new3.jpg",
    },
    {

      id: 4,
      title: "White Summer Top",
      price: 799,
      oldPrice: 1599,
      image: "/img/new4.jpg",
    },
    {
      id: 5,
      title: "White Summer Top",
      price: 799,
      oldPrice: 1599,
      image: "/img/new6.jpg",
    },
  ];

  return (
    <div className="w-full py-12 text-center">
      {/* Heading */}
      <div className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-800 mb-8">
        NEW ARRIVALS
      </div>

      {/* Products */}
      <div className="flex gap-6 overflow-x-auto px-6">
        {products.map((items) => (
          <div
            key={items.id}
            className="min-w-[220px] bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={items.image}
              alt={items.title}
              className="w-full h-[260px] object-cover"
            />

            {/* Text */}
            <div className="p-3">
              <div className="text-sm font-medium mb-1">{items.title}</div>

              <div className="flex items-center gap-2">
                <span className="text-pink-600 font-semibold">
                  ₹{items.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ₹{items.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
