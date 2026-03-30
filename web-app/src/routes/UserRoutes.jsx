import { Route } from "react-router-dom";

import Hero from "../component/Hero";
import Userlayout from "../component/layout/Userlayout";
import Partone from "../component/Partone";
import CoOrdSets from "../component/CoOrdSets";
import Dresses from "../component/Dresses";
import Kurta_set from "../component/Kutra_set";
import All_Design from "../component/All_Design";
import BestSeller from "../component/BestSeller";
import Best_seller from "../component/Best_seller";
import Signature from "../com/Signature";
import ProductDetail from "../component/Desciption_sec";
import ClothesDetails from "../component/pages/ClothesDetails";
import UserRegister from "../component/pages/UserRegister";
import Cart from "../component/pages/Addtocart";
import Navbar from "../component/Navbar";

// ── CartPage: Navbar + Cart content, full responsive wrapper ──
// min-h-screen ensures page fills full height on mobile too
const CartPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-1 px-4 md:px-8 lg:px-16 py-6">
      <Cart />
    </div>
  </div>
);

const UserRoutes = () => (
  <>
    {/* Home — Hero handles its own layout/navbar */}
    <Route path="/" element={<Hero />} />

    {/* All main pages go through Userlayout (which includes Navbar + Outlet) */}
    <Route element={<Userlayout />}>

      {/* Shop & category pages */}
      <Route path="/shop"        element={<Partone />} />
      <Route path="/CoOrdSets"   element={<CoOrdSets />} />
      <Route path="/Dresses"     element={<Dresses />} />
      <Route path="/KURTA_SETS"  element={<Kurta_set />} />
      <Route path="/ALL_DESIGNS" element={<All_Design />} />
      <Route path="/BESTSELLERS" element={<Best_seller />} />
      <Route path="/SIGNATURE"   element={<Signature />} />

      {/* Product detail pages */}
      <Route path="/Desciption_sec/:id" element={<ProductDetail />} />
      <Route path="/product/:id"        element={<ClothesDetails />} />

      {/* Auth */}
      <Route path="/login"    element={<UserRegister />} />
      <Route path="/register" element={<UserRegister />} />

    </Route>

    {/* Cart — uses its own layout with Navbar on top */}
    <Route path="/cart" element={<CartPage />} />

  </>
);

export default UserRoutes;