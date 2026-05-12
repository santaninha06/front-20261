import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import '../styles/requerimentos.css';

function Requerimentos() {
  return (
    <>
      <MenuLateral />
      <Header />

      <main>
        <h2>Faça solicitação online</h2>

        <section>
          <table>
            <thead>
              <tr>
                <th>Tipo de requerimentos</th>
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
        </section>
      </main>
    </>
  );
}

export default Requerimentos;