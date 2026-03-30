import React from "react";

export default function Box() {
  const categories = [
    {
      title: "CLASSIC",
      subtitle: "Evergreen Elegance",
      image: "/Public/img2.png",
    },
    {
      title: "CONTEMPORARY",
      subtitle: "AM to PM",
      image: "/Public/img3.png",
    },
    {
      title: "FUSION",
      subtitle: "Desi / Pardesi",
      image: "/Public/img4.webp",
    },
    {
      title: "BOHEMIAN",
      subtitle: "Artistic Flair",
      image: "/Public/img5.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 py-10">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className="relative group overflow-hidden shadow-md rounded-lg"
        >
          {/* Image */}
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-semibold tracking-wide">
              {cat.title}
            </h2>

            <p className="text-sm opacity-90 mb-4">{cat.subtitle}</p>

            <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
              VIEW PRODUCTS
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
