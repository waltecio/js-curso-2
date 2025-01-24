// Alterando o título da página
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

//função do botão no console
function verificarChute() {
    console.log ('o botão foi clicado')
}

// Funções para os botões
document.getElementById('console').onclick = () => console.log('O botão foi clicado');
document.getElementById('alerta').onclick = () => alert('Eu amo JS');
document.getElementById('prompt').onclick = () => {
  const cidade = prompt('Digite uma cidade:');
  alert(`Estive em ${cidade} e lembrei de você.`);
};
document.getElementById('soma').onclick = () => {
  const num1 = +prompt('Número 1:');
  const num2 = +prompt('Número 2:');
  alert(`A soma é: ${num1 + num2}`);
};
