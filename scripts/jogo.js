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
        pergunta: "Qual o videogame mais novo da Nintendo?",
        nivel: "2",
        respostaA : "Zelda",
        respostaB : "Super Nintendo",
        respostaC : "Nintendo Switch",
        respostaD : "Super Mario",
        certa : "c"
    },
    {
        pergunta: "Qual é o terceiro mês do ano?",
        nivel: "1",
        respostaA : "Fevereiro",
        respostaB : "Março",
        respostaC : "Junho",
        respostaD : "Abril",
        certa : "b"
    },
{
        pergunta: "O rato roeu a roupa do rei de _____?",
        nivel: "1",
        respostaA : "Portugal",
        respostaB : "Paris",
        respostaC : "Roma",
        respostaD : "São Paulo",
        certa : "c"
    },
{
        pergunta: "O corpo do ser humano é, em sua maior parte, formato pelo átomo:",
        nivel: "3",
        respostaA : "Oxigênio",
        respostaB : "Carbono",
        respostaC : "Nitrogênio",
        respostaD : "Hidrogênio",
        certa : "a"
    },
{
        pergunta: "O que é mais rápido?",
        nivel: "1",
        respostaA : "Luz",
        respostaB : "Foguetes Espaciais",
        respostaC : "Cometa",
        respostaD : "Carro da Ferrari",
        certa : "a"
    },
{
        pergunta: "No primeiro filme de Harry Potter, o que o vilão almeja?",
        nivel: "1",
        respostaA : "A Águia de Fogo",
        respostaB : "A Varinha de Merlin",
        respostaC : "O Fogo Eterno",
        respostaD : "A Pedra Filosofal",
        certa : "d"
    },
{
        pergunta: "Qual a arma principal de um Jedi?",
        nivel: "2",
        respostaA : "Pistola Laser",
        respostaB : "Sabre de Luz",
        respostaC : "Bastão de Energia",
        respostaD : "Hadouken",
        certa : "b"
    },
{
        pergunta: "Qual o nome do jogo mais vendido do mundo?",
        nivel: "3",
        respostaA : "Super Mario Bros.",
        respostaB : "Tetris",
        respostaC : "Minecraft",
        respostaD : "Grand Theft Auto V",
        certa : "c"
    },
{
        pergunta: "Quantos kilogramas de plástico vai pro oceano por ano em média?",
        nivel: "4",
        respostaA : "8 bilhões de kilogramas",
        respostaB : "400 milhões de kilogramas",
        respostaC : "10 mil kilogramas",
        respostaD : "250 milhões de kilogramas",
        certa : "a"
    },
{
        pergunta: "Qual o prédio mais alto do mundo?",
        nivel: "4",
        respostaA : "Burj Khalifa",
        respostaB : "Shangai Tower",
        respostaC : "Taipei 101",
        respostaD : "China Zun",
        certa : "a"
    },
{
        pergunta: "Quantas moléculas de água, aproximadamente, há numa gota?",
        nivel: "4",
        respostaA : "2 sextilhões",
        respostaB : "4 trilhões ",
        respostaC : "100 bilhões",
        respostaD : "300 decilhões",
        certa : "a"
    },
{
        pergunta: "Qual a fala clássica do Pernalonga?",
        nivel: "1",
        respostaA : "Olá, tudo bem?",
        respostaB : "E aí, tudo em cima?",
        respostaC : "O que que há, velhinho?",
        respostaD : "Oi, sou o Pernalonga",
        certa : "c"
    },
{
        pergunta: "Qual o nome da irmã do Cebolinha, personagem da Turma da Mônica?",
        nivel: "3",
        respostaA : "Maria Cebolinha",
        respostaB : "Jeniffer Cebolinha",
        respostaC : "Jéssica Cebolinha",
        respostaD : "Matilda Cebolinha",
        certa : "a"
    },
{
        pergunta: "Qual é o famoso prato russo muito comido no Brasil?",
        nivel: "1",
        respostaA : "Estrogonofe",
        respostaB : "Pizza",
        respostaC : "Macarrão",
        respostaD : "Pudim",
        certa : "a"
    },
{
        pergunta: "Qual o nome do cachorro do Superman?",
        nivel: "2",
        respostaA : "Krypto, O Supercão",
        respostaB : "Martin, O Super Cachorro",
        respostaC : "Klingon, O Super Próspero",
        respostaD : "Rex, O Cão",
        certa : "a"
    },
{
        pergunta: "Entre as profundidades de 3000 metros e 6000 metros está a zona conhecida como?",
        nivel: "1",
        respostaA : "Cemitério dos Peixes",
        respostaB : "Abismo Ocenânico",
        respostaC : "Zona da Escuridão",
        respostaD : "Zona Abissal",
        certa : "d"
    },
{
        pergunta: "Qual o nome do cientista que escreveu Uma Breve Histório do Tempo?",
        nivel: "2",
        respostaA : "Tony Hawk",
        respostaB : "Stephen Hawking",
        respostaC : "Stephen King",
        respostaD : "Carl Sagan",
        certa : "b"
    },
{
        pergunta: "Qual o nome do irmão gêmeo do Mario do jogo Super Mario Bros.",
        nivel: "1",
        respostaA : "Felipe",
        respostaB : "Bowser",
        respostaC : "Luigi",
        respostaD : "Wario",
        certa : "c"
    },
{
        pergunta: "Qual personagem do folclore brasileiro é uma cobra que cospe fogo?",
        nivel: "3",
        respostaA : "Boitatá",
        respostaB : "Fogo Fátuo",
        respostaC : "Curupira",
        respostaD : "Fénix",
        certa : "a"
    },
{
        pergunta: "Quem é o pai de Zeus na Mitologia Gregra?",
        nivel: "2",
        respostaA : "Hércules",
        respostaB : "Júpiter",
        respostaC : "Kronos",
        respostaD : "Mercúrio",
        certa : "c"
    },
{
        pergunta: "Em qual país o pintor Vincent Van Gogh nasceu?",
        nivel: "2",
        respostaA : "Alemanha",
        respostaB : "Holanda",
        respostaC : "Brasil",
        respostaD : "USA",
        certa : "b"
    },
{
        pergunta: "Qual o tamanho da muralha da china?",
        nivel: "3",
        respostaA : "21.196 Km",
        respostaB : "12.560 Km",
        respostaC : "5.845 Km",
        respostaD : "987 Km",
        certa : "a"
    },
{
        pergunta: "Quantas moléculas de água, aproximadamente, há numa gota?",
        nivel: "4",
        respostaA : "2 sextilhões",
        respostaB : "4 trilhões ",
        respostaC : "100 bilhões",
        respostaD : "300 decilhões",
        certa : "a"
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
let imagem = document.getElementById('game-over-imagem');
let mensagem = document.getElementById('mensagem');
let conteudoQuiz = document.getElementById('quiz-conteudo');
let popUp = document.getElementById('game-over');
let reais = document.getElementsByClassName('reais');
let perdeTudo = document.getElementById('perde-tudo');

let pontuacao = 0;
let ultimaPergunta = 16;
let perguntaAtual = 0;
let contadorDePulos = 0;
let premioTotal = 0;
let nivelAtual = 1;


function verificaNivel(){
    if (0 <= pontuacao && pontuacao <= 4) {
        nivelAtual = 1;
    }
    else if(5 <= pontuacao && pontuacao <= 9){
        nivelAtual = 2;
    }
    else if (10 <= pontuacao && pontuacao <= 14) {
        nivelAtual = 3;
    }
    else{
        nivelAtual = 4;
    }
}

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function achaPergunta(){
    verificaNivel();
    contador = 0;
    while(contador<10000){
        var indexDaPergunta = randomInt(0, perguntas.length);
        var perguntaAleatoria = perguntas[indexDaPergunta];
        if (perguntaAleatoria.nivel == nivelAtual){
            return [perguntaAleatoria, indexDaPergunta];
        }
        contador++;
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

//Printa a pergunta atual na tela.
function printaPergunta (){
    var tuplePerguntaIndex = achaPergunta();
    var indexDaPergunta = tuplePerguntaIndex[1];
    perguntas.splice(indexDaPergunta, 1);
    perguntaAtual = tuplePerguntaIndex[0];

    printaPontos();

    pergunta.innerHTML = "<p>" + perguntaAtual.pergunta + "</p>";
    respostaA.innerHTML = "<p>" + perguntaAtual.respostaA + "</p>";
    respostaB.innerHTML = "<p>" + perguntaAtual.respostaB + "</p>";
    respostaC.innerHTML = "<p>" + perguntaAtual.respostaC + "</p>";
    respostaD.innerHTML = "<p>" + perguntaAtual.respostaD + "</p>";
}


//Verifica as respostas.
function verificaResposta(opcaoEscolhida){
    if(pontuacao < ultimaPergunta-1){
        //caso em que a pessoa acertou uma resposta comum.
        if(perguntaAtual.certa == opcaoEscolhida){
            pontuacao++;
            premioTotal = premios[pontuacao];
            acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
            document.getElementById(opcaoEscolhida).classList.add('respostaCerta');
            setTimeout(() => {
            document.getElementById(opcaoEscolhida).classList.remove('respostaCerta');
            }, 300);
            setTimeout(() => {
                printaPergunta();
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
        if(perguntaAtual.certa == opcaoEscolhida){
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
    printaPergunta();
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
    if(contadorDePulos<1 && pontuacao < ultimaPergunta-1){
        acertos.innerHTML = "<p> Você acertou " + pontuacao + " respostas!</p>";
        premio.innerHTML = "<p> Você acumulou " + premioTotal + " R$!</p>";
        contadorDePulos++;
        printaPergunta();
    }
}

function gameOver(opcaoEscolhida){

    conteudoQuiz.classList.add('esconder');
    popUp.classList.add('slide-up');

    if(perguntaAtual.certa == opcaoEscolhida){
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