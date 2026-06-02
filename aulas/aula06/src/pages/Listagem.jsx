import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { listar } from "../services/produtoServices";

function Listagem() {
    const [dados, setDados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const carregar = async () => {
            const resposta = await listar();
            setDados(resposta);
        };

        carregar();
    }, []);

    return (
        <>
            <h1>Listagem de Produtos</h1>

            <button onClick={() => navigate("/novo")}>
                Novo
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Preço</th>
                        <th>Unidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.preco}</td>
                            <td>{item.unidade}</td>
                            <td>
                                <Link to={`/produtos/editar/${item.id}`}>Editar</Link>
                                <Link to="/produtos">remover </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Listagem;