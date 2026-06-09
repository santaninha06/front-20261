import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function Menu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const sair = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      

      <button onClick={sair}>
        Sair
      </button>
    </nav>
  );
}

export default Menu;