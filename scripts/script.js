const menuInicial = document.getElementById('menu');
const logo = document.getElementById('logo');
const botaoJogar = document.getElementById('botao-jogar');
const card = document.getElementById('card');
const quiz = document.getElementById('quiz');
const pontos = document.getElementById('pontos');


botaoJogar.addEventListener('click', Iniciar);

function Iniciar() {
    menuInicial.classList.add("menu-iniciar");
    quiz.classList.add("quiz-iniciar");
    logo.classList.add("logo-iniciar");
    pontos.classList.add("pontos-iniciar");
}
