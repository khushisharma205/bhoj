import React, { useState } from "react";

export default function Fea_pro() {
  const images = [
    "/img/fea.1.jpg",
    "/img/fea2.jpg",
    "/img/fea3.jpg",
    "/img/fea4.jpg",
  ];

  //   const [mainImg, setMainImg] = useState(images[0]);
  const mainImg='./img/fea.1.jpg';

  return (
    <section className="w-full py-12 bg-gray-100">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold tracking-wide mb-10">
        FEATURED PRODUCT
      </h2>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* LEFT SIDE - Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setMainImg(img)}
                className="w-20 h-24 object-cover cursor-pointer border"
              />
            ))}
          </div>

          {/* Main Image */}
          <img
            src={mainImg}
            alt="product"
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* RIGHT SIDE - Product Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            NAZM EMBROIDERED KIMONO SLEEVES KURTA WITH BANARASI PANTS AND
            DUPATTA - RED
          </h3>

          {/* Price */}
          <p className="text-lg font-semibold mb-2">
            ₹15,199{" "}
            <span className="text-red-600 text-sm font-normal">(-20%)</span>
          </p>

          <p className="text-sm text-gray-500 mb-6">Inclusive of all taxes</p>

          {/* Sizes */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-2">SIZE:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                <button
                  key={size}
                  className="border px-3 py-1 text-sm hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex gap-4 mb-4">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-20 border px-2 py-2"
            />

            <button className="bg-black text-white px-8 py-2">
              ADD TO CART
            </button>
          </div>

          {/* Buy Now */}
          <button className="w-full border py-3">BUY IT NOW</button>
        </div>
      </div>
    </section>
  );
}
