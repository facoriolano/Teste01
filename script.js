/**
 * Script do Simulado Estilo Duolingo
 */

// Banco de questões de fallback incorporado (60 questões)
const fallbackQuestions = [
  {
    "id": 1,
    "question": "Qual é o maior planeta do nosso sistema solar?",
    "options": [
      "Terra",
      "Marte",
      "Júpiter",
      "Saturno"
    ],
    "correctAnswer": "Júpiter"
  },
  {
    "id": 2,
    "question": "Quem pintou a Mona Lisa?",
    "options": [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo"
    ],
    "correctAnswer": "Leonardo da Vinci"
  },
  {
    "id": 3,
    "question": "Qual é a fórmula química da água?",
    "options": [
      "CO2",
      "H2O",
      "O2",
      "NaCl"
    ],
    "correctAnswer": "H2O"
  },
  {
    "id": 4,
    "question": "Qual é o país mais populoso do mundo atualmente?",
    "options": [
      "China",
      "Índia",
      "Estados Unidos",
      "Indonésia"
    ],
    "correctAnswer": "Índia"
  },
  {
    "id": 5,
    "question": "Em que ano o homem pisou na Lua pela primeira vez?",
    "options": [
      "1965",
      "1969",
      "1972",
      "1975"
    ],
    "correctAnswer": "1969"
  },
  {
    "id": 6,
    "question": "Qual é o rio mais longo do mundo?",
    "options": [
      "Rio Nilo",
      "Rio Amazonas",
      "Rio Mississippi",
      "Rio Yangtze"
    ],
    "correctAnswer": "Rio Amazonas"
  },
  {
    "id": 7,
    "question": "Qual elemento químico tem o símbolo 'O'?",
    "options": [
      "Ouro",
      "Oxigênio",
      "Ozônio",
      "Osmio"
    ],
    "correctAnswer": "Oxigênio"
  },
  {
    "id": 8,
    "question": "Quem escreveu o clássico literário 'Dom Casmurro'?",
    "options": [
      "Machado de Assis",
      "José de Alencar",
      "Monteiro Lobato",
      "Clarice Lispector"
    ],
    "correctAnswer": "Machado de Assis"
  },
  {
    "id": 9,
    "question": "Qual é a capital do Japão?",
    "options": [
      "Seul",
      "Pequim",
      "Quioto",
      "Tóquio"
    ],
    "correctAnswer": "Tóquio"
  },
  {
    "id": 10,
    "question": "Quantos ossos tem um corpo humano adulto médio?",
    "options": [
      "106",
      "156",
      "206",
      "256"
    ],
    "correctAnswer": "206"
  },
  {
    "id": 11,
    "question": "Qual é a velocidade da luz aproximadamente?",
    "options": [
      "150.000 km/s",
      "300.000 km/s",
      "450.000 km/s",
      "600.000 km/s"
    ],
    "correctAnswer": "300.000 km/s"
  },
  {
    "id": 12,
    "question": "Qual país venceu a Copa do Mundo da FIFA em 2022?",
    "options": [
      "Brasil",
      "França",
      "Argentina",
      "Croácia"
    ],
    "correctAnswer": "Argentina"
  },
  {
    "id": 13,
    "question": "Qual é o metal cujo símbolo químico é Au?",
    "options": [
      "Prata",
      "Cobre",
      "Alumínio",
      "Ouro"
    ],
    "correctAnswer": "Ouro"
  },
  {
    "id": 14,
    "question": "Qual o menor país do mundo?",
    "options": [
      "Mônaco",
      "Vaticano",
      "San Marino",
      "Liechtenstein"
    ],
    "correctAnswer": "Vaticano"
  },
  {
    "id": 15,
    "question": "Quem é conhecido como o 'Pai da Aviação' no Brasil?",
    "options": [
      "Santos Dumont",
      "Irmãos Wright",
      "Rui Barbosa",
      "Machado de Assis"
    ],
    "correctAnswer": "Santos Dumont"
  },
  {
    "id": 16,
    "question": "Qual é a capital da Austrália?",
    "options": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Camberra"
    ],
    "correctAnswer": "Camberra"
  },
  {
    "id": 17,
    "question": "Quantos dentes tem um adulto humano saudável (excluindo os sisos)?",
    "options": [
      "24",
      "28",
      "32",
      "36"
    ],
    "correctAnswer": "28"
  },
  {
    "id": 18,
    "question": "Qual é o principal gás que compõe a atmosfera da Terra?",
    "options": [
      "Oxigênio",
      "Dióxido de Carbono",
      "Nitrogênio",
      "Argônio"
    ],
    "correctAnswer": "Nitrogênio"
  },
  {
    "id": 19,
    "question": "Quem é o autor da teoria da relatividade?",
    "options": [
      "Isaac Newton",
      "Albert Einstein",
      "Galileu Galilei",
      "Stephen Hawking"
    ],
    "correctAnswer": "Albert Einstein"
  },
  {
    "id": 20,
    "question": "Qual é o maior oceano do planeta?",
    "options": [
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Ártico",
      "Oceano Pacífico"
    ],
    "correctAnswer": "Oceano Pacífico"
  },
  {
    "id": 21,
    "question": "Qual é o animal terrestre mais rápido do mundo?",
    "options": [
      "Leopardo",
      "Guepardo",
      "Antilocapra",
      "Leão"
    ],
    "correctAnswer": "Guepardo"
  },
  {
    "id": 22,
    "question": "Qual é o continente mais frio do planeta?",
    "options": [
      "Ásia",
      "Europa",
      "América do Norte",
      "Antártida"
    ],
    "correctAnswer": "Antártida"
  },
  {
    "id": 23,
    "question": "De onde é originária a pizza?",
    "options": [
      "Itália",
      "França",
      "Grécia",
      "Egito"
    ],
    "correctAnswer": "Itália"
  },
  {
    "id": 24,
    "question": "Qual é a capital do Brasil?",
    "options": [
      "Rio de Janeiro",
      "São Paulo",
      "Salvador",
      "Brasília"
    ],
    "correctAnswer": "Brasília"
  },
  {
    "id": 25,
    "question": "Qual idioma tem o maior número de falantes nativos?",
    "options": [
      "Inglês",
      "Espanhol",
      "Mandarim",
      "Árabe"
    ],
    "correctAnswer": "Mandarim"
  },
  {
    "id": 26,
    "question": "Quantos anos durou a Guerra dos Cem Anos?",
    "options": [
      "100 anos",
      "99 anos",
      "116 anos",
      "125 anos"
    ],
    "correctAnswer": "116 anos"
  },
  {
    "id": 27,
    "question": "Que órgão do corpo humano é responsável por bombear o sangue?",
    "options": [
      "Cérebro",
      "Pulmão",
      "Fígado",
      "Coração"
    ],
    "correctAnswer": "Coração"
  },
  {
    "id": 28,
    "question": "Qual planeta é conhecido como o Planeta Vermelho?",
    "options": [
      "Mercúrio",
      "Vênus",
      "Marte",
      "Júpiter"
    ],
    "correctAnswer": "Marte"
  },
  {
    "id": 29,
    "question": "Em que continente fica o deserto do Saara?",
    "options": [
      "Ásia",
      "África",
      "Oceania",
      "América do Sul"
    ],
    "correctAnswer": "África"
  },
  {
    "id": 30,
    "question": "Qual foi a moeda oficial do Brasil antes do Real?",
    "options": [
      "Cruzeiro Real",
      "Cruzeiro",
      "Cruzado Novo",
      "Cruzado"
    ],
    "correctAnswer": "Cruzeiro Real"
  },
  {
    "id": 31,
    "question": "Qual é o maior animal do mundo?",
    "options": [
      "Elefante Africano",
      "Baleia Azul",
      "Tubarão Baleia",
      "Lula Gigante"
    ],
    "correctAnswer": "Baleia Azul"
  },
  {
    "id": 32,
    "question": "Quem pintou o famoso teto da Capela Sistina?",
    "options": [
      "Leonardo da Vinci",
      "Michelangelo",
      "Rafael Sanzio",
      "Donatello"
    ],
    "correctAnswer": "Michelangelo"
  },
  {
    "id": 33,
    "question": "Qual é o país de origem da marca de carros Toyota?",
    "options": [
      "Coreia do Sul",
      "China",
      "Estados Unidos",
      "Japão"
    ],
    "correctAnswer": "Japão"
  },
  {
    "id": 34,
    "question": "Quantos lados tem um heptágono?",
    "options": [
      "5 lados",
      "6 lados",
      "7 lados",
      "8 lados"
    ],
    "correctAnswer": "7 lados"
  },
  {
    "id": 35,
    "question": "Qual é a montanha mais alta do mundo?",
    "options": [
      "K2",
      "Monte Everest",
      "Kilimanjaro",
      "Monte Fuji"
    ],
    "correctAnswer": "Monte Everest"
  },
  {
    "id": 36,
    "question": "Quem descobriu o Brasil em 1500?",
    "options": [
      "Vasco da Gama",
      "Cristóvão Colombo",
      "Pedro Álvares Cabral",
      "Américo Vespúcio"
    ],
    "correctAnswer": "Pedro Álvares Cabral"
  },
  {
    "id": 37,
    "question": "Qual é a unidade de medida da corrente elétrica?",
    "options": [
      "Volt",
      "Watt",
      "Ohm",
      "Ampere"
    ],
    "correctAnswer": "Ampere"
  },
  {
    "id": 38,
    "question": "Qual país abriga a maior floresta tropical do mundo?",
    "options": [
      "Congo",
      "Indonésia",
      "Colômbia",
      "Brasil"
    ],
    "correctAnswer": "Brasil"
  },
  {
    "id": 39,
    "question": "Qual filósofo grego foi o mentor de Alexandre, o Grande?",
    "options": [
      "Sócrates",
      "Platão",
      "Aristóteles",
      "Pitágoras"
    ],
    "correctAnswer": "Aristóteles"
  },
  {
    "id": 40,
    "question": "Qual é o maior estado brasileiro em extensão territorial?",
    "options": [
      "Minas Gerais",
      "Bahia",
      "Amazonas",
      "Pará"
    ],
    "correctAnswer": "Amazonas"
  },
  {
    "id": 41,
    "question": "Em que país surgiu a democracia?",
    "options": [
      "Egito",
      "Roma Antiga",
      "Grécia Antiga",
      "Mesopotâmia"
    ],
    "correctAnswer": "Grécia Antiga"
  },
  {
    "id": 42,
    "question": "Quantos segundos tem uma hora?",
    "options": [
      "360 segundos",
      "1.200 segundos",
      "3.600 segundos",
      "6.000 segundos"
    ],
    "correctAnswer": "3.600 segundos"
  },
  {
    "id": 43,
    "question": "Que vitamina é produzida quando a pele humana é exposta à luz solar?",
    "options": [
      "Vitamina A",
      "Vitamina B12",
      "Vitamina C",
      "Vitamina D"
    ],
    "correctAnswer": "Vitamina D"
  },
  {
    "id": 44,
    "question": "Qual é o menor osso do corpo humano?",
    "options": [
      "Estribo",
      "Martelo",
      "Bigorna",
      "Patela"
    ],
    "correctAnswer": "Estribo"
  },
  {
    "id": 45,
    "question": "Qual oceano banha a costa leste do Brasil?",
    "options": [
      "Oceano Índico",
      "Oceano Pacífico",
      "Oceano Glacial Ártico",
      "Oceano Atlântico"
    ],
    "correctAnswer": "Oceano Atlântico"
  },
  {
    "id": 46,
    "question": "Qual é a capital da França?",
    "options": [
      "Londres",
      "Berlim",
      "Paris",
      "Roma"
    ],
    "correctAnswer": "Paris"
  },
  {
    "id": 47,
    "question": "De quem é a famosa frase 'Penso, logo existo'?",
    "options": [
      "Sartre",
      "René Descartes",
      "Kant",
      "Nietzsche"
    ],
    "correctAnswer": "René Descartes"
  },
  {
    "id": 48,
    "question": "Qual o principal componente da areia comum?",
    "options": [
      "Sílica (Dióxido de Silício)",
      "Carbonato de Cálcio",
      "Óxido de Ferro",
      "Mica"
    ],
    "correctAnswer": "Sílica (Dióxido de Silício)"
  },
  {
    "id": 49,
    "question": "Quem pintou a célebre tela 'Guernica'?",
    "options": [
      "Salvador Dalí",
      "Pablo Picasso",
      "Diego Rivera",
      "Henri Matisse"
    ],
    "correctAnswer": "Pablo Picasso"
  },
  {
    "id": 50,
    "question": "Qual é a cor resultante da mistura de azul e amarelo?",
    "options": [
      "Verde",
      "Roxo",
      "Laranja",
      "Cinza"
    ],
    "correctAnswer": "Verde"
  },
  {
    "id": 51,
    "question": "Quantas cores tem o arco-íris?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": "7"
  },
  {
    "id": 52,
    "question": "Qual escritor brasileiro escreveu o poema 'Canção do Exílio'?",
    "options": [
      "Gonçalves Dias",
      "Castro Alves",
      "Casimiro de Abreu",
      "Alvares de Azevedo"
    ],
    "correctAnswer": "Gonçalves Dias"
  },
  {
    "id": 53,
    "question": "Qual é a capital da Itália?",
    "options": [
      "Milão",
      "Veneza",
      "Florença",
      "Roma"
    ],
    "correctAnswer": "Roma"
  },
  {
    "id": 54,
    "question": "Que elemento é essencial para a respiração celular humana?",
    "options": [
      "Dióxido de carbono",
      "Oxigênio",
      "Nitrogênio",
      "Hélio"
    ],
    "correctAnswer": "Oxigênio"
  },
  {
    "id": 55,
    "question": "Em qual continente se localiza o Egito?",
    "options": [
      "Ásia",
      "Europa",
      "África",
      "América"
    ],
    "correctAnswer": "África"
  },
  {
    "id": 56,
    "question": "Quem formulou as Três Leis do Movimento na física clássica?",
    "options": [
      "Albert Einstein",
      "Isaac Newton",
      "Galileu Galilei",
      "Nikola Tesla"
    ],
    "correctAnswer": "Isaac Newton"
  },
  {
    "id": 57,
    "question": "Qual é a principal matéria-prima do chocolate?",
    "options": [
      "Cacau",
      "Café",
      "Trigo",
      "Cana-de-açúcar"
    ],
    "correctAnswer": "Cacau"
  },
  {
    "id": 58,
    "question": "Qual planeta é o mais próximo do Sol?",
    "options": [
      "Vênus",
      "Terra",
      "Mercúrio",
      "Marte"
    ],
    "correctAnswer": "Mercúrio"
  },
  {
    "id": 59,
    "question": "Qual mamífero voador usa a ecolocalização?",
    "options": [
      "Águia",
      "Morcego",
      "Esquilo-voador",
      "Coruja"
    ],
    "correctAnswer": "Morcego"
  },
  {
    "id": 60,
    "question": "Quantas cordas tem um violão tradicional?",
    "options": [
      "4 cordas",
      "5 cordas",
      "6 cordas",
      "12 cordas"
    ],
    "correctAnswer": "6 cordas"
  }
];

