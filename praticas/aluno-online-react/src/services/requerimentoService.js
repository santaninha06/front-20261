const API_URL = "http://localhost:3000/requerimentos";

function getToken() {
  return localStorage.getItem("token");
}

export async function listarRequerimentos() {
  const token = getToken();

  if (!token) {
    const erro = new Error("Unauthorized");
    erro.status = 401;
    throw erro;
  }

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar requerimentos");
  }

  return await response.json();
}

export async function criarRequerimento(data) {
  const token = getToken();

  if (!token) {
    const erro = new Error("Unauthorized");
    erro.status = 401;
    throw erro;
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Erro ao criar requerimento");
  }

  return await response.json();
}