import { NavLink } from "react-router";
import "./MenuLateral.css";

function MenuLateral() {
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
          <NavLink to="/sair">Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MenuLateral;