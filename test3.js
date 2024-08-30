const questions = [
  {
    question: "Do you _______ work on Sundays",
    answers: [
      { text: "need", correct: false },
      { text: "have to", correct: true },
      { text: "must", correct: false },
      { text: "should", correct: false },
    ],
  },
  {
    question: "I don’t think you ______ stay out late",
    answers: [
      { text: "should", correct: false },
      { text: "shouldn't", correct: true },
      { text: "must", correct: false },
      { text: "need", correct: false },
    ],
  },
  {
    question: "You _____ bring anything special to the party.",
    answers: [
      { text: "should", correct: false },
      { text: "must", correct: false },
      { text: "don't have to", correct: true },
      { text: "need", correct: false },
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
    question: "Naomi will get in touch ______ she hears any news.",
    answers: [
      { text: "till", correct: false },
      { text: "until", correct: false },
      { text: "while", correct: false },
      { text: "as soon as", correct: true },
    ],
  },
  {
    question: "Please look after the children ____ I get home from work.",
    answers: [
      { text: "until", correct: true },
      { text: "if", correct: false },
      { text: "while", correct: false },
      { text: "before", correct: false },
    ],
  },
  {
    question: "If I _____ some money, I’ll go on holiday next year.",
    answers: [
      { text: "'ll save", correct: false },
      { text: "saved", correct: false },
      { text: "save", correct: true },
      { text: "saving", correct: false },
    ],
  },
  {
    question:
      " Will your parents buy you a car if you finish university?’ _____’.",
    answers: [
      { text: "No, they don’t", correct: false },
      { text: "No, they won’t", correct: true },
      { text: "No, won’t", correct: false },
      { text: "No, they can't", correct: false },
    ],
  },
  {
    question: "Before I go out tonight, I ______ finish this work.",
    answers: [
      { text: "was going to", correct: false },
      { text: "go to", correct: false },
      { text: "going to", correct: false },
      { text: "'m going to ", correct: true },
    ],
  },
  {
    question: "Do you want to go _____ ?",
    answers: [
      { text: "dancing", correct: true },
      { text: "to dance", correct: false },
      { text: "dance", correct: false },
      { text: "danced", correct: false },
    ],
  },
  {
    question: "Is coffee ___ in Kenya?",
    answers: [
      { text: "grew", correct: false },
      { text: "grow", correct: false },
      { text: "grown", correct: true },
      { text: "growed", correct: false },
    ],
  },
  {
    question: "Since 2001, all Skoda cars ______ by Volkswagen.",
    answers: [
      { text: "were produced", correct: false },
      { text: "are produced", correct: false },
      { text: "have been produced", correct: true },
      { text: "are producing", correct: false },
    ],
  },
  {
    question: "Is a lot of paper wasted in your office? ‘____’.",
    answers: [
      { text: "Yes, it was", correct: false },
      { text: "Yes, it has", correct: true },
      { text: "Yes, it is", correct: false },
      { text: "Yes, it had", correct: false },
    ],
  },
  {
    question: "If I _____ a famous person, I wouldn’t know what to say.",
    answers: [
      { text: "am meeting", correct: false },
      { text: "meet", correct: false },
      { text: "didn’t meet", correct: false },
      { text: "met", correct: true },
    ],
  },
  {
    question: "They ______ more money if they saved a little every month.",
    answers: [
      { text: "would have", correct: true },
      { text: "will have", correct: false },
      { text: "would had", correct: false },
      { text: "will had", correct: false },
    ],
  },
  {
    question: "If you ____ me, what would you do?",
    answers: [
      { text: "are", correct: false },
      { text: "like", correct: false },
      { text: "were", correct: true },
      { text: "was", correct: false },
    ],
  },
  {
    question:
      "Emma is very busy so she ______ come to the party. She hasn’t decided yet.",
    answers: [
      { text: "mustn’t ", correct: false },
      { text: "might not", correct: true },
      { text: "shouldn’t", correct: false },
      { text: "should", correct: false },
    ],
  },
  {
    question: "Ed is tired because he ______ all night.",
    answers: [
      { text: "was working", correct: false },
      { text: "is working", correct: false },
      { text: "hasn’t worked", correct: false },
      { text: "has been working", correct: true },
    ],
  },
  {
    question: "You’ve got a lot of bags. ____ you _____?",
    answers: [
      { text: "Have / been shopping", correct: true },
      { text: "Do / go shopping?", correct: false },
      { text: "Have / shopped", correct: false },
      { text: "Are / shoping", correct: false },
    ],
  },
  {
    question: "Dan was taken to hospital because he _____ his leg.",
    answers: [
      { text: "had broken", correct: true },
      { text: "has broken", correct: false },
      { text: "broken", correct: false },
      { text: "was broken", correct: false },
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
  if (score >= 14) {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Pre - Intermediate қаноат мекунад !`;
    nextButton.innerHTML = "Такрор кардан";
    nextButton.style.display = "block";
  } else {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Pre - Intermediate қаноат намекунад !`;
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
