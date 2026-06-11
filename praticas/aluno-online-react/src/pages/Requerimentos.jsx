import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

import {
  listarRequerimentos,
  criarRequerimento,
} from "../services/requerimentoService";

import RequerimentoForm from "../forms/RequerimentoForm";

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);

  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarRequerimentos();
        setRequerimentos(dados);
      } catch (error) {
        if (error.status === 401) {
          logout();
          navigate("/login");
          return;
        }

        console.log(error);
      }
    }

    carregar();
  }, []);

  async function handleSubmit(dados) {
    try {
      const novo = await criarRequerimento(dados);

      setRequerimentos((lista) => [
        ...lista,
        novo,
      ]);
    } catch (error) {
      if (error.status === 401) {
        logout();
        navigate("/login");
        return;
      }

      console.log(error);
    }
  }

  return (
    <div>
      <h1>Requerimentos</h1>

      <RequerimentoForm onSubmit={handleSubmit} />

      <ul>
        {requerimentos.map((req) => (
          <li key={req.id}>
            <strong>{req.tipo}</strong>
            <p>{req.descricao}</p>
            <small>{req.data}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Requerimentos;