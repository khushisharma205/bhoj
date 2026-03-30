import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2>Admin</h2>

      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/categories">Categories</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/orders">Orders</Link>
      <Link to="/admin/users">Users</Link>
    </div>
  );
}

export default Sidebar;

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "20px",
  },
};