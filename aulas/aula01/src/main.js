
const matricula = document.querySelector('#matricula');
const senha = document.querySelector('#senha');
const botao = document.querySelector('button');

botao.addEventListener('click', function(e){
  const matriculaErro = document.querySelector("matriculaErro");
  const senhaErro = document.querySelector("senhaErro");

  if (matricula.value ==''){
    matriculaErro.textContent="matricula é obrigatoria";
    return;
  }
  if (parseInt(matricula.value)<=0){
    matriculaErro.textContent="matricula deve ser um numero positivo";
  }

  if (senha.value ==''){
    senhaErro.textContent="senha é obrigatoria";
    return;
  }
  if (senha.value.length<8){
    senhaErro.textContent="Senha deve ter no minimo 8 caracteres";
  }

});