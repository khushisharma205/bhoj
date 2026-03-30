import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Side_bar() {

  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const filters = [
    "CATEGORY",
    "SIZE",
    "STYLE",
    "OCCASION",
    "TYPE",
    "FABRIC",
    "PATTERN",
    "PRICE",
    "AVAILABILITY"
  ];

  return (

    <div className="w-[260px] bg-white border-r border-gray-200">

      {filters.map((item) => (

        <div key={item} className="border-b border-gray-200">

          {/* HEADER */}
          <button
            onClick={() => toggle(item)}
            className="w-full flex justify-between items-center px-4 py-4 hover:bg-gray-50"
          >

            <span className="text-[12px] tracking-[2px] font-semibold text-gray-900">
              {item}
            </span>

            <FiChevronDown
              className={`text-gray-600 transition-transform duration-300
              ${open === item ? "rotate-180" : ""}`}
            />

          </button>


          {/* OPTIONS */}

          {open === item && (

            <div className="px-4 pb-4 space-y-3">

              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">

                <input
                  type="checkbox"
                  className="accent-black w-4 h-4"
                />

                Option 1

              </label>

              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">

                <input
                  type="checkbox"
                  className="accent-black w-4 h-4"
                />

                Option 2

              </label>

              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">

                <input
                  type="checkbox"
                  className="accent-black w-4 h-4"
                />

                Option 3

              </label>

            </div>

          )}

        </div>

      ))}

    </div>

  );
}