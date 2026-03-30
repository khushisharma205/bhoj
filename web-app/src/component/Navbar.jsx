import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {

  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  const [openSearch, setOpenSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  let user = null;

  if (token) {
    try {
      user = jwtDecode(token);
    } catch (err) {
      console.log("Invalid token");
    }
  }

  
  const handleSearch = async (value) => {
  setSearch(value);

  if (value.length > 1) {
    try {
      const res = await fetch(`http://localhost:5001/api/product/all`);
      const data = await res.json();

      // FIX: null safe filter
      const filtered = data.filter((p) =>
        (p.title || "").toLowerCase().includes(value.toLowerCase())
      );

      setProducts(filtered);
    } catch (err) {
      console.log("Search error:", err);
    }
  } else {
    setProducts([]);
  }
};

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className="w-full">

      {/* Offer Bar */}
      <div className="bg-[#d6bd86] text-center text-xs py-1.5 font-medium">
        Signup And Get 10% OFF On Your First Order
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-3 bg-white border-b">

        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/img/navbar.png"
            alt="logo"
            className="w-40 h-auto object-contain"
          />
        </div>

        {/* MENU */}
        {!openSearch && (
          <nav className="hidden md:flex gap-10 text-[13px] tracking-wide font-medium text-gray-700">
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/CoOrdSets">CO-ORD SETS</NavLink>
            <NavLink to="/DRESSES">DRESSES</NavLink>
            <NavLink to="/KURTA_SETS">KURTA SETS</NavLink>
            <NavLink to="/ALL_DESIGNS">ALL DESIGNS</NavLink>
            <NavLink to="/BESTSELLERS">BESTSELLERS</NavLink>
            <NavLink to="/SIGNATURE">SIGNATURE</NavLink>
          </nav>
        )}

        {/* SEARCH BAR */}
        {openSearch && (
          <div className="relative flex items-center w-full max-w-xl mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search something..."
              className="flex-1 border-b border-gray-400 outline-none text-lg py-2"
              autoFocus
            />
            <Search className="w-5 h-5 ml-4 cursor-pointer" />
            <button
              onClick={() => {
                setOpenSearch(false);
                setSearch("");
                setProducts([]);
              }}
              className="ml-4 text-xl"
            >
              ✕
            </button>

            {/* Dropdown Results */}
            {products.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border shadow-lg rounded mt-1 z-50 max-h-72 overflow-y-auto">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-between items-center"
                    onClick={() => {
                      navigate(`/product/${p.id}`);
                      setOpenSearch(false);
                      setSearch("");
                      setProducts([]);
                    }}
                  >
                    <span>{p.title}</span>
                    <span className="text-gray-500">₹{p.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Icons */}
        {!openSearch && (
          <div className="flex items-center gap-5">

            <Search
              className="w-5 h-5 cursor-pointer"
              onClick={() => setOpenSearch(true)}
            />

            {user ? (
              <div className="relative">
                <div
                  className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer text-sm"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {user.name?.charAt(0)}
                </div>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-28 bg-white border shadow-md rounded">
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <User
                className="w-5 h-5 cursor-pointer"
                onClick={() => navigate("/login")}
              />
            )}

            {/* Wishlist */}
            <div className="relative">
              <Heart className="w-5 h-5 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>

            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}