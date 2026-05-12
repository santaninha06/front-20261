import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <>
      <MenuLateral />
      <Header />

      <main>
        <h2>Bem vindo ao portal do aluno</h2>

        <section>
          <h3>Mural de aviso</h3>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </section>

        <section>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li>23/02 - Início do ano letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Dashboard;