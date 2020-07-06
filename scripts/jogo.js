let premios = [0, 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000];

let pontuacao = 0;
let ultimaPergunta = 16;
let perguntaAtual = 0;
let contadorDePulos = 0;
let premioTotal = 0;
let nivelAtual = 1;
let perguntasFacil = [];
let perguntasMedio = [];
let perguntasDificl = [];
let perguntasFinal = [];

///////////////////   Parte lógica do jogo   //////////////////////////////


//Separa as perguntas por nível de dificuldade em 4 arrays.
function assignPerguntas(){
    perguntasFacil = []
    perguntasMedio = []
    perguntasDificl = []
    perguntasFinal = []

    for (let index = 0; index < perguntas.length; index++) {
        element = perguntas[index];
        if( element.nivel == 1){
            perguntasFacil.push(element);
        }
        else if(element.nivel == 2){
            perguntasMedio.push(element);
        }
        else if(element.nivel == 3){
            perguntasDificl.push(element);
        } 
        else if(element.nivel == 4){
            perguntasFinal.push(element);
        }
        else{
            console.log("Esse elemento deu um erro");
        }
    }
}

//Gera um número inteiro.
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

//Escolhe uma pergunta aleatória da lista que for dada como parâmetro.
function achaPergunta(listaDePerguntas){
    var indexDaPergunta = randomInt(0, listaDePerguntas.length);
    var perguntaAleatoria = listaDePerguntas[indexDaPergunta];
    return [perguntaAleatoria, indexDaPergunta];
}

//Retorna uma pergunta que seja do nosso nível atual e a retira da lista
//para que não tenham repetições.
function verificaNivel(){
    if (0 <= pontuacao && pontuacao <= 4) {
        var tuple = achaPergunta(perguntasFacil);
        perguntasFacil.splice(tuple[1], 1);
        return tuple[0];
    }
    else if(5 <= pontuacao && pontuacao <= 9){
        var tuple = achaPergunta(perguntasMedio);
        perguntasMedio.splice(tuple[1], 1);
        return tuple[0];
    }
    else if (10 <= pontuacao && pontuacao <= 14) {
        var tuple = achaPergunta(perguntasDificl);
        perguntasDificl.splice(tuple[1], 1);
        return tuple[0];
    }
    else{
        var tuple = achaPergunta(perguntasFinal);
        perguntasFinal.splice(tuple[1], 1);
        return tuple[0];
    }
}


//Verifica as respostas.
function verificaResposta(opcaoEscolhida){
    if(pontuacao < ultimaPergunta-1){
        //caso em que a pessoa acertou uma resposta comum.
        if(perguntaAtual.certa == opcaoEscolhida){
            pontuacao++;
            premioTotal = premios[pontuacao];
            printaCor(opcaoEscolhida);
            setTimeout(() => {
                printaPontos();
            }, 300); 
            setTimeout(() => {
                printaPergunta();
            }, 300);
        }
        //caso em que a pessoa errou uma resposta comum.
        else{
            premioTotal = premios[pontuacao]/2;
            printaCor(opcaoEscolhida);
            printaGameOver(opcaoEscolhida);
        }
    }
    else if (pontuacao == ultimaPergunta-1) {
        
        //caso a pessoa tenha acertado a ultima pergunta.
        if(perguntaAtual.certa == opcaoEscolhida){
            pontuacao++;
            premioTotal = premios[pontuacao];
            printaCor(opcaoEscolhida);
            printaGameOver(opcaoEscolhida);
        }

        //caso a pessoa tenha errado a ultima pergunta.
        else{
            premioTotal = 0;
            printaCor(opcaoEscolhida);
            printaGameOver(opcaoEscolhida);
        }
    }
}

//Inicia o jogo.
function jogo(){
    assignPerguntas();
    printaPergunta();
    printaPontos();
}

//Inicia o jogo novamente.
function jogarNovamente(){
    conteudoQuiz.classList.remove('esconder');
    popUp.classList.remove('slide-up');
    contadorDePulos = 0;
    perguntaAtual = 0;
    pontuacao = 0;
    premioTotal = 0;
    jogo();
}

//Pula uma pergunta, sendo que essa pergunta é considerada um acerto.
function pularPergunta(){
    if(contadorDePulos<3 && pontuacao < ultimaPergunta-1){
        contadorDePulos++;
        printaPergunta();
    }
}

jogo();