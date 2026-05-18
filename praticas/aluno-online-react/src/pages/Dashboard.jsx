import "../styles/page.css";

function Dashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Olá, Aluno!</h1>

      <h2 className="page-subtitle">
        Bem-vindo ao portal do aluno
      </h2>

      <div className="card">
        <div className="card-header">
          Mural de Avisos
        </div>

        <div className="card-body">
          <p>Inscrição para o projeto de extensão</p>

          <p>Eleição para representante de turma</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          Calendário Acadêmico
        </div>

        <div className="card-body">
          <p>23/02 - Início do período letivo 2026-1</p>

          <p>25/04 - Prazo final para aplicação da P1</p>

          <p>23/06 - Prazo final para aplicação da P2</p>

          <p>04/07 - Fim do período letivo 2026-1</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
