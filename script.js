// ======== PERGUNTAS ========
const questions = [
    { text: "Qual filme apresenta um palhaço assassino chamado Pennywise?", options: ["It: A Coisa", "Sexta-Feira 13", "A Hora do Pesadelo"], correct: 0 },
    { text: "Qual filme de terror clássico tem um hotel assombrado chamado Overlook?", options: ["O Iluminado", "Poltergeist", "Halloween"], correct: 0 },
    { text: "Em qual filme um assassino persegue adolescentes em sonhos?", options: ["A Hora do Pesadelo", "Scream", "Pânico"], correct: 0 },
    { text: "Qual série de filmes mostra um assassino mascarado chamado Jason?", options: ["Sexta-Feira 13", "Halloween", "Chucky"], correct: 0 },
    { text: "Qual filme apresenta a boneca assassina Annabelle?", options: ["Annabelle", "Chucky", "O Grito"], correct: 0 },
    { text: "Qual filme mostra uma fita amaldiçoada que mata em 7 dias?", options: ["O Chamado", "Atividade Paranormal", "A Casa do Medo"], correct: 0 },
    { text: "Qual filme clássico tem uma bruxa amaldiçoando uma família?", options: ["A Bruxa", "O Exorcista", "O Iluminado"], correct: 0 },
    { text: "Qual filme apresenta zumbis atacando sobreviventes em shopping?", options: ["Despertar dos Mortos", "A Noite dos Mortos-Vivos", "Extermínio"], correct: 0 },
    { text: "Qual filme apresenta Freddy Krueger matando em sonhos?", options: ["A Hora do Pesadelo", "Halloween", "Scream"], correct: 0 },
    { text: "Qual assassino usa uma luva com lâminas?", options: ["Freddy Krueger", "Jason Voorhees", "Michael Myers"], correct: 0 },
    { text: "Qual filme tem uma entidade chamada Valak, a freira demoníaca?", options: ["Invocação do Mal 2", "Annabelle 2", "O Exorcista"], correct: 0 },
    { text: "Qual filme mostra um boneco assassino chamado Chucky?", options: ["Brinquedo Assassino", "Annabelle", "Pânico"], correct: 0 },
    { text: "Em qual filme adolescentes são perseguidos por um assassino no Halloween?", options: ["Halloween", "Sexta-Feira 13", "A Hora do Pesadelo"], correct: 0 },
    { text: "Qual filme apresenta uma garota possuída e fala através de movimentos do tabuleiro Ouija?", options: ["Ouija", "Poltergeist", "O Chamado"], correct: 0 },
    { text: "Qual filme tem fantasmas que atacam uma família em sua nova casa?", options: ["Poltergeist", "A Casa do Medo", "O Iluminado"], correct: 0 },
    { text: "Em qual filme um VHS amaldiçoado mata quem assiste em 7 dias?", options: ["O Chamado", "Atividade Paranormal", "It: A Coisa"], correct: 0 },
    { text: "Qual filme mostra uma enfermeira assustadora chamada Nurse?", options: ["Doctor Sleep", "O Grito", "Insidious"], correct: 0 },
    { text: "Qual filme de terror apresenta um elevador que leva os personagens à morte?", options: ["Elevator", "À Meia-Noite Levarei sua Alma", "A Casa do Medo"], correct: 0 },
    { text: "Qual filme de terror psicológico é dirigido por Alfred Hitchcock?", options: ["Psicose", "O Iluminado", "Halloween"], correct: 0 },
    { text: "Qual filme apresenta uma boneca de porcelana chamada Brahms?", options: ["A Casa do Medo", "Brahms: O Menino II", "Annabelle"], correct: 1 },
    { text: "Qual é o nome verdadeiro do assassino de 'Halloween'?", options: ["Michael Myers", "John Carpenter", "Tommy Doyle"], correct: 0 },
    { text: "No filme 'O Iluminado', qual é o número do quarto em que Danny tem visões?", options: ["217", "237", "666"], correct: 0 },
    { text: "Qual filme de terror apresenta uma entidade chamada Samara Morgan?", options: ["O Chamado", "O Exorcista", "Poltergeist"], correct: 0 },
    { text: "Em 'Sexta-Feira 13', qual é o nome da mãe de Jason?", options: ["Pamela Voorhees", "Linda Myers", "Evelyn Krueger"], correct: 0 },
    { text: "Qual é a profissão do protagonista em 'O Grito'?", options: ["Detetive", "Médico", "Professor"], correct: 0 },
    { text: "Qual filme de terror japonês inspirou o remake americano 'The Ring'?", options: ["Ringu", "Ju-On", "Dark Water"], correct: 0 },
    { text: "Em 'Atividade Paranormal', qual é o nome do casal principal?", options: ["Katie e Micah", "Sarah e Tom", "Emily e James"], correct: 0 },
    { text: "Qual filme de terror envolve um tabuleiro Ouija que amaldiçoa adolescentes?", options: ["Ouija", "O Chamado", "Insidious"], correct: 0 },
    { text: "Em 'A Hora do Pesadelo', qual é o objeto usado por Freddy para matar em sonhos?", options: ["Luva com lâminas", "Serrote", "Faca de cozinha"], correct: 0 },
    { text: "Qual filme de terror mostra um casal preso em um elevador que leva à morte?", options: ["Elevator", "À Meia-Noite Levarei sua Alma", "A Casa do Medo"], correct: 0 },
    { text: "Qual é o verdadeiro nome da boneca Chucky em 'Brinquedo Assassino'?", options: ["Charles Lee Ray", "Michael Myers", "Billy"], correct: 0 },
    { text: "Em 'O Exorcista', qual é o nome da garota possuída?", options: ["Regan MacNeil", "Linda Blair", "Carrie White"], correct: 0 },
    { text: "Qual filme apresenta o personagem demoníaco chamado Valak?", options: ["Invocação do Mal 2", "Annabelle", "O Chamado"], correct: 0 },
    { text: "Em 'It: A Coisa', qual cidade é aterrorizada pelo palhaço Pennywise?", options: ["Derry", "Springwood", "Haddonfield"], correct: 0 },
    { text: "Qual é o objeto amaldiçoado que causa mortes em 'O Chamado'?", options: ["VHS", "Espelho", "Boneca"], correct: 0 },
    { text: "No filme 'Hereditário', quem realiza os rituais demoníacos na família?", options: ["A avó", "A mãe", "O pai"], correct: 0 },
    { text: "Qual filme apresenta o terror psicológico de um lago que aprisiona pessoas?", options: ["A Assombração do Lago", "Pânico", "O Grito"], correct: 0 },
    { text: "Em 'Insidious', qual é o nome do mundo espiritual visitado por Dalton?", options: ["O Além", "O Outro Lado", "O Reino das Sombras"], correct: 1 },
    { text: "Qual filme de terror possui uma sequência em que bonecos assustadores ganham vida?", options: ["Brinquedo Assassino", "Annabelle", "Dead Silence"], correct: 0 },
    { text: "Em 'Midsommar', qual é a cultura que realiza rituais sangrentos durante o festival?", options: ["Hårga", "Voorhees", "Derry"], correct: 0 }
];

