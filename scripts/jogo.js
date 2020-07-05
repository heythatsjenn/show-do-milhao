// Variaveis Globais //

let perguntas= [
    {
        pergunta: "Quantos signos astrógicos fazem o zodíaco?",
        nivel: "1",
        respostaA : "9 signos",
        respostaB : "10 signos",
        respostaC :"11 signos",
        respostaD : "12 signos",
        certa : "d"
    },
    {
        pergunta: "Que personagem do folclore brasileiro tem uma perna só ?",
        nivel: "1",
        respostaA : "Cuca",
        respostaB : "Curupira",
        respostaC :"Boitatá",
        respostaD : "Saci-Pererê",
        certa : "d"
    },
    {
        pergunta: "Com quantos graus centígrados a água ferve?",
        nivel: "1",
        respostaA : "200",
        respostaB : "100",
        respostaC :"170",
        respostaD : "220",
        certa : "b"
    },
    {
        pergunta: "Como é conhecida a ponte que liga as cidades do Rio de Janeiro e Niterói?",
        nivel: "1",
        respostaA : "Rio Kwait",
        respostaB : "Rio-Niterói",
        respostaC : "Rio São Francisco",
        respostaD : "Brooklin",
        certa : "b"
    },
    {
        pergunta: "Que feriado é comemorado no dia primeiro de maio?",
        nivel: "1",
        respostaA : "Dia do aviador",
        respostaB : "Dia do trabalho",
        respostaC : "Dia das mães",
        respostaD : "Dia da bandeira",
        certa : "b"
    },
    {
        pergunta: "Qual é a capital dos Estados Unidos?",
        nivel: "2",
        respostaA : "New York",
        respostaB : "Miami",
        respostaC :"Chicago",
        respostaD : "Washington",
        certa : "d"
    },
    {
        pergunta: "Qual é o pico mais alto do mundo?",
        nivel: "2",
        respostaA : "Everest",
        respostaB : "Monte Sinai",
        respostaC : "Monte Castelo",
        respostaD : "Mont Blanc",
        certa : "a"
    },
    {
        pergunta: "Qual a raça do cão que é o personagem principal do filme Bethoven?",
        nivel: "2",
        respostaA : "Fila",
        respostaB : "Pastor Alemão",
        respostaC : "Poodle",
        respostaD : "São Bernardo",
        certa : "d"
    },
    {
        pergunta: "O Coliseu é um monumento histórico de que cidade européia?",
        nivel: "2",
        respostaA : "Paris",
        respostaB : "Copenhague",
        respostaC : "Roma",
        respostaD : "Londres",
        certa : "c"
    },
    {
        pergunta: "Uma pessoa cleptomaníaca é:",
        nivel: "2",
        respostaA : "Colecionadora",
        respostaB : "Decoradora",
        respostaC : "Médica",
        respostaD : "Doente",
        certa : "d"
    },
    {
        pergunta: "Como é chamado quem nasce em Milão, na Itália?",
        nivel: "2",
        respostaA : "Mailanense",
        respostaB : "Milano",
        respostaC : "Milista",
        respostaD : "Milanês",
        certa : "b"
    },
    {
        pergunta: "Em que país o pintor Picasso nasceu?",
        nivel: "2",
        respostaA : "Espanha",
        respostaB : "Holanda",
        respostaC : "França",
        respostaD : "Bélgica",
        certa : "a"
    },
    {
        pergunta: "Que imperador tocou fogo em Roma?",
        nivel: "2",
        respostaA : "César",
        respostaB : "Nero",
        respostaC : "Brutus",
        respostaD : "Calígula",
        certa : "b"
    },
    {
        pergunta: "Sashimi é um delicado prato originário de que país?",
        nivel: "2",
        respostaA : "Japão",
        respostaB : "China",
        respostaC : "Índia",
        respostaD : "Indonésia",
        certa : "a"
    },
    {
        pergunta: "Onde nasceu o Rei Arthur da Távola Redonda?",
        nivel: "3",
        respostaA : "Espanha",
        respostaB : "Inglaterra",
        respostaC : "Austria",
        respostaD : "França",
        certa : "b"
    },
    {
        pergunta: "Estamos em falta de perguntas nível 4, mas você quer ser milionário?",
        nivel: "4",
        respostaA : "Claro que sim!",
        respostaB : "Não, odeio a burguesia!",
        respostaC : "É óbvio, sou uma material girl!",
        respostaD : "Ah, eu até gosto desse filme",
        certa : "c"
    },

    
]

let premios = [0, 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000];

