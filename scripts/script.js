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

/////////////////////////////////////////////////////////////////////

let perguntas = [
    {
        pergunta: "Essa é uma pergunta teste?1",
        respostaA : "Sim1",
        respostaB : "Não1",
        respostaC :"Vou Pensar1",
        respostaD : "Sei lá mano1",
        certa : "a"
    },
    {
        pergunta: "Essa é uma pergunta teste?2",
        respostaA : "Sim2",
        respostaB : "Não2",
        respostaC :"Vou Pensar2",
        respostaD : "Sei lá mano2",
        certa : "b"
    },
    {
        pergunta: "Essa é uma pergunta teste?3",
        respostaA : "Sim3",
        respostaB : "Não3",
        respostaC :"Vou Pensar3",
        respostaD : "Sei lá mano3",
        certa : "c"
    },
    {
        pergunta: "Essa é uma pergunta teste?4",
        respostaA : "Sim4",
        respostaB : "Não4",
        respostaC :"Vou Pensar4",
        respostaD : "Sei lá mano4",
        certa : "d"
    },
    {
        pergunta: "Essa é uma pergunta teste?5",
        respostaA : "Sim5",
        respostaB : "Não5",
        respostaC :"Vou Pensar5",
        respostaD : "Sei lá mano5",
        certa : "a"
    }
    
]

let premios = [0, 1000, 2000, 3000, 4000, 10000];

let pergunta = document.getElementById('pergunta');
let respostaA = document.getElementById('a');
let respostaB = document.getElementById('b');
let respostaC = document.getElementById('c');
let respostaD = document.getElementById('d');
let acertos = document.getElementById('acertos');
let premio = document.getElementById('premio');
let pontuacao = 0;
let ultimaPergunta = perguntas.length - 1;
let perguntaAtual = 0;


//Usando o algoritmo de Fisher-Yates para randomizar a array de perguntas

function randomiza(array){
    var indexAtual = array.length, valorTemporario, indexAleatorio;

    while(0 !== indexAtual){
        indexAleatorio = Math.floor(Math.random()*indexAtual);
        indexAtual -= 1;

        valorTemporario = array[indexAtual];
        array[indexAtual] = array[indexAleatorio];
        array[indexAleatorio] = valorTemporario;
    }
    return array;
}

//

function criaPergunta (){
    let p = perguntas[perguntaAtual];
    pergunta.innerHTML = "<h2>" + p.pergunta + "</h2>";
    respostaA.innerHTML = "<p>" + p.respostaA + "</p>";
    respostaB.innerHTML = "<p>" + p.respostaB + "</p>";
    respostaC.innerHTML = "<p>" + p.respostaC + "</p>";
    respostaD.innerHTML = "<p>" + p.respostaD + "</p>";
}

function verificaResposta(opcaoEscolhida){
    if(perguntas[perguntaAtual].certa == opcaoEscolhida){
        pontuacao++;
        acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
        premio.innerHTML = "<p> Você acumulou " + premios[pontuacao] + " R$!</p>";
    }
    else{
        premio.innerHTML = "<p> Você acumulou " + premios[pontuacao] + " R$!</p>";
    }
    if(perguntaAtual < ultimaPergunta){
        perguntaAtual++;
        criaPergunta();
    }
    else{

    }
}


function jogo(){
    randomiza(perguntas);
    criaPergunta();  
}

jogo();