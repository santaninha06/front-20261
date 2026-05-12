import Header from "./Header";
import MenuLateral from "../MenuLateral";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <MenuLateral />

      <div className="main">
        <Header />

        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;