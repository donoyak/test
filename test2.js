const questions = [
  {
    question: " Anna and Kate ______ to the cinema last Sunday.",
    answers: [
      { text: "is going", correct: false },
      { text: "didn't go", correct: true },
      { text: "didn't went", correct: false },
      { text: "don't go", correct: false },
    ],
  },
  {
    question: "I had breakfast ________ ago.",
    answers: [
      { text: "this morning ", correct: false },
      { text: "three hours", correct: true },
      { text: "7.30 a.m.", correct: false },
      { text: "night", correct: false },
    ],
  },
  {
    question: "Where ____ the money? - Right here. (are / does / is / did)",
    answers: [
      { text: "are", correct: false },
      { text: "does", correct: false },
      { text: "is", correct: true },
      { text: "did", correct: false },
    ],
  },
  {
    question: "When _____ you last _______ tennis?",
    answers: [
      { text: "did / play", correct: true },
      { text: "do / play", correct: false },
      { text: "did / played", correct: false },
      { text: "do / playing", correct: false },
    ],
  },
  {
    question: "______ you like _______ coffee?",
    answers: [
      { text: "Do / any", correct: false },
      { text: "Do / maked", correct: false },
      { text: "are/some", correct: false },
      { text: "Would / some", correct: true },
    ],
  },
  {
    question: "There isn’t ________milk in the fridge.",
    answers: [
      { text: "much", correct: true },
      { text: "many", correct: false },
      { text: "a", correct: false },
      { text: "three", correct: false },
    ],
  },
  {
    question: "Have you got ______ brothers?",
    answers: [
      { text: "some", correct: false },
      { text: "the", correct: false },
      { text: "any", correct: true },
      { text: "a", correct: false },
    ],
  },
  {
    question: "The buildings in Venice are ________ the buildings in New York.",
    answers: [
      { text: "oldest than", correct: false },
      { text: "older than", correct: true },
      { text: "older then", correct: false },
      { text: "more older than", correct: false },
    ],
  },
  {
    question: " Vienna is _______ city in Austria.",
    answers: [
      { text: "the beautiful lest There is", correct: false },
      { text: "more beautiful than", correct: false },
      { text: "the much beautiful", correct: false },
      { text: "the most beautiful", correct: true },
    ],
  },
  {
    question:
      " This restaurant is very, very good. It's ________ restaurant in London.",
    answers: [
      { text: "the best", correct: true },
      { text: "a best", correct: false },
      { text: "the better", correct: false },
      { text: "the good", correct: false },
    ],
  },
  {
    question: " I ______ a jumper and a jacket because it's cold today.",
    answers: [
      { text: "was wearing", correct: false },
      { text: "wear", correct: false },
      { text: "'m wearing", correct: true },
      { text: "'s wearing", correct: false },
    ],
  },
  {
    question: " _____ Jim _____ today?",
    answers: [
      { text: "Was / worked", correct: false },
      { text: "Does / works", correct: false },
      { text: "Is / working", correct: true },
      { text: "Do / work", correct: false },
    ],
  },
  {
    question: "Look, it's very cloudy. It ________ .",
    answers: [
      { text: "rainy", correct: false },
      { text: "'s going to rain'", correct: true },
      { text: "raining", correct: false },
      { text: "was raining", correct: false },
    ],
  },
  {
    question: "When _____ Polly _____ with her friend in Madrid?",
    answers: [
      { text: " was / going to stay", correct: false },
      { text: "does / going to stay", correct: false },
      { text: "— / is going to stay", correct: false },
      { text: "is / going to stay", correct: true },
    ],
  },
  {
    question: "I'm going to Egypt ___________ the pyramids.",
    answers: [
      { text: "to see", correct: true },
      { text: "seeing", correct: false },
      { text: "going to see", correct: false },
      { text: "was seeing", correct: false },
    ],
  },
  {
    question: " _____ did you buy your jacket? At a shop in town.",
    answers: [
      { text: "Why", correct: false },
      { text: "How", correct: false },
      { text: "Where", correct: true },
      { text: "When", correct: false },
    ],
  },
  {
    question: "Has Nigel cooked dinner _____ ?",
    answers: [
      { text: "ever", correct: false },
      { text: "yet", correct: true },
      { text: "just", correct: false },
      { text: "already", correct: false },
    ],
  },
  {
    question: " Olivia ________ to Rome.",
    answers: [
      { text: "was", correct: false },
      { text: "hasn't never been", correct: false },
      { text: "has ever been", correct: false },
      { text: "has never been", correct: true },
    ],
  },
  {
    question: "___ you ever ___ Mexican food?",
    answers: [
      { text: "Have / eaten", correct: true },
      { text: "Have / ate", correct: false },
      { text: "Have / eat ", correct: false },
      { text: "Had / eating", correct: false },
    ],
  },
  {
    question: "Raquel and James have _____ had a baby.",
    answers: [
      { text: "just ", correct: true },
      { text: "ever", correct: false },
      { text: "yet", correct: false },
      { text: "I don't know", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Ба пеш";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  if (score > 13) {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Elementary қаноат мекунад !`;
    nextButton.innerHTML = "Такрор кардан";
    nextButton.style.display = "block";
  } else {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Elementary қаноат намекунад !`;
    nextButton.innerHTML = "Такрор кардан";
    nextButton.style.display = "block";
  }
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
