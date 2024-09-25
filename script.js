// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando pela classe das frases
const frases = document.getElementsByClassName('mensagem2');

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando o botão que altera as frases
const changePhrasesBtn = document.getElementById("btn-mudar-frases");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Evento de clique para alterar o texto das frases
changePhrasesBtn.addEventListener('click', function() {
 for (let i= 0; i <= frases.length; i++){
  frases[i].textContent = `A frase ${i+1} foi mudada utilizando JS!`;
 }
})