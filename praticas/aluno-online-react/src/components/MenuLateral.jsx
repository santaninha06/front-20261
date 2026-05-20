import { NavLink, useNavigate } from "react-router";

import "./MenuLateral.css";

import { useAuth } from "../contexts/AuthContext";

function MenuLateral() {

  const { logout } = useAuth();

  const navigate = useNavigate();

  function sair() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="menu-lateral">

      <h2>Aluno Online</h2>

      <ul>

        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="notas">Notas</NavLink>
        </li>

        <li>
          <NavLink to="faltas">Faltas</NavLink>
        </li>

        <li>
          <NavLink to="boletos">Boletos</NavLink>
        </li>

        <li>
          <NavLink to="requerimentos">
            Requerimentos
          </NavLink>
        </li>

        <li>
          <button onClick={sair}>
            Sair
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default MenuLateral;