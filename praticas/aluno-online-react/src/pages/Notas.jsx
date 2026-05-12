import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import '../styles/notas.css';

function Notas() {
  return (
    <>
      <MenuLateral />
      <Header />

      <main>
        <h2>Histórico de notas</h2>

        <section>
          <h3>2026.1</h3>

          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
              <tr>
                <td>Manutenção de Software e Devops</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Notas;