let pergunta = document.getElementById('pergunta');
let respostaA = document.getElementById('a');
let respostaB = document.getElementById('b');
let respostaC = document.getElementById('c');
let respostaD = document.getElementById('d');
let acertos = document.getElementById('acertos');
let premio = document.getElementById('premio');
let pontuacao = 0;
let ultimaPergunta = 16;
let perguntaAtual = 0;
let contadorDePulos = 0;
let premioTotal = 0;
let mensagem = document.getElementById('mensagem');
let conteudoQuiz = document.getElementById('quiz-conteudo');
let popUp = document.getElementById('game-over');
let reais = document.getElementsByClassName('reais');
let perdeTudo = document.getElementById('perde-tudo');
let nivelAtual = 1;
let imagem = document.getElementById('game-over-imagem');

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

function verificaNivel(){
    if (0<perguntaAtual<6) {
        nivelAtual = 1;
    }
    else if(5<perguntaAtual<11){
        nivelAtual = 2;
    }
    else if (10<perguntaAtual<16) {
        nivelAtual = 3;
    }
    else{
        nivelAtual = 4;
    }
}

function printaPontos(){
    reais[0].innerHTML = premios[pontuacao + 1]+ " R$!";
    reais[1].innerHTML = premios[pontuacao] + " R$!";
    reais[2].innerHTML = premios[pontuacao]/2 + " R$!";
    if (pontuacao == ultimaPergunta-1) {
        perdeTudo.innerHTML ="<h3>Perdendo essa, você</h3>"
        reais[2].innerHTML = "<p>Perde Tudo!</p>"
    }
}

//Printa as perguntas na tela.
function criaPergunta (){

    printaPontos();

    let p = perguntas[perguntaAtual];
    pergunta.innerHTML = "<h2>" + p.pergunta + "</h2>";
    respostaA.innerHTML = "<p>" + p.respostaA + "</p>";
    respostaB.innerHTML = "<p>" + p.respostaB + "</p>";
    respostaC.innerHTML = "<p>" + p.respostaC + "</p>";
    respostaD.innerHTML = "<p>" + p.respostaD + "</p>";
}

//Verifica as respostas.
function verificaResposta(opcaoEscolhida){
    if(pontuacao < ultimaPergunta-1){
        //caso em que a pessoa acertou uma resposta comum.
        if(perguntas[perguntaAtual].certa == opcaoEscolhida){
            pontuacao++;
            premioTotal = premios[pontuacao];
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            perguntaAtual++;
            document.getElementById(opcaoEscolhida).classList.add('respostaCerta');
            setTimeout(() => {
                document.getElementById(opcaoEscolhida).classList.remove('respostaCerta');
            }, 300);
            setTimeout(() => {
                criaPergunta();
            }, 300);
        }
        //caso em que a pessoa errou uma resposta comum.
        else{
            premioTotal = premios[pontuacao]/2;
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            premio.innerHTML = "<p> Você ganhou " + premioTotal + " R$!</p>";
            document.getElementById(opcaoEscolhida).classList.add('respostaErrada');
            setTimeout(() => {
                document.getElementById(opcaoEscolhida).classList.remove('respostaErrada');
            }, 300);
            gameOver(opcaoEscolhida);
        }
    }
    else if (pontuacao == ultimaPergunta-1) {
        
        //caso a pessoa tenha acertado a ultima pergunta.
        if(perguntas[perguntaAtual].certa == opcaoEscolhida){
            pontuacao++;
            premioTotal = premios[pontuacao];
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            premio.innerHTML = "<p> Você GANHOU " + premioTotal + " R$!</p>";
            document.getElementById(opcaoEscolhida).classList.add('respostaCerta');
            setTimeout(() => {
                document.getElementById(opcaoEscolhida).classList.remove('respostaCerta');
            }, 300);
            gameOver(opcaoEscolhida);
        }

        //caso a pessoa tenha errado a ultima pergunta.
        else{
            premioTotal = 0;
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            premio.innerHTML = "<p> Você nao ganhou nada :c </p>";
            document.getElementById(opcaoEscolhida).classList.add('respostaErrada');
            setTimeout(() => {
                document.getElementById(opcaoEscolhida).classList.remove('respostaErrada');
            }, 300);
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
    if(contadorDePulos<1 && pontuacao < ultimaPergunta){
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
        imagem.src = "./imagens/happy.jpg";
        mensagem.innerHTML="<p>Parabéns, você ganhou " + premioTotal + "</p>"
    }
    else{
        if (premioTotal == 0) {
            mensagem.innerHTML="<p>Poxa, você não ganhou nada :C</p>"
        }
        else{
            mensagem.innerHTML="<p>Que pena, você só ganhou "+ premioTotal+" reais</p>";
            imagem.src= "./imagens/sad.jpg";
        }
        
    }
}

jogo();