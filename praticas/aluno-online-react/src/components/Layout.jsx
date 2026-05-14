import { Outlet } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import Header from "./Header";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <MenuLateral />
      </aside>

      <main className="main">
        <Header />

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;