// ======== GIFS ========
const gifs = [
    "https://media.tenor.com/HbZ2AT0wCL8AAAAM/scary-ahhh.gif",
    "https://i.pinimg.com/originals/ba/aa/a5/baaaa574ded9e0a53a8f38c0a78eb032.gif",
    "https://i.pinimg.com/originals/3c/21/d7/3c21d72608da9a68b6ff3d37dfb734fc.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyc2VmbXB4bnA0dWo4ZXpleHBic3d6M3Q0ZTI3bHp1dXhtMWo4a3dzYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HxZ3prK9hIDsc/giphy.gif",
    "https://bestanimations.com/media/scary-halloween/454245451happy-haloween-pumpkin-animation-5.gif.pagespeed.ce.jl2IDRyhfJ.gif"
];

// ======== RESULTADOS RODADA ========
const roundResults = [
    { winGif: "https://media.tenor.com/Xhn-02DnvOUAAAAM/dragging-almost-there.gif", loseGif: "https://media.tenor.com/xhiOmnHXs9cAAAAM/patrick-star.gif" }
];

// ======== VARIÁVEIS ========
let currentQuestion = 0;
let score = 0;
let round = 1;
let roundWins = 0;
let unusedQuestions = [];
let questionDeck = [];
let timerInterval = null;
const totalRounds = 3;
const roundTarget = 6;

// ======== DOM ========
const startBtn = document.getElementById("startBtn");
const startGif = document.getElementById("startGif");
const quizContainer = document.getElementById("quizContainer");
const questionText = document.getElementById("questionText");
const totalQuestionsP = document.getElementById("totalQuestions");
const optionsDiv = document.getElementById("options");
const questionGif = document.getElementById("questionGif");
const roundCounter = document.getElementById("roundCounter");
const timerContainer = document.getElementById("timerContainer");
const timerFill = document.getElementById("timerFill");
const soundStart = document.getElementById("soundStart");
const soundClick = document.getElementById("soundClick");
const soundLaugh = document.getElementById("soundLaugh");
const bgMusic = document.getElementById("bgMusic");

