import React from "react";

export default function TrendingNow() {
  const products = [
    {
      title: "NAZM EMBROIDERED CUFF-SLEEVES KURTA SET – RUST ORANGE",
      price: "₹ 15,199",
      oldPrice: "₹ 18,999",
      image: "/img/best.jpg",
    },
    {
      title: "SUNEHRI EMBROIDERED KURTA PANTS WITH DUPATTA – IVORY",
      price: "₹ 14,399",
      oldPrice: "₹ 17,999",
      image: "/img/best2.jpg",
    },
    {
      title: "RED OMBRE EMBROIDERED KAFTAN WITH PANTS",
      price: "₹ 8,799",
      oldPrice: "₹ 10,999",
      image: "/img/Hero3.png",
    },
    {
      title: "PINK OMBRE EMBROIDERED KAFTAN WITH PANTS",
      price: "₹ 7,999",
      oldPrice: "₹ 9,999",
      image: "/img/new3.jpg",
    },
    {
      title: "LEHRIYA HIGH-SLIT FLARED KURTA WITH PANTS – RED",
      price: "₹ 6,399",
      oldPrice: "₹ 7,999",
      image: "/img/new2.jpg",
    },
  ];

  return (
    <section className="w-full py-14 bg-gray-100">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold tracking-wide">
        TRENDING NOW
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 text-sm mt-3 mb-10">
        <span className="text-yellow-600 font-medium">FESTIVE WEAR</span>
        <span>/</span>
        <span>CASUAL WEAR</span>
        <span>/</span>
        <span>OFFICE WEAR</span>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {products.map((item, i) => (
          <div key={i} className="group">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[360px] object-cover"
              />

              {/* SALE badge */}
              <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">
                SALE
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-medium mt-3 leading-tight">
              {item.title}
            </h3>

            {/* Price */}
            <p className="text-sm mt-1">
              <span className="line-through text-gray-400 mr-2">
                {item.oldPrice}
              </span>
              <span className="font-semibold">{item.price}</span>
              <span className="text-red-600 ml-1">(-20%)</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
