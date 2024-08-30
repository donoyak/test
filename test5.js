const questions = [
  {
    question: "You _______ worry so much, you'll make yourself ill.",
    answers: [
      { text: "must", correct: false },
      { text: "shouldn't", correct: true },
      { text: "can't", correct: false },
      { text: "couldn't", correct: false },
    ],
  },
  {
    question: "Joe ________ think of a good excuse for being late.",
    answers: [
      { text: "shouldn't", correct: false },
      { text: "couldn't", correct: true },
      { text: "mustn't", correct: false },
      { text: "could", correct: false },
    ],
  },
  {
    question: "Stella's _______ be promoted because she works hard.",
    answers: [
      { text: "allowed to", correct: false },
      { text: "must", correct: false },
      { text: "bound to", correct: true },
      { text: "manage to", correct: false },
    ],
  },
  {
    question: "My mother ________ is in Argentina this week",
    answers: [
      { text: "who travels a lot", correct: true },
      { text: "who traveled a lot", correct: false },
      { text: "who was traveling a lot", correct: false },
      { text: "who was traveled a lot", correct: false },
    ],
  },
  {
    question:
      "They’re going to stay with their cousins _________ live on a boat.",
    answers: [
      { text: "where for", correct: false },
      { text: "for", correct: false },
      { text: "who", correct: false },
      { text: "where", correct: true },
    ],
  },
  {
    question: "Leo and Rose left the cinema because the film was",
    answers: [
      { text: "boring", correct: true },
      { text: "bored", correct: false },
      { text: "much bored", correct: false },
      { text: "more bored", correct: false },
    ],
  },
  {
    question:
      "My grandmother ________ living alone so she finds the house very quiet.",
    answers: [
      { text: "didn't use to", correct: false },
      { text: "used to", correct: false },
      { text: "isn't used to", correct: true },
      { text: "wasn't used to", correct: false },
    ],
  },
  {
    question:
      "My boss really annoys me because she _________ me to work at the weekends.",
    answers: [
      { text: "would ask", correct: false },
      { text: "is always asking", correct: true },
      { text: "asked", correct: false },
      { text: "was always asked", correct: false },
    ],
  },
  {
    question:
      "Maria's got a terrible voice but she _________ at any opportunity.",
    answers: [
      { text: "could sing", correct: false },
      { text: "has sung", correct: false },
      { text: "would sing", correct: false },
      { text: "is singing", correct: true },
    ],
  },
  {
    question: "It was only in Australia for a week so he _______ seen a lot.",
    answers: [
      { text: "couldn't have", correct: true },
      { text: "shouldn't have", correct: false },
      { text: "might have", correct: false },
      { text: "might not have", correct: false },
    ],
  },
  {
    question:
      "Although it was kind, they ________ bought us a housewarming present.",
    answers: [
      { text: "mightn't have", correct: false },
      { text: "couldn't have", correct: false },
      { text: "needn't have", correct: true },
      { text: "needn't had", correct: false },
    ],
  },
  {
    question: "If I ______ a lot of money, I'd retire.",
    answers: [
      { text: "win", correct: false },
      { text: "had won", correct: false },
      { text: "has won", correct: false },
      { text: "won", correct: true },
    ],
  },
  {
    question: "Sometimes they both wish they ________ married so young.",
    answers: [
      { text: "don't get", correct: false },
      { text: "hadn't got", correct: true },
      { text: "hasn't got", correct: false },
      { text: "didn't get", correct: false },
    ],
  },
  {
    question: "Don't you wish we _______ ten years ago?",
    answers: [
      { text: "met", correct: false },
      { text: "has met", correct: false },
      { text: "would met", correct: false },
      { text: "had met", correct: true },
    ],
  },
  {
    question: "It was ________ great film that we saw it twice.",
    answers: [
      { text: "such a", correct: true },
      { text: "what the", correct: false },
      { text: "what a", correct: false },
      { text: "such the", correct: false },
    ],
  },
  {
    question:
      "Tony's daughter has his red hair but ______ of his sons look like him.",
    answers: [
      { text: "both", correct: false },
      { text: "each", correct: false },
      { text: "neither", correct: true },
      { text: "no one", correct: false },
    ],
  },
  {
    question: "Sorry, but I don't know what you are getting _____.",
    answers: [
      { text: "at", correct: false },
      { text: "over", correct: true },
      { text: "on", correct: false },
      { text: "all", correct: false },
    ],
  },
  {
    question: "Come in from the rain – you’re ________ soaking.",
    answers: [
      { text: "quite", correct: false },
      { text: "very", correct: false },
      { text: "like", correct: false },
      { text: "absolutely", correct: true },
    ],
  },
  {
    question:
      "Jorn spends all his time complaining. I wish he’d just ________.",
    answers: [
      { text: "get a life", correct: true },
      { text: "find a life", correct: false },
      { text: "change the life", correct: false },
      { text: "get the life", correct: false },
    ],
  },
  {
    question:
      "Lucy ______ well with her brother, even though he's much younger than her.",
    answers: [
      { text: "gets on", correct: true },
      { text: "gets up", correct: false },
      { text: "gets over", correct: false },
      { text: "gets off", correct: false },
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
  if (score >= 16) {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Upper - Intermediate қаноат мекунад !`;
    nextButton.innerHTML = "Такрор кардан";
    nextButton.style.display = "block";
  } else {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Upper - Intermediate қаноат намекунад !`;
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
