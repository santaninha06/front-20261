import "../styles/page.css";

function Requerimentos() {
  return (
    <div className="page">
      <h1 className="page-title">
        Requerimentos
      </h1>

      <div className="card">
        <div className="card-header">
          Solicitações online
        </div>

        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Data</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Revisão de Menção</td>
                <td>19/01/2026</td>
                <td>Indeferido</td>
              </tr>

              <tr>
                <td>Dispensa de disciplina</td>
                <td>19/01/2026</td>
                <td>Indeferido</td>
              </tr>

              <tr>
                <td>Trancamento de matrícula</td>
                <td>19/01/2026</td>
                <td>Deferido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Requerimentos;
