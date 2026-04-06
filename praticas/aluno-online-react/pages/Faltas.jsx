import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import '../styles/faltas.css';

function Faltas() {
  return (
    <>
      <MenuLateral />
      <Header />

      <main>
        <h2>Histórico de faltas por semestre</h2>

        <section>
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
        </section>
      </main>
    </>
  );
}

export default Faltas;