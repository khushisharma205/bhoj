import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Side_bar from "../../com/Side_bar";
import { SlidersHorizontal, X } from "lucide-react";

export default function Userlayout() {
  // Mobile pe sidebar toggle state — desktop pe hamesha visible rehta hai
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="bg-[#f6f6f6] min-h-screen">
        <div className="max-w-[1500px] mx-auto pt-6 md:pt-12 px-4 md:px-6">

          {/* ── Mobile only: "FILTERS" toggle button ── */}
          {/* Desktop pe ye button hide hai — sidebar wahan hamesha show hota hai */}
          <div className="flex items-center mb-4 md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 border border-gray-400 px-4 py-2 text-xs font-semibold tracking-widest rounded"
            >
              <SlidersHorizontal className="w-4 h-4" />
              FILTERS
            </button>
          </div>

          {/* ── Desktop + Mobile layout row ── */}
          <div className="flex gap-6">

            {/* ── Desktop Sidebar — hidden on mobile, always visible on md+ ── */}
            <div className="hidden md:block w-[260px] flex-shrink-0">
              <Side_bar />
            </div>

            {/* ── Main content (products grid etc.) ── */}
            {/* min-w-0 prevents flex child overflow on small screens */}
            <div className="flex-1 min-w-0">
              <Outlet />
            </div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE SIDEBAR DRAWER
          - Only rendered/visible on mobile (md:hidden)
          - Slides in from left, same style as Navbar menu
      ════════════════════════════════════════ */}

      {/* Semi-transparent backdrop — tap to close */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white z-50 md:hidden
          flex flex-col transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <span className="text-sm font-bold tracking-widest text-gray-900">FILTERS</span>
          <button
            aria-label="Close filters"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable sidebar content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <Side_bar />
        </div>

        {/* Fixed Apply button at bottom */}
        <div className="px-5 py-4 border-t border-gray-200">
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-full py-3 bg-black text-white text-xs font-semibold tracking-widest rounded"
          >
            APPLY FILTERS
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}