// Estado da Aplicação
let questions = [...fallbackQuestions];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let mistakesCount = 0;
let scoreCount = 0;
let totalVidas = 5;
let vidas = 5;
let mode = 'exam'; // 'exam' ou 'practice'
let startTime = null;
let timerInterval = null;
let answersHistory = []; // { question: string, options: string[], selected: string, correct: string, isCorrect: boolean }

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const gameoverScreen = document.getElementById('gameover-screen');
const successScreen = document.getElementById('success-screen');
const reviewScreen = document.getElementById('review-screen');

const btnExam = document.getElementById('btn-exam');
const btnPractice = document.getElementById('btn-practice');
const btnQuit = document.getElementById('btn-quit');
const btnCheck = document.getElementById('btn-check');
const btnAction = document.getElementById('btn-action');
const btnRetry = document.getElementById('btn-retry');
const btnFinish = document.getElementById('btn-finish');
const btnShowReview = document.getElementById('btn-show-review');
const btnCloseReview = document.getElementById('btn-close-review');

const progressBar = document.getElementById('progress-bar');
const livesContainer = document.getElementById('lives-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const feedbackDrawer = document.getElementById('feedback-drawer');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');

const statAccuracy = document.getElementById('stat-accuracy');
const statScore = document.getElementById('stat-score');
const statTotalQuestions = document.getElementById('stat-total-questions');
const statMistakes = document.getElementById('stat-mistakes');
const statTime = document.getElementById('stat-time');
const reviewList = document.getElementById('review-list');
const questionCountBadge = document.getElementById('question-count-badge');
const dataSourceBadge = document.getElementById('data-source-badge');

