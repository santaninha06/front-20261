const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const form = document.querySelector('#loginForm');

form.addEventListener('submit', function(e){
  e.preventDefault(); // NÃO recarrega a página

  const emailErro = document.querySelector("#emailErro");
  const senhaErro = document.querySelector("#senhaErro");

  
  emailErro.textContent = "";
  senhaErro.textContent = "";

  let valido = true;

 
  if (email.value === '') {
    emailErro.textContent = "O campo de email é obrigatório.";
    valido = false;
  }

 
  if (senha.value === '') {
    senhaErro.textContent = "O campo de senha é obrigatório.";
    valido = false;
  } else if (senha.value.length < 8) {
    senhaErro.textContent = "A senha deve ter no mínimo 8 caracteres.";
    valido = false;
  }

});