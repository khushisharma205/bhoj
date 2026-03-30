import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import UserLogin from "./component/pages/UserLogin";
import UserRegister from "./component/pages/UserRegister";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />
      {UserRoutes()}
      {AdminRoutes()}
    </Routes>
  );
}

export default App;
