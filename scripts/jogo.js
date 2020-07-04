// Variaveis Globais //

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
let contadorDePulos = 0;
let premioTotal = 0;
let mensagem = document.getElementById('mensagem');
let conteudoQuiz = document.getElementById('quiz-conteudo');
let popUp = document.getElementById('game-over');
let reais = document.getElementsByClassName('reais');


//Usando o algoritmo de Fisher-Yates para randomizar a array de perguntas. //

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


//Printa as perguntas na tela.
function criaPergunta (){
    let p = perguntas[perguntaAtual];
    reais[0].innerHTML = "<p> Você acumulará " + premios[pontuacao + 1] + " R$ se acertar essa!</p>";
    reais[1].innerHTML = "<p> Você ganhará " + premios[pontuacao] + " R$ se desistir!</p>";
    reais[2].innerHTML = "<p> Você ganhará " + premios[pontuacao]/2 + " R$ se errar essa!</p>";
    pergunta.innerHTML = "<h2>" + p.pergunta + "</h2>";
    respostaA.innerHTML = "<p>" + p.respostaA + "</p>";
    respostaB.innerHTML = "<p>" + p.respostaB + "</p>";
    respostaC.innerHTML = "<p>" + p.respostaC + "</p>";
    respostaD.innerHTML = "<p>" + p.respostaD + "</p>";
}

//Verifica as respostas.
function verificaResposta(opcaoEscolhida){
    if(perguntaAtual < ultimaPergunta){
        //caso em que a pessoa acertou uma resposta comum.
        if(perguntas[perguntaAtual].certa == opcaoEscolhida){
            pontuacao++;
            premioTotal = premios[pontuacao];
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            perguntaAtual++;
            criaPergunta();
        }
        //caso em que a pessoa errou uma resposta comum.
        else{
            premioTotal = premios[pontuacao]/2;
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            premio.innerHTML = "<p> Você ganhou " + premioTotal + " R$!</p>";
            gameOver(opcaoEscolhida);
        }
    }
    else if (perguntaAtual == ultimaPergunta) {
        
        //caso a pessoa tenha acertado a ultima pergunta.
        if(perguntas[perguntaAtual].certa == opcaoEscolhida){
            pontuacao++;
            premioTotal = premios[pontuacao];
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            premio.innerHTML = "<p> Você GANHOU " + premioTotal + " R$!</p>";
            gameOver(opcaoEscolhida);
        }

        //caso a pessoa tenha errado a ultima pergunta.
        else{
            premioTotal = 0;
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            premio.innerHTML = "<p> Você nao ganhou nada :c </p>";
            gameOver(opcaoEscolhida);
        }
    }
}

//Inicia o jogo.
function jogo(){
    randomiza(perguntas);
    criaPergunta();  
}

//Inicia o jogo novamente.
function jogarNovamente(){
    conteudoQuiz.classList.remove('esconder');
    popUp.classList.remove('slide-up');
    contadorDePulos = 0;
    perguntaAtual = 0;
    pontuacao = 0;
    premioTotal = 0;
    acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
    premio.innerHTML = "<p> Você acumulou " + premioTotal + " R$!</p>";
    jogo();
}

//Pula uma pergunta, sendo que essa pergunta é considerada um acerto.
function pularPergunta(){
    if(contadorDePulos<1 && perguntaAtual < ultimaPergunta){
        acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
        premio.innerHTML = "<p> Você acumulou " + premioTotal + " R$!</p>";
        perguntaAtual++;
        contadorDePulos++;
        criaPergunta();
    }
}

function gameOver(opcaoEscolhida){

    conteudoQuiz.classList.add('esconder');
    popUp.classList.add('slide-up');

    if(perguntas[perguntaAtual].certa == opcaoEscolhida){
        mensagem.innerHTML="<h2>Parabéns, você ganhou" + premioTotal + "</h2>"
    }
    else{
        if (premioTotal == 0) {
            mensagem.innerHTML="<h2>Poxa, você perdeu tudo :C</h2>"
        }
        else{
            mensagem.innerHTML="<h2>Que pena, você só ganhou"+ premioTotal+" reais</h2>";
        }
        
    }
}

jogo();