import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#d4bd84] text-black">

      {/* ===== TOP FEATURES ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 text-center py-6 border-b border-black/20">
        <div>
          <h4 className="font-semibold">FREE SHIPPING</h4>
          <p className="text-sm">On orders above Rs.1500</p>
        </div>

        <div>
          <h4 className="font-semibold">EASY RETURNS</h4>
          <p className="text-sm">On all unused items</p>
        </div>

        <div>
          <h4 className="font-semibold">SECURE PAYMENT</h4>
          <p className="text-sm">100% Secure Payments</p>
        </div>

        <div>
          <h4 className="font-semibold">SUSTAINABLE FASHION</h4>
          <p className="text-sm">Hand crafted garments</p>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-6 py-12">

        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-4">bohojazz</h2>
          <p className="text-sm leading-6">
            With the blend of richness of Indian fabric and craftsmanship,
            Western silhouettes and Bohemian flair, we created ‘everyday couture’.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">THE COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>Search</li>
            <li>Co-ord Sets</li>
            <li>Dresses</li>
            <li>Kurta Sets</li>
          </ul>
        </div>

        {/* Help + Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">HELP</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>Shipping Policy</li>
            <li>Return & Exchange Policy</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>

          <h3 className="font-semibold mb-2">NEWSLETTER SIGN UP</h3>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full px-3 py-2 mb-3 border border-black/30"
          />
          <button className="w-full bg-black text-white py-2">
            SUBMIT
          </button>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="text-center text-sm py-4 border-t border-black/20">
        © 2024 BohoJazz. All Rights Reserved
      </div>
    </footer>
  );
}
