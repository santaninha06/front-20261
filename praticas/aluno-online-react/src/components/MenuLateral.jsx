import '../components/MenuLateral.css';

function MenuLateral() {
  return (
    <nav className="menu-lateral">
      <h2>Aluno Online</h2>
      <ul>
        <li>Dashboard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimentos</li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}

export default MenuLateral;