// Web Audio API Synth para efeitos sonoros
class SoundEffects {
  static ctx = null;
  static getContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }
  static playClick() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch(e) {}
  }
  static playSuccess() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.15, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.12);
      });
    } catch(e) {}
  }
  static playError() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(174.61, now);
      osc.frequency.exponentialRampToValueAtTime(138.59, now + 0.35);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch(e) {}
  }
  static playFanfare() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const notes = [523.25, 523.25, 523.25, 523.25, 659.25, 587.33, 659.25, 783.99, 1046.50];
      const times = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05, 1.3];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + times[i]);
        gain.gain.setValueAtTime(0, now + times[i]);
        gain.gain.linearRampToValueAtTime(0.12, now + times[i] + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + times[i] + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + times[i]);
        osc.stop(now + times[i] + 0.3);
      });
    } catch(e) {}
  }
}

// RFC 4180 CSV parser
function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let currentVal = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      row.push(currentVal.trim());
      if (row.length > 0 && row.some(cell => cell !== '')) {
        lines.push(row);
      }
      row = [];
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  if (currentVal || row.length > 0) {
    row.push(currentVal.trim());
    if (row.some(cell => cell !== '')) {
      lines.push(row);
    }
  }
  return lines;
}

// Map CSV columns dynamically to Question objects
function mapCSVToQuestions(csvRows) {
  if (csvRows.length === 0) return [];
  let startRow = 0;
  let qCol = 0;
  let optCols = [1, 2, 3, 4];
  let correctCol = 5;

  const firstRow = csvRows[0].map(cell => cell.toLowerCase().trim());
  const hasHeader = firstRow.some(cell => 
    cell.includes('perg') || cell.includes('enun') || cell.includes('quest') || cell.includes('text') || cell.includes('corret') || cell.includes('gabarito') || cell.includes('resp')
  );

  if (hasHeader) {
    startRow = 1;
    const foundQ = firstRow.findIndex(cell => cell.includes('perg') || cell.includes('enun') || cell.includes('quest') || cell.includes('text'));
    if (foundQ !== -1) qCol = foundQ;

    const foundA = firstRow.findIndex(cell => cell === 'a' || cell.includes('opcao_a') || cell.includes('opt_a') || cell.includes('alternativa_a') || cell.includes('opcao a'));
    const foundB = firstRow.findIndex(cell => cell === 'b' || cell.includes('opcao_b') || cell.includes('opt_b') || cell.includes('alternativa_b') || cell.includes('opcao b'));
    const foundC = firstRow.findIndex(cell => cell === 'c' || cell.includes('opcao_c') || cell.includes('opt_c') || cell.includes('alternativa_c') || cell.includes('opcao c'));
    const foundD = firstRow.findIndex(cell => cell === 'd' || cell.includes('opcao_d') || cell.includes('opt_d') || cell.includes('alternativa_d') || cell.includes('opcao d'));

    if (foundA !== -1 && foundB !== -1 && foundC !== -1 && foundD !== -1) {
      optCols = [foundA, foundB, foundC, foundD];
    } else {
      const optIndices = [];
      firstRow.forEach((cell, idx) => {
        if (idx !== qCol && !cell.includes('corret') && !cell.includes('gabarito') && !cell.includes('resp')) {
          optIndices.push(idx);
        }
      });
      if (optIndices.length >= 4) {
        optCols = optIndices.slice(0, 4);
      }
    }

    const foundCorrect = firstRow.findIndex(cell => cell.includes('corret') || cell.includes('gabarito') || cell.includes('resp') || cell.includes('correct'));
    if (foundCorrect !== -1) correctCol = foundCorrect;
  }

  const results = [];
  for (let i = startRow; i < csvRows.length; i++) {
    const row = csvRows[i];
    if (row.length <= Math.max(qCol, correctCol, ...optCols)) continue;

    const questionText = row[qCol];
    if (!questionText) continue;

    const options = optCols.map(idx => row[idx] || '');
    const correctVal = row[correctCol] || '';

    results.push({
      id: i + (hasHeader ? 0 : 1),
      question: questionText,
      options,
      correctAnswer: correctVal
    });
  }
  return results;
}

