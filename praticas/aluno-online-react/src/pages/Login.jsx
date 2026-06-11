import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { login as loginService } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await loginService(
        email,
        senha
      );

      login(
        resposta.usuario,
        resposta.token
      );

      navigate("/");
    } catch (erro) {
      alert("Credenciais inválidas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* seus inputs */}
    </form>
  );
}

export default Login;