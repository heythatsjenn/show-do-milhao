const menuInicial = document.getElementById('menu');
const logo = document.getElementById('logo');
const botaoJogar = document.getElementById('botao-jogar');
const botaoComoJogar = document.getElementById('botao-como-jogar');
const botaoMusica = document.getElementById('botao-musica');
const botaoSons = document.getElementById('botao-sons');
const botaoComoJogarSair = document.getElementById('botao-como-jogar-sair');
const card = document.getElementById('card');
const quiz = document.getElementById('quiz');
const comoJogar = document.getElementsByClassName('como-jogar');
const pontos = document.getElementById('pontos');
let pergunta = document.getElementById('pergunta');
let respostaA = document.getElementById('a');
let respostaB = document.getElementById('b');
let respostaC = document.getElementById('c');
let respostaD = document.getElementById('d');
let acertos = document.getElementById('acertos');
let premio = document.getElementById('premio');
let imagem = document.getElementById('game-over-imagem');
let mensagem = document.getElementById('mensagem');
let conteudoQuiz = document.getElementById('quiz-conteudo');
let popUp = document.getElementById('game-over');
let reais = document.getElementsByClassName('reais');
let perdeTudo = document.getElementById('perde-tudo');
let opcao = document.getElementsByClassName('opcao');
let musica = document.getElementById('musica');
let somTriste = document.getElementById('som-perder');
let somFeliz = document.getElementById('som-ganhar');


// Abre/fecha a guia Como Jogar
botaoComoJogar.addEventListener('click',() =>{
    comoJogar[0].classList.add("como-jogar-iniciar");
});

botaoComoJogarSair.addEventListener('click', () =>{
    comoJogar[0].classList.remove("como-jogar-iniciar");
});


// Toca a música tema do Show do Milhão
botaoMusica.addEventListener('click', tocaMusica);

musica.play();
let contadorMusica = 0;

function tocaMusica(){
    if(contadorMusica%2 == 0){
        musica.pause();
        botaoMusica.classList.remove('audio');
        botaoMusica.classList.add('audio-ativo');
    }
    else{
        musica.play();
        botaoMusica.classList.remove('audio-ativo');
        botaoMusica.classList.add('audio');
    }
    contadorMusica++;
        
}

// Toca os sons

let contadorSons = 0;

botaoSons.addEventListener('click', ()=>{
    if (contadorSons%2 == 0) {
        botaoSons.classList.remove('audio');
        botaoSons.classList.add('audio-ativo');
    }
    else{
        botaoSons.classList.add('audio');
        botaoSons.classList.remove('audio-ativo');
    }
    contadorSons++;
});

function tocaSomTriste(){
    if(contadorSons%2 == 0){
        somTriste.play();
    }
}

function tocaSomFeliz(){
    if(contadorSons%2 == 0){
        somFeliz.play();
    }
}

//Inicializa a UI do jogo
botaoJogar.addEventListener('click', iniciar);

//Começa o jogo
function iniciar() {
    menuInicial.classList.add("menu-iniciar");
    setTimeout(() => {
        menuInicial.classList.add("esconder");
    }, 1000);
    quiz.classList.add("quiz-iniciar");
    logo.classList.add("logo-iniciar");
    pontos.classList.add("pontos-iniciar");
}

//Volta para o menu
function voltar(){
    quiz.classList.remove("quiz-iniciar");
    logo.classList.remove("logo-iniciar");
    pontos.classList.remove("pontos-iniciar");
    menuInicial.classList.remove("esconder");
    menuInicial.classList.remove("menu-iniciar");
    jogarNovamente();
}

//Printa quantos reais a pessoa vai ganhar em cada situação (acertar, desistir, perder)
function printaPontos(){
    reais[0].innerHTML = premios[pontuacao + 1]+ " R$!";
    reais[1].innerHTML = premios[pontuacao] + " R$!";
    reais[2].innerHTML = premios[pontuacao]/2 + " R$!";
    if (pontuacao == ultimaPergunta-1) {
        perdeTudo.innerHTML ="<h3>Perdendo essa, você</h3>"
        reais[2].innerHTML = "<p>Perde Tudo!</p>"
    }
    
    acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
    premio.innerHTML = "<p> Você acumulou " + premioTotal + " R$!</p>";
}

//Printa a pergunta atual na tela.
function printaPergunta (){
    perguntaAtual = verificaNivel();
    p = perguntaAtual;  

    pergunta.innerHTML  = "<h2>"+ p.pergunta  + "</h2>";
    respostaA.innerHTML = "<p>" + p.respostaA + "</p>";
    respostaB.innerHTML = "<p>" + p.respostaB + "</p>";
    respostaC.innerHTML = "<p>" + p.respostaC + "</p>";
    respostaD.innerHTML = "<p>" + p.respostaD + "</p>";
}

//Printa a cor vermelho ou verde no plano de fundo do botão que for pressionado.
function printaCor(opcaoEscolhida){
    if(perguntaAtual.certa == opcaoEscolhida){
        document.getElementById(opcaoEscolhida).classList.add('respostaCerta');
        setTimeout(() => {
        document.getElementById(opcaoEscolhida).classList.remove('respostaCerta');
        }, 300);
    }
    else{
        document.getElementById(opcaoEscolhida).classList.add('respostaErrada');
        setTimeout(() => {
              document.getElementById(opcaoEscolhida).classList.remove('respostaErrada');
        }, 300);
    }
}

//Printa o popup de game-over
function printaGameOver(opcaoEscolhida){
    setTimeout(() => {
        conteudoQuiz.classList.add('esconder')
    }, 200);
    popUp.classList.add('slide-up');

    if(perguntaAtual.certa == opcaoEscolhida){
        imagem.src = "./imagens/happy.jpg";
        mensagem.innerHTML="<p>Parabéns, você ganhou " + premioTotal + "</p>"
        tocaSomFeliz();
    }
    else{
        if (premioTotal == 0) {
            mensagem.innerHTML="<p>Poxa, você não ganhou nada :C</p>"
            imagem.src= "./imagens/meh.jpg";
            tocaSomTriste();
        }
        else{
            mensagem.innerHTML="<p>Que pena, você só ganhou "+ premioTotal+" reais</p>";
            imagem.src= "./imagens/sad.jpg";
            tocaSomTriste();
        }
        
    }
}