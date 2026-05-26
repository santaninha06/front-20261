import { useForm } from "react-hook-form";

import { useNavigate } from "react-router";

import { useAuth } from "../contexts/AuthContext";
import "../styles/page.css";

function Login() {

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { login } = useAuth();

  function entrar(dados) {

    login({
      nome: dados.nome,
      email: dados.email,
    });

    navigate("/");
  }

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit(entrar)}>

        <input
          type="text"
          placeholder="Nome"
          {...register("nome")}
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <button type="submit">
          Entrar
        </button>

      </form>

    </div>
  );
}

export default Login;