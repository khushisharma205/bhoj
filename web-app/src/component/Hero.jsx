import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewArrivel from "./NewArrivel";
import Box from "./Box";
import Fea_pro from "./Fea_pro";
import TrendingNow from "./TrendingNow";
import Bohooj from "./Bohooj";
import LatestBlogs from "./LatestBlogs";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ================= MOVING SLIDER COMPONENT =================
// 👉 Sirf images array me apni images add karo — slider automatic move karega

export default function Hero() {
  const images = ["./img/Hero1.png", "./img/hero2.png", "./img/Hero3.png"];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds (one by one)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <Navbar />

      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <Box />
      <NewArrivel />
      <Fea_pro />
      <TrendingNow />
      <Bohooj />
      <LatestBlogs />
      <Footer />
    </>
  );
}

// ================= USE IN APP.JSX =================
// import MovingImageSlider from "./MovingImageSlider";
//
// function App() {
//   return <MovingImageSlider />;
// }
//
// export default App;
