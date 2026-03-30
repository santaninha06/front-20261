
import logo from './assets/hero.png'
import avatar from './assets/vite.svg'

function App() {
  return <div className="flex flex-col md:flex-row">
    <aside className='hidden md:block bg-gray-300'>
      
      <header>
        <img src={logo} alt="" />
        <h1>Aluno Online</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Boletos</li>
            <li>Requerimentos</li>
            <li>Sair</li>
          </ul>
        </nav>
      </header>
    </aside>
    <main>
      <header>
        <h1>Ola,aluno!</h1>
        <img src={avatar} alt="avatar" />
      </header>
      <h2>Bem vindo ao portal do aluno</h2>
      <section>
        <article>
          <h3>Mural de avisos</h3>
          <ul>
            <li>Inscriçoes para projeto de extensão</li>
            <li>Eleição para representante</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendario de academico</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Minhas disciplinas</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
    </main>
  </div>
}

export default App;