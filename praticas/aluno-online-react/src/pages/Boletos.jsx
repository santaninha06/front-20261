import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import '../styles/boletos.css';

function Boletos() {
  return (
    <>
      <MenuLateral />
      <Header />

      <main>
        <h2>Histórico de pagamento</h2>

        <section>
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
                <td>500,00</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>19/01/2026</td>
                <td>500,00</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>19/01/2026</td>
                <td>500,00</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Boletos;