// ======== FUNÇÕES ========
function shuffleArray(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]];}return array;}

function createShuffledDeck(){
    if(unusedQuestions.length<10){unusedQuestions = shuffleArray([...questions]);}
    questionDeck = unusedQuestions.slice(0,10);
    unusedQuestions = unusedQuestions.slice(10);
}

function updateRoundCounter(){ roundCounter.textContent = `Rodada ${round} de ${totalRounds}`; }

function startTimer(){
    timerContainer.style.display = "block";
    let time = 0;
    timerFill.style.height = '0%';
    timerInterval = setInterval(()=>{
        time++;
        timerFill.style.height = `${(time/20)*100}%`;
        if(time>=20){
            clearInterval(timerInterval);
            currentQuestion++;
            showQuestion();
        }
    },1000);
}

function showQuestion(){
    clearInterval(timerInterval);
    if(currentQuestion>=questionDeck.length){ showRoundResult(); return; }
    const q = questionDeck[currentQuestion];
    questionText.textContent = q.text;
    totalQuestionsP.textContent = `Pergunta ${currentQuestion+1} de ${questionDeck.length}`;
    optionsDiv.innerHTML = "";
    let optionsShuffled = q.options.map((opt, idx)=>({opt, idx}));
    optionsShuffled = shuffleArray(optionsShuffled);
    optionsShuffled.forEach(item=>{
        const btn = document.createElement("button");
        btn.textContent = item.opt;
        btn.className = "btn";
        btn.addEventListener("click", ()=>{
            soundClick.play();
            checkAnswer(item.idx);
        });
        optionsDiv.appendChild(btn);
    });
    questionGif.src = gifs[currentQuestion%gifs.length];
    startTimer();
}

function checkAnswer(selected){
    clearInterval(timerInterval);
    if(selected===questionDeck[currentQuestion].correct) score++;
    currentQuestion++;
    showQuestion();
}

function showRoundResult(){
    clearInterval(timerInterval);
    timerContainer.style.display = "none";
    optionsDiv.innerHTML = "";
    soundLaugh.play();
    const roundWon = score >= roundTarget;
    if(roundWon) roundWins++;

    const resultMsg = `Rodada ${round} concluída! Acertos: ${score} / Erros: ${questionDeck.length - score} <br>Você ${roundWon ? 'ganhou' : 'perdeu'} esta rodada!`;
    questionText.innerHTML = resultMsg;
    totalQuestionsP.textContent = "";
    questionGif.src = roundWon ? roundResults[0].winGif : roundResults[0].loseGif;

    const nextBtn = document.createElement("button");
    nextBtn.className = "btn";
    if(round===totalRounds){
        nextBtn.textContent = "Ver Resultado";
        nextBtn.addEventListener("click", showGameResult);
    } else {
        nextBtn.textContent = "Próxima Rodada";
        nextBtn.addEventListener("click", ()=>{
            round++;
            currentQuestion=0; score=0;
            createShuffledDeck(); updateRoundCounter(); showQuestion();
        });
    }
    optionsDiv.appendChild(nextBtn);

    const quitBtn = document.createElement("button");
    quitBtn.textContent = "Sou um bebê chorão, desisto";
    quitBtn.className = "btn";
    quitBtn.addEventListener("click", showGameResult);
    optionsDiv.appendChild(quitBtn);
}

function showGameResult(){
    optionsDiv.innerHTML = "";
    roundCounter.textContent = "";
    questionGif.src = "https://i.makeagif.com/media/1-12-2016/KM8sKE.gif";
    questionText.innerHTML = `Fim do jogo! Você venceu ${roundWins} de ${totalRounds} rodadas.`;
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Jogar Novamente";
    restartBtn.className = "btn";
    restartBtn.addEventListener("click", restartGame);
    optionsDiv.appendChild(restartBtn);
}

function restartGame(){
    round = 1; roundWins=0; currentQuestion=0; score=0;
    optionsDiv.innerHTML=""; questionText.textContent=""; questionGif.src="";
    unusedQuestions = shuffleArray([...questions]);
    createShuffledDeck(); updateRoundCounter(); showQuestion();
}

// ======== INÍCIO ========
startBtn.addEventListener("click", ()=>{
    soundStart.play();
    bgMusic.volume = 1.0;
    bgMusic.play().catch(()=>{console.log("Erro ao tocar a música de fundo.");});
    startBtn.style.display="none"; startGif.style.display="none";
    quizContainer.style.display="flex";
    unusedQuestions = shuffleArray([...questions]);
    createShuffledDeck(); updateRoundCounter(); showQuestion();
});