// Carregar Banco de Questões do Google Sheets
async function loadQuestionsFromSheet() {
  // URL ofuscada em Base64 para proteção de acesso dos alunos
  const sheetUrl = atob("aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMVNZNFVMdWFRbnZnRWZHcWFIZHVaXzFCd2p0RnBxWExsMDR3T1VONEJzc1kvZ3Zpei90cT90cXg9b3V0OmNzdg==");
  try {
    const response = await fetch(sheetUrl);
    if (!response.ok) throw new Error('Falha no fetch');
    const csvText = await response.text();
    if (!csvText || csvText.trim().length === 0) throw new Error('Planilha retornou vazia');
    const parsed = parseCSV(csvText);
    const mapped = mapCSVToQuestions(parsed);
    if (mapped.length > 0) {
      questions = mapped;
      dataSourceBadge.textContent = 'Planilha Google';
      dataSourceBadge.className = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800';
    } else {
      throw new Error('Sem questões mapeadas');
    }
  } catch (e) {
    console.warn('Usando banco de questões local offline de backup:', e.message);
    questions = [...fallbackQuestions];
    dataSourceBadge.textContent = 'Banco Local (Offline)';
    dataSourceBadge.className = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800';
  }
  questionCountBadge.textContent = questions.length + ' questões';
}

