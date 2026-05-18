import "../styles/page.css";

function Faltas() {
  return (
    <div className="page">
      <h1 className="page-title">Faltas</h1>

      <div className="card">
        <div className="card-header">
          Histórico de faltas por semestre
        </div>

        <div className="card-body">
          <h3>2026.1</h3>

          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td>0</td>
                <td>100%</td>
              </tr>

              <tr>
                <td>Construção de Frontend</td>
                <td>0</td>
                <td>100%</td>
              </tr>

              <tr>
                <td>Manutenção de Software e Devops</td>
                <td>0</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Faltas;
