import React, { useState } from "react";

const products = [
  {
    id: 3,
    img: "/img/first_touch2.jpg",
    title: "PINK FESTIVE WEAR KURTA SET",
    oldPrice: 15999,
    price: 12999,
    discount: "-18%",
  },
  {
    id: 9,
    img: "/img/new4.jpg",
    title: "SUMMER COTTON KURTI",
    oldPrice: 5999,
    price: 4799,
    discount: "-20%",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
    title: "MODERN ELEGANT ETHNIC SET",
    oldPrice: 13999,
    price: 11199,
    discount: "-20%",
  },
  {
    id: 4,
    img: "/img/first_touch3.jpg",
    title: "GREY DESIGNER ETHNIC KURTI",
    oldPrice: 9999,
    price: 7999,
    discount: "-20%",
  },
  {
    id: 5,
    img: "/img/first_touch4.jpg",
    title: "DAILY WEAR COMFORT KURTI",
    oldPrice: 6999,
    price: 5599,
    discount: "-20%",
  },
  {
    id: 6,
    img: "/img/new1.jpg",
    title: "DESIGNER EMBROIDERED KURTA SET",
    oldPrice: 20999,
    price: 16799,
    discount: "-20%",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    title: "NAZM EMBROIDERED CUFF-SLEEVES KURTA SET",
    oldPrice: 18999,
    price: 15199,
    discount: "-20%",
  },
  {
    id: 2,
    img: "/img/first_touch.jpg",
    title: "SUNEHRI EMBROIDERED KURTA SET",
    oldPrice: 17999,
    price: 14399,
    discount: "-20%",
  },
  {
    id: 7,
    img: "/img/new2.jpg",
    title: "PARTY WEAR LUXURY KURTA SET",
    oldPrice: 24999,
    price: 19999,
    discount: "-20%",
  },
  {
    id: 11,
    img: "/img/new6.jpg",
    title: "FESTIVE SPECIAL KURTA SET",
    oldPrice: 18999,
    price: 15199,
    discount: "-20%",
  },
  {
    id: 8,
    img: "/img/new3.jpg",
    title: "TRADITIONAL DUPATTA SET",
    oldPrice: 14999,
    price: 11999,
    discount: "-20%",
  },
];

export default function Kurta_set() {

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="p-6 min-h-screen bg-gray-100">

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-4 gap-6">

        {products.map((item) => (
          <div key={item.id} className="bg-white p-3 shadow">

            <span className="absolute bg-black text-white text-xs px-2 py-1">
              SALE
            </span>

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover"
            />

            <h4 className="mt-2 text-sm font-semibold uppercase">
              {item.title}
            </h4>

            <div className="text-sm mt-1">
              <span className="line-through text-gray-400">
                ₹ {item.oldPrice.toLocaleString()}
              </span>{" "}
              <span className="font-bold">
                ₹ {item.price.toLocaleString()}
              </span>{" "}
              <span className="text-red-600">
                ({item.discount})
              </span>
            </div>

            <button
              className="w-full bg-black text-white mt-2 py-2"
              onClick={() => {
                setSelectedProduct(item);
                setShowModal(true);
              }}
            >
              ADD
            </button>

          </div>
        ))}

      </div>

      {/* POPUP */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          <div className="bg-white w-96 p-6">

            <button
              onClick={() => {
                setShowModal(false);
                setSelectedSize("");
              }}
              className="float-right"
            >
              X
            </button>

            <img
              src={selectedProduct?.img}
              alt=""
              className="w-full h-60 object-cover"
            />

            <h4 className="mt-2">
              {selectedProduct?.title}
            </h4>

            <p className="font-bold">
              ₹ {selectedProduct?.price.toLocaleString()}
            </p>

            <div className="mt-3">
              {["XS","S","M","L","XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-1 m-1 ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              disabled={!selectedSize}
              className="w-full bg-black text-white mt-3 py-2"
            >
              {selectedSize ? "ADD TO CART" : "Select Size First"}
            </button>

          </div>

        </div>
      )}

    </div>
  );
}