import "../styles/page.css";

function Boletos() {
  return (
    <div className="page">
      <h1 className="page-title">Boletos</h1>

      <div className="card">
        <div className="card-header">
          Histórico de pagamento
        </div>

        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>19/01/2026</td>
                <td>R$ 500,00</td>
                <td>Pago</td>
              </tr>

              <tr>
                <td>19/02/2026</td>
                <td>R$ 500,00</td>
                <td>Pago</td>
              </tr>

              <tr>
                <td>19/03/2026</td>
                <td>R$ 500,00</td>
                <td>Pendente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Boletos;