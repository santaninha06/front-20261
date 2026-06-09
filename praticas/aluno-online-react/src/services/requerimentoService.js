const API_URL = "http://localhost:3000/requerimentos";


export async function listarRequerimentos() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Erro ao buscar requerimentos");
  return await response.json();
}


export async function criarRequerimento(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw new Error("Erro ao criar requerimento");
  return await response.json();
}