// Iniciar Simulado
function startQuiz(selectedMode) {
  SoundEffects.playClick();
  mode = selectedMode;
  currentQuestionIndex = 0;
  selectedOptionIndex = null;
  mistakesCount = 0;
  scoreCount = 0;
  vidas = 5;
  answersHistory = [];
  startTime = new Date();

  welcomeScreen.classList.add('hidden');
  gameoverScreen.classList.add('hidden');
  successScreen.classList.add('hidden');
  reviewScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  renderHeader();
  renderQuestion();
}

// Renderizar Cabeçalho (Barra de progresso e Vidas)
function renderHeader() {
  const progressPercent = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = progressPercent + '%';

  livesContainer.innerHTML = '';
  if (mode === 'exam') {
    for (let i = 0; i < totalVidas; i++) {
      const heart = document.createElement('span');
      heart.textContent = '❤️';
      heart.className = 'text-xl transition-all ' + (i < vidas ? 'opacity-100 scale-100' : 'opacity-20 scale-75 grayscale');
      livesContainer.appendChild(heart);
    }
  } else {
    // Modo Treino livre
    livesContainer.innerHTML = `<span class="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">♾️ TREINO</span>`;
  }
}

// Renderizar Pergunta e Opções
function renderQuestion() {
  selectedOptionIndex = null;
  btnCheck.disabled = true;
  btnCheck.className = 'w-full py-4 px-6 bg-gray-200 text-gray-400 font-extrabold text-base rounded-2xl transition-all cursor-not-allowed text-center';
  feedbackDrawer.classList.add('translate-y-full');

  const q = questions[currentQuestionIndex];
  questionText.textContent = q.question;

  optionsContainer.innerHTML = '';
  q.options.forEach((option, idx) => {
    if (!option) return;
    const button = document.createElement('button');
    button.className = 'w-full text-left p-4 rounded-2xl border-2 border-gray-200 border-b-4 hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center gap-3 font-semibold text-[#3c3c3c] bg-white';
    
    // Distintivo de letra (A, B, C, D)
    const badge = document.createElement('span');
    badge.className = 'w-8 h-8 rounded-xl border border-gray-200 text-xs font-extrabold flex items-center justify-center text-gray-400 bg-gray-50';
    badge.textContent = String.fromCharCode(65 + idx);
    
    const textSpan = document.createElement('span');
    textSpan.className = 'flex-1 text-sm sm:text-base';
    textSpan.textContent = option;

    button.appendChild(badge);
    button.appendChild(textSpan);

    button.addEventListener('click', () => {
      SoundEffects.playClick();
      selectOption(idx);
    });

    optionsContainer.appendChild(button);
  });
}

