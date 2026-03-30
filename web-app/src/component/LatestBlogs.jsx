import React from "react";

export default function LatestBlogs() {
  const blogs = [
    {
      title: "THE WINTER DROP",
      desc: "BohoJazz introduces its Winter Drop, a smart edit of cold-weather staples guided by the brand's CLASSIC philosophy.",
      image: "/img/new1.jpg",
    },
    {
      title: "THE POWER OF BLACK: ELEVATING EVERYDAY COUTURE THIS BLACK FRIDAY",
      desc: "At BohoJazz, we believe that true style is an investment, not an impulse. Our philosophy is built on timeless elegance.",
      image: "/img/new2.jpg",
    },
    {
      title: "NAVRATRI, GARBA & DRESSING FOR THE NINE NIGHTS",
      desc: "Garba nights, dandiya beats, and fashion built for the twirl. Discover festive styling inspiration.",
      image: "/img/new3.jpg",
    },
  ];

  return (
    <section className="w-full py-14 bg-gray-100">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold tracking-wide mb-10">
        LATEST BLOGS
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {blogs.map((blog, i) => (
          <div key={i} className="bg-white shadow-sm">
            
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[220px] object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3">{blog.title}</h3>

              <p className="text-sm text-gray-600 mb-4">{blog.desc}</p>

              <button className="text-sm font-medium flex items-center gap-2">
                VIEW DETAILS →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
