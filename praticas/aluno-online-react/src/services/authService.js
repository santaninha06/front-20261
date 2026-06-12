import axios from "axios";

const URL = "http://localhost:3000/usuarios";

export async function login(email, senha) {
  const resposta = await axios.get(`${URL}?email=${email}`);

  const usuario = resposta.data[0];

  if (!usuario || usuario.senha !== senha) {
    throw new Error("Email ou senha inválidos");
  }

  const token = btoa(
    `${usuario.email}-${Date.now()}`
  );

  return {
    usuario,
    token,
  };
}