const menuInicial = document.getElementById('menu');
const logo = document.getElementById('logo');
const botaoJogar = document.getElementById('botao-jogar');
const perguntas = document.getElementById('perguntas');
const card = document.getElementById('card');

botaoJogar.addEventListener('click', Iniciar);

function Iniciar() {
    menuInicial.classList.add("menu-iniciar");
    perguntas.classList.add("perguntas-iniciar");
    logo.classList.add("logo-iniciar");
}

