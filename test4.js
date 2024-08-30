const questions = [
  {
    question: "I _____ the Star Wars films.",
    answers: [
      { text: "have ever seen", correct: false },
      { text: "have never seen", correct: true },
      { text: "have never saw", correct: false },
      { text: "had never saw", correct: false },
    ],
  },
  {
    question: "They _____ for Google _____ 2004.",
    answers: [
      { text: "worked / for", correct: false },
      { text: "'ve worked / since", correct: true },
      { text: "'re working / since", correct: false },
      { text: "were working / since", correct: false },
    ],
  },
  {
    question: " ____ Neil _____ that he didn’t get the job?",
    answers: [
      { text: "should", correct: false },
      { text: "must", correct: false },
      { text: "don't have to", correct: true },
      { text: "need", correct: false },
    ],
  },
  {
    question:
      "If you _____ that expensive car, you ____ enough money to go on holiday.",
    answers: [
      { text: "buy / won't have", correct: true },
      { text: "bought / don't have", correct: false },
      { text: "don't buy / won't have", correct: false },
      { text: "will buy / had not", correct: false },
    ],
  },
  {
    question: "What ____ if you ____a mobile phone?",
    answers: [
      { text: "will you do / haven't", correct: false },
      { text: "would you did / had", correct: false },
      { text: "would you do / have", correct: false },
      { text: "would you do / didn't have", correct: true },
    ],
  },
  {
    question:
      "Alison has worked for a month without a day off — she ________be exhausted.",
    answers: [
      { text: "must", correct: true },
      { text: "might", correct: false },
      { text: "can't", correct: false },
      { text: "more", correct: false },
    ],
  },
  {
    question:
      "I know he speaks French, German and Italian so he ________ be Swiss.",
    answers: [
      { text: "should", correct: false },
      { text: "can't", correct: false },
      { text: "could", correct: true },
      { text: "would", correct: false },
    ],
  },
  {
    question:
      "Hundreds of trees were blown over in the night so the wind ______ have been very strong.",
    answers: [
      { text: "can't", correct: false },
      { text: "must", correct: true },
      { text: "could", correct: false },
      { text: "might", correct: false },
    ],
  },
  {
    question: "I’m not very sociable. ______ .",
    answers: [
      { text: "I don't", correct: false },
      { text: "So am I", correct: false },
      { text: "Neither I am", correct: false },
      { text: "Neither am I", correct: true },
    ],
  },
  {
    question: "Sorry I'm late. _____ for a long time?",
    answers: [
      { text: "Have you been waiting", correct: true },
      { text: "Are you waiting", correct: false },
      { text: "Have you waited", correct: false },
      { text: "Had you wait", correct: false },
    ],
  },
  {
    question: "Leo's French isn't very good. He ____it for very long.",
    answers: [
      { text: "has been learning", correct: false },
      { text: "hasn't learned", correct: false },
      { text: "hasn’t been learning", correct: true },
      { text: "hasn’t been learn", correct: false },
    ],
  },
  {
    question: "Ellen ____ that she needs to do more exercise.",
    answers: [
      { text: "has been realizing", correct: false },
      { text: "is realized", correct: false },
      { text: "has realized", correct: true },
      { text: "realize", correct: false },
    ],
  },
  {
    question: "Henry worked for the bank ____ 2001 and 2006.",
    answers: [
      { text: "while", correct: false },
      { text: "between", correct: true },
      { text: "until", correct: false },
      { text: "middle", correct: false },
    ],
  },
  {
    question: "Could you tell me where ______ ?",
    answers: [
      { text: "a library is", correct: false },
      { text: "is a library", correct: false },
      { text: "is the library", correct: false },
      { text: "the library is", correct: true },
    ],
  },
  {
    question: "Do you know ______ this train goes to Cardiff?",
    answers: [
      { text: "if", correct: true },
      { text: "does", correct: false },
      { text: "where", correct: false },
      { text: "how", correct: false },
    ],
  },
  {
    question: "It's lovely day, ______?",
    answers: [
      { text: "is it", correct: false },
      { text: "does it", correct: false },
      { text: "isn't it", correct: true },
      { text: "doesn't it", correct: false },
    ],
  },
  {
    question: "John ______ your school, wasn't he?",
    answers: [
      { text: "went to", correct: false },
      { text: "was at", correct: true },
      { text: "wasn't at", correct: false },
      { text: "was in", correct: false },
    ],
  },
  {
    question: "The interviewer asked _____ drive.",
    answers: [
      { text: "can I", correct: false },
      { text: "if I can", correct: false },
      { text: "could I ", correct: false },
      { text: "if I could", correct: true },
    ],
  },
  {
    question: "The dentist ______ to make another appointment.",
    answers: [
      { text: "told me", correct: true },
      { text: "said me", correct: false },
      { text: "told to me", correct: false },
      { text: "ask me", correct: false },
    ],
  },
  {
    question: "You’ll need to ____ an answer to this problem.",
    answers: [
      { text: "come up with", correct: true },
      { text: "run out of", correct: false },
      { text: "get on with", correct: false },
      { text: "get in with", correct: false },
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
  if (score >= 15) {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Intermediate қаноат мекунад !`;
    nextButton.innerHTML = "Такрор кардан";
    nextButton.style.display = "block";
  } else {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Intermediate қаноат намекунад !`;
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
