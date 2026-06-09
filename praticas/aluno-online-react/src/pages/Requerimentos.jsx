import { useEffect, useState } from "react";
import {
  listarRequerimentos,
  criarRequerimento,
} from "../services/requerimentoService";
import RequerimentoForm from "../forms/RequerimentoForm";

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarRequerimentos();
        setRequerimentos(dados);
      } catch (error) {
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
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Requerimentos</h1>

      <RequerimentoForm
        onSubmit={handleSubmit}
      />

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