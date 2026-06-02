import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { criar } from "../services/produtoService";

function Formulario() {
    const [erro, setErro] = useState();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const salvar = async (dados) => {
        try {
            await criar(dados);
            navigate("/produtos");
        } catch (error) {
            setErro(error.message);
        }
    };

    return (
        <>
            <h1>Cadastro de Produtos</h1>

            <p>{erro}</p>

            <form onSubmit={handleSubmit(salvar)}>
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    {...register("nome")}
                />

                <input
                    type="number"
                    placeholder="Preço 0.00"
                    {...register("preco")}
                />

                <input
                    type="text"
                    placeholder="Unidade"
                    {...register("unidade")}
                />

                <Link to="/produtos">Cancelar</Link>

                <button type="submit">Salvar</button>
            </form>
        </>
    );
}

export default Formulario;