// Selecionar Opção
function selectOption(idx) {
  selectedOptionIndex = idx;
  btnCheck.disabled = false;
  btnCheck.className = 'w-full py-4 px-6 bg-[#58cc02] text-white font-extrabold text-base rounded-2xl border-b-4 border-[#46a302] hover:brightness-105 active:border-b-0 active:translate-y-[4px] transition-all cursor-pointer text-center';

  const buttons = optionsContainer.children;
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    const badge = btn.querySelector('span');
    if (i === idx) {
      btn.className = 'w-full text-left p-4 rounded-2xl border-2 border-[#1cb0f6] border-b-4 bg-[#e5f5fd] transition-all flex items-center gap-3 font-semibold text-[#1899d6]';
      badge.className = 'w-8 h-8 rounded-xl border border-[#1cb0f6] text-xs font-extrabold flex items-center justify-center text-[#1cb0f6] bg-[#1cb0f61a]';
    } else {
      btn.className = 'w-full text-left p-4 rounded-2xl border-2 border-gray-200 border-b-4 hover:bg-gray-50 bg-white transition-all flex items-center gap-3 font-semibold text-[#3c3c3c]';
      badge.className = 'w-8 h-8 rounded-xl border border-gray-200 text-xs font-extrabold flex items-center justify-center text-gray-400 bg-gray-50';
    }
  }
}

