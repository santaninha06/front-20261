import '../styles/header.css';

function Header({ titulo }) {
  return (
    <header>
      <h1>{titulo}</h1>
      <img 
        src="https://raw.githubusercontent.com/santaninha06/front-20261/1a5194dd05e434768284274cb75e333c00765664/praticas/aluno-online-react/avatar.svg"
        alt="Avatar do aluno"/>
    </header>
  );
}

export default Header;