import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Menu.css';

function Menu() {

    const usuarioId = 0;

    const { usuario, logout } = useAuth();

    const navigate = useNavigate();

    const handleSair = (e) => {

        e.preventDefault();

        logout();

        navigate("/login");
    };

    return (
        <nav>

            <h1>{usuario.nome}</h1>

            <ul>

                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to={`/perfil/${usuarioId}`}>
                        Perfil
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/settings">
                        Configurações
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about">
                        Sobre
                    </NavLink>
                </li>

                <li>
                    <Link to="/login" onClick={handleSair}>
                        Sair
                    </Link>
                </li>

            </ul>

        </nav>
    );
}

export default Menu;