// Resolver se a resposta está correta
function isAnswerCorrect(q, selectedIndex) {
  const selectedText = q.options[selectedIndex]?.toLowerCase().trim();
  const correctVal = q.correctAnswer.toLowerCase().trim();

  // Caso 1: Gabarito é a letra "A", "B", "C", "D"
  if (['a', 'b', 'c', 'd'].includes(correctVal)) {
    const letterIdx = correctVal.charCodeAt(0) - 97; // 'a' = 0
    return selectedIndex === letterIdx;
  }
  
  // Caso 2: Gabarito é o índice em si "0", "1", "2", "3"
  if (['0', '1', '2', '3'].includes(correctVal)) {
    return selectedIndex === parseInt(correctVal);
  }

  // Caso 3: Gabarito é o texto exato
  return selectedText === correctVal;
}

// Obter representação textual do gabarito correto
function getCorrectAnswerText(q) {
  const correctVal = q.correctAnswer.toLowerCase().trim();
  if (['a', 'b', 'c', 'd'].includes(correctVal)) {
    const letterIdx = correctVal.charCodeAt(0) - 97;
    return q.options[letterIdx] || q.correctAnswer;
  }
  if (['0', '1', '2', '3'].includes(correctVal)) {
    return q.options[parseInt(correctVal)] || q.correctAnswer;
  }
  return q.correctAnswer;
}

// Verificar Resposta
function checkAnswer() {
  if (selectedOptionIndex === null) return;
  const q = questions[currentQuestionIndex];
  const isCorrect = isAnswerCorrect(q, selectedOptionIndex);
  const correctText = getCorrectAnswerText(q);

  answersHistory.push({
    question: q.question,
    options: q.options,
    selected: q.options[selectedOptionIndex],
    correct: correctText,
    isCorrect: isCorrect
  });

  // Mostrar Feedback Drawer
  feedbackDrawer.classList.remove('translate-y-full');
  
  if (isCorrect) {
    SoundEffects.playSuccess();
    scoreCount++;
    
    feedbackDrawer.className = 'border-t border-green-200 p-5 bg-[#eefcf2] flex flex-col gap-4 transform transition-transform duration-300 z-20 absolute bottom-0 left-0 right-0';
    feedbackIcon.className = 'w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold bg-[#58cc02]';
    feedbackIcon.textContent = '✓';
    feedbackTitle.className = 'font-black text-lg text-[#257204]';
    feedbackTitle.textContent = 'Excelente!';
    feedbackText.className = 'text-xs sm:text-sm text-[#2c7f07] mt-0.5';
    feedbackText.textContent = 'Você acertou!';
    
    btnAction.className = 'w-full py-4 px-6 bg-[#58cc02] text-white font-extrabold text-base rounded-2xl border-b-4 border-[#46a302] hover:brightness-105 active:border-b-0 active:translate-y-[4px] transition-all text-center';
  } else {
    SoundEffects.playError();
    mistakesCount++;
    
    if (mode === 'exam') {
      vidas--;
    }

    feedbackDrawer.className = 'border-t border-red-200 p-5 bg-[#fff3f3] flex flex-col gap-4 transform transition-transform duration-300 z-20 absolute bottom-0 left-0 right-0';
    feedbackIcon.className = 'w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold bg-[#ff4b4b]';
    feedbackIcon.textContent = '✕';
    feedbackTitle.className = 'font-black text-lg text-[#ff4b4b]';
    feedbackTitle.textContent = 'Resposta incorreta!';
    feedbackText.className = 'text-xs sm:text-sm text-[#ea2b2b] mt-0.5 font-semibold';
    feedbackText.textContent = `A resposta certa é: ${correctText}`;

    btnAction.className = 'w-full py-4 px-6 bg-[#ff4b4b] text-white font-extrabold text-base rounded-2xl border-b-4 border-[#ea2b2b] hover:brightness-105 active:border-b-0 active:translate-y-[4px] transition-all text-center';

    // Highlight option selected as red, correct as green
    const buttons = optionsContainer.children;
    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i];
      if (i === selectedOptionIndex) {
        btn.className = 'w-full text-left p-4 rounded-2xl border-2 border-[#ff4b4b] border-b-4 bg-[#ff4b4b1a] transition-all flex items-center gap-3 font-semibold text-[#ff4b4b]';
      }
    }
  }

  renderHeader();
}

// Avançar para a próxima ou encerrar
function handleContinue() {
  if (vidas <= 0 && mode === 'exam') {
    showGameOver();
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    showSuccess();
  } else {
    renderHeader();
    renderQuestion();
  }
}

// Exibir Tela de Fim de Jogo
function showGameOver() {
  quizScreen.classList.add('hidden');
  gameoverScreen.classList.remove('hidden');
}

