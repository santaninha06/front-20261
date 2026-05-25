import { useState, useEffect } from "react";

function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTarefas([
        { id: 1, nome: "Implementar Trabalho", situacao: "aberta" },
        { id: 2, nome: "Entregar Práticas", situacao: "pendente" },
        { id: 3, nome: "Revisar Conteúdo", situacao: "aberta" },
        { id: 4, nome: "Assistir Video-aulas", situacao: "concluída" },
      ]);

      setCarregando(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <h1>Página Principal</h1>

      {carregando ? (
        <p>Aguarde...</p>
      ) : (
        <table className="border rounded border-gray-300">
          <thead className="bg-gray-300">
            <tr>
              <th className="p-1"></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="p-1 m-1 h-2 rounded-full bg-gray-300 w-32"></div>
              </td>

              <td>
                <div className="p-1 m-1 h-2 rounded-full bg-gray-300 w-32"></div>
              </td>

              <td>
                <div className="p-1 m-1 h-2 rounded-full bg-gray-300 w-32"></div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default Home;