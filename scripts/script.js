const menuInicial = document.getElementById('menu');
const logo = document.getElementById('logo');
const botaoJogar = document.getElementById('botao-jogar');
const card = document.getElementById('card');
const quiz = document.getElementById('quiz');


botaoJogar.addEventListener('click', Iniciar);

function Iniciar() {
    menuInicial.classList.add("menu-iniciar");
    quiz.classList.add("quiz-iniciar");
    logo.classList.add("logo-iniciar");
}