// Exibir Tela de Conclusão / Sucesso
function showSuccess() {
  quizScreen.classList.add('hidden');
  successScreen.classList.remove('hidden');
  SoundEffects.playFanfare();

  // Calcular estatísticas
  const total = questions.length;
  const accuracyVal = Math.round((scoreCount / total) * 100);
  
  statAccuracy.textContent = accuracyVal + '%';
  statScore.textContent = `${scoreCount}/${total}`;
  statTotalQuestions.textContent = total;
  statMistakes.textContent = mistakesCount;

  // Calcular tempo decorrido
  const elapsedMs = new Date() - startTime;
  const mins = Math.floor(elapsedMs / 60000);
  const secs = Math.floor((elapsedMs % 60000) / 1000);
  statTime.textContent = `${mins}m ${secs}s`;

  const subtitle = document.getElementById('success-subtitle');
  if (accuracyVal >= 80) {
    subtitle.textContent = 'Incrível! Excelente resultado! 🎉';
    subtitle.className = 'text-green-500 font-bold uppercase tracking-wider text-xs mb-6';
  } else if (accuracyVal >= 50) {
    subtitle.textContent = 'Muito bem! Você foi aprovado! 👍';
    subtitle.className = 'text-blue-500 font-bold uppercase tracking-wider text-xs mb-6';
  } else {
    subtitle.textContent = 'Continue praticando para melhorar! 💪';
    subtitle.className = 'text-amber-500 font-bold uppercase tracking-wider text-xs mb-6';
  }
}

// Renderizar e Mostrar Tela de Revisão
function showReview() {
  successScreen.classList.add('hidden');
  reviewScreen.classList.remove('hidden');

  reviewList.innerHTML = '';
  answersHistory.forEach((ans, i) => {
    const card = document.createElement('div');
    card.className = 'border border-gray-200 rounded-2xl p-4 flex flex-col gap-2 bg-white shadow-sm';

    const header = document.createElement('div');
    header.className = 'flex items-center justify-between text-xs font-black uppercase tracking-wider';
    header.innerHTML = `<span class="text-gray-400">Questão ${i + 1}</span>
      <span class="${ans.isCorrect ? 'text-[#58cc02]' : 'text-[#ff4b4b]'}" style="font-weight: 900">
        ${ans.isCorrect ? '✓ Correta' : '✕ Incorreta'}
      </span>`;

    const qText = document.createElement('p');
    qText.className = 'font-bold text-sm text-[#3c3c3c] mt-1';
    qText.textContent = ans.question;

    const details = document.createElement('div');
    details.className = 'text-xs space-y-1 mt-2 p-3 bg-gray-50 rounded-xl';
    details.innerHTML = `<div><span class="font-bold text-gray-500">Sua Resposta:</span> <span class="${ans.isCorrect ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}">${ans.selected || '(Nenhuma)'}</span></div>
      ${!ans.isCorrect ? `<div><span class="font-bold text-gray-500">Gabarito Correto:</span> <span class="text-green-600 font-bold">${ans.correct}</span></div>` : ''}`;

    card.appendChild(header);
    card.appendChild(qText);
    card.appendChild(details);
    reviewList.appendChild(card);
  });
}

// Fechar tela de revisão
function closeReview() {
  reviewScreen.classList.add('hidden');
  successScreen.classList.remove('hidden');
}

// Voltar para a tela inicial
function resetToWelcome() {
  SoundEffects.playClick();
  quizScreen.classList.add('hidden');
  gameoverScreen.classList.add('hidden');
  successScreen.classList.add('hidden');
  reviewScreen.classList.add('hidden');
  welcomeScreen.classList.remove('hidden');
}

// Event Listeners
btnExam.addEventListener('click', () => startQuiz('exam'));
btnPractice.addEventListener('click', () => startQuiz('practice'));
btnCheck.addEventListener('click', checkAnswer);
btnAction.addEventListener('click', handleContinue);

btnQuit.addEventListener('click', () => {
  if (confirm('Tem certeza de que deseja sair do simulado atual? Todo seu progresso será perdido.')) {
    resetToWelcome();
  }
});

btnRetry.addEventListener('click', () => startQuiz(mode));
btnFinish.addEventListener('click', resetToWelcome);
btnShowReview.addEventListener('click', showReview);
btnCloseReview.addEventListener('click', closeReview);

// Inicializar Aplicativo
window.addEventListener('DOMContentLoaded', () => {
  loadQuestionsFromSheet();
});
