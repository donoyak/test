const questions = [
  {
    question: "I ____ going to do my best.",
    answers: [
      { text: "is", correct: false },
      { text: "am", correct: true },
      { text: "are", correct: false },
      { text: "I don't know", correct: false },
    ],
  },
  {
    question: "Dude, seriously, are ____ kidding me?",
    answers: [
      { text: "we", correct: false },
      { text: "you", correct: true },
      { text: "they", correct: false },
      { text: "he", correct: false },
    ],
  },
  {
    question: "Where ____ the money? - Right here.",
    answers: [
      { text: "are", correct: false },
      { text: "does", correct: false },
      { text: "is", correct: true },
      { text: "did", correct: false },
    ],
  },
  {
    question: "I want ____ ID right now.",
    answers: [
      { text: "an", correct: true },
      { text: "some", correct: false },
      { text: "any", correct: false },
      { text: "of", correct: false },
    ],
  },
  {
    question: "____ Kylie on stage?",
    answers: [
      { text: "Where", correct: false },
      { text: "Were", correct: false },
      { text: "Was", correct: false },
      { text: "Is", correct: true },
    ],
  },
  {
    question:
      "I have these awesome earrings that are actually total fakes. I bought ____ on HSN.",
    answers: [
      { text: "them", correct: true },
      { text: "it", correct: false },
      { text: "they", correct: false },
      { text: "her", correct: false },
    ],
  },
  {
    question: " ____ you speak all those languages?",
    answers: [
      { text: "Does", correct: false },
      { text: "Are", correct: false },
      { text: "Do", correct: true },
      { text: "Is", correct: false },
    ],
  },
  {
    question:
      "It was the guy from the liquor store. ____ name's Mike.",
    answers: [
      { text: "Her", correct: false },
      { text: "His", correct: true },
      { text: "He's", correct: false },
      { text: "Their", correct: false },
    ],
  },
  {
    question:
      "____ 15 basic courts in Montenegro.",
    answers: [
      { text: "There is", correct: false },
      { text: "Are", correct: false },
      { text: "Is", correct: false },
      { text: "There are", correct: true },
    ],
  },
  {
    question:
      "I don't mind walking, but you ____ drive this car.",
    answers: [
      { text: "can", correct: true },
      { text: "can't", correct: false },
      { text: "are", correct: false },
      { text: "were", correct: false },
    ],
  },
  {
    question:
      "I sat next to ____ at lunch and she talked to me.",
    answers: [
      { text: "she", correct: false },
      { text: "me", correct: false },
      { text: "her", correct: true },
      { text: "mine", correct: false },
    ],
  },
  {
    question:
      "Were your children unsupervised while you ____ at work?",
    answers: [
      { text: "are", correct: false },
      { text: "was", correct: false },
      { text: "were", correct: true },
      { text: "is", correct: false },
    ],
  },
  {
    question:
      "Don't you like ____ about her?",
    answers: [
      { text: "think", correct: false },
      { text: "thinking", correct: true },
      { text: "to think", correct: false },
      { text: "thinked", correct: false },
    ],
  },
  {
    question: "Where ____ your uncle live?",
    answers: [
      { text: "is", correct: false },
      { text: "do", correct: false },
      { text: "are", correct: false },
      { text: "does", correct: true },
    ],
  },
  {
    question:
      "____ you have regular checkups with your old GP?",
    answers: [
      { text: "Do", correct: true },
      { text: "Did", correct: false },
      { text: "Are", correct: false },
      { text: "Is", correct: false },
    ],
  },
  {
    question: "What are you ____ in my house?",
    answers: [
      { text: "did", correct: false },
      { text: "do", correct: false },
      { text: "doing", correct: true },
      { text: "does", correct: false },
    ],
  },
  {
    question:
      "Complete the sentence: (There are _____ apples on the table.) ",
    answers: [
      { text: "one", correct: false },
      { text: "three", correct: true },
      { text: "none", correct: false },
      { text: "an", correct: false },
    ],
  },
  {
    question: "What do you call the person who teaches students?",
    answers: [
      { text: "Driver", correct: false },
      { text: "Doctor", correct: false },
      { text: "Student", correct: false },
      { text: "Teacher", correct: true },
    ],
  },
  {
    question: "Which animal is known as ( man's best friend ) ?",
    answers: [
      { text: "Dog", correct: true },
      { text: "Frog", correct: false },
      { text: "Cat", correct: false },
      { text: "Fish", correct: false },
    ],
  },
  {
    question: "How many days are there in a week?",
    answers: [
      { text: "Seven", correct: true },
      { text: "Five", correct: false },
      { text: "Nine", correct: false },
      { text: "Ten", correct: false },
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
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Beginner қаноат мекунад !`;
    nextButton.innerHTML = "Такрор кардан";
    nextButton.style.display = "block";
  }else {
    questionElement.innerHTML = `Шумо аз ${questions.length} - то савол  ${score} - то ҷавоби дуруст гардондед <br> Пас дарачаи англисии шумо ба Beginner қаноат намекунад !`;
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
