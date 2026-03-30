import React from "react";

export default function Bohooj() {
  const product = [
    "/img/best.jpg",
    "/img/best2.jpg",
    "/img/fead.1.jpg",
    "/img/fea3.jpg",
    "/img/Hero.png",
    "/img/hero.png",
    "/img/Hero3.png",
    "/img/new1.jpg",
    "/img/new2.jpg",
    "/img/new3.jpg",
    "/img/new4.jpg",
    "/img/new6.jpg",
  ];

  return (
    <section className="w-full py-10 bg-gray-100">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold tracking-wide mb-6">
        BOHOJAZZ LIVE
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 px-4">
        {product.map((img, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={img}
              alt="boho"
              className="w-full h-[180px] object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
