const questions = [
  {
    question:
      "Which of these sentences uses the correct tense for reporting past events?",
    answers: [
      {
        text: "The politician claimed that he never lied to the public. ",
        correct: false,
      },
      {
        text: "The politician claimed that he had never lied to the public.",
        correct: true,
      },
      {
        text: "The politician claimed that he has never lied to the public.",
        correct: false,
      },
      {
        text: "The politician claimed that he would never lie to the public.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which word best fits the blank in this sentence? “The speaker’s __________ message resonated with the audience, leading to a long standing ovation.”",
    answers: [
      { text: "mundane", correct: false },
      { text: "eloquent", correct: true },
      { text: "provocative", correct: false },
      { text: "ambiguous", correct: false },
    ],
  },
  {
    question: "Choose the sentence that uses the correct preposition:",
    answers: [
      {
        text: "She was very disappointed for her performance.",
        correct: false,
      },
      { text: "She was very disappointed in her performance", correct: false },
      {
        text: "She was very disappointed with her performance.",
        correct: true,
      },
      { text: "She was very disappointed at her performance.", correct: false },
    ],
  },
  {
    question:
      "Which sentence is grammatically correct and uses the correct idiom?",
    answers: [
      {
        text: "I’m so busy, I’m running around like a chicken with its head cut off.",
        correct: true,
      },
      {
        text: "I’m so busy, I’m running around like a headless chicken.",
        correct: false,
      },
      {
        text: "I’m so busy, I’m running around like a headless duck.",
        correct: false,
      },
      {
        text: "I’m so busy, I’m running around like a chicken with its head cut off.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which sentence best reflects the meaning of the idiom “to pull someone’s leg”?",
    answers: [
      {
        text: "He needed to pull his leg to reach the top shelf.",
        correct: false,
      },
      {
        text: "The police officer pulled the suspect’s leg over to the patrol car.",
        correct: false,
      },
      {
        text: "The dog pulled its leg away from the vet’s touch.",
        correct: false,
      },
      {
        text: "My friend told me I won the lottery, but he was just pulling my leg.",
        correct: true,
      },
    ],
  },
  {
    question: "Choose the sentence that uses the most formal tone:",
    answers: [
      { text: "The company’s decision will be made soon.", correct: true },
      { text: "The company will be making a decision soon.", correct: false },
      { text: "The company is going to make a decision soon.", correct: false },
      { text: "The company is going to decide soon.", correct: false },
    ],
  },
  {
    question: "Which sentence has a clear and concise style of writing?",
    answers: [
      {
        text: "The fact that the company is facing financial challenges is something that is not a secret.",
        correct: false,
      },
      {
        text: "The company is facing financial challenges, and this is not a secret.",
        correct: false,
      },
      {
        text: "The company’s financial challenges are not a secret.",
        correct: true,
      },
      {
        text: "It is no secret that the company is facing financial challenges.",
        correct: false,
      },
    ],
  },
  {
    question: "Identify the sentence that uses the word “affect” correctly:",
    answers: [
      { text: "The bad weather will effect our travel plans.", correct: false },
      { text: "The bad weather will affect our travel plans.", correct: true },
      {
        text: "The bad weather will effect on our travel plans.",
        correct: false,
      },
      {
        text: "The bad weather will effect to our travel plans.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which sentence uses the correct word order for a passive voice construction?",
    answers: [
      { text: "The boy was kicked by the ball.", correct: false },
      { text: "The ball was kicked the boy by.", correct: false },
      { text: "The boy was kicked the ball by.", correct: false },
      { text: "The ball was kicked by the boy.", correct: true },
    ],
  },
  {
    question:
      "Which sentence uses the correct tense for a hypothetical situation?",
    answers: [
      {
        text: "If I had known you were coming, I would have made a cake.",
        correct: true,
      },
      {
        text: "If I would have known you were coming, I would have made a cake.",
        correct: false,
      },
      {
        text: "If I knew you were coming, I would make a cake.",
        correct: false,
      },
      {
        text: "If I will know you were coming, I would have made a cake.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Choose the sentence that uses the correct comparative adjective:",
    answers: [
      { text: "This book is interestingest than that one.", correct: false },
      { text: "This book is more interesting than that one.", correct: false },
      { text: "This book is more interesting than that one.", correct: true },
      { text: "This book is most interesting than that one.", correct: false },
    ],
  },
  {
    question: "Identify the sentence that correctly uses a relative clause:",
    answers: [
      {
        text: "The woman, who she was wearing a red dress, walked into the room.",
        correct: false,
      },
      {
        text: "The woman, who was wearing a red dress, she walked into the room.",
        correct: false,
      },
      {
        text: "The woman, wearing a red dress, who walked into the room.",
        correct: false,
      },
      {
        text: "The woman, who was wearing a red dress, walked into the room.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which sentence uses the correct modal verb to express obligation?",
    answers: [
      { text: "You should to bring a gift to the party.", correct: false },
      { text: "You must bring a gift to the party.", correct: true },
      { text: "You might bring a gift to the party.", correct: false },
      { text: "You can bring a gift to the party.", correct: false },
    ],
  },
  {
    question:
      "Choose the sentence that uses the correct conjunction to express a contrast:",
    answers: [
      {
        text: "The weather was bad, so we went to the beach anyway.",
        correct: false,
      },
      {
        text: "The weather was bad, and we went to the beach anyway.",
        correct: false,
      },
      {
        text: "The weather was bad, because we went to the beach anyway.",
        correct: false,
      },
      {
        text: "The weather was bad, but we went to the beach anyway.",
        correct: true,
      },
    ],
  },
  {
    question: "Which of these phrases correctly uses the conditional “unless”?",
    answers: [
      {
        text: "I won’t go to the concert unless you come with me.",
        correct: true,
      },
      {
        text: "I will go to the concert unless you come with me.",
        correct: false,
      },
      {
        text: "I won’t go to the concert unless you won’t come with me.",
        correct: false,
      },
      {
        text: "I will go to the concert unless you don’t come with me.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Choose the sentence that uses the correct word to refer to a large group of people:",
    answers: [
      {
        text: "The herd was so large, it was hard to see the stage.",
        correct: false,
      },
      {
        text: "The flock was so large, it was hard to see the stage.",
        correct: false,
      },
      {
        text: "The crowd was so large, it was hard to see the stage.",
        correct: true,
      },
      {
        text: "The swarm was so large, it was hard to see the stage.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which sentence uses the correct word for expressing a strong opinion?",
    answers: [
      { text: "I think that the new policy is a bad idea.", correct: false },
      {
        text: "I feel strongly that the new policy is a bad idea.",
        correct: true,
      },
      { text: "I believe that the new policy is a bad idea.", correct: false },
      { text: "I feel that the new policy is a bad idea.", correct: false },
    ],
  },
  {
    question:
      "Choose the sentence that correctly uses the past perfect tense to describe an action that happened before another past action:",
    answers: [
      { text: "He ate before he went to the party.", correct: false },
      { text: "He will eat before he goes to the party.", correct: false },
      {
        text: "He will have eaten before he goes to the party.",
        correct: false,
      },
      { text: "He had eaten before he went to the party.", correct: true },
    ],
  },
  {
    question:
      "Identify the sentence that uses the correct article for a general noun:",
    answers: [
      { text: "Dogs are loyal animals.", correct: true },
      { text: "The dogs are loyal animals.", correct: false },
      { text: "A dogs are loyal animals.", correct: false },
      { text: "Some dogs are loyal animals.", correct: false },
    ],
  },
  {
    question:
      "Choose the sentence that correctly uses the subjunctive mood to express a wish or a hypothetical situation:",
    answers: [
      { text: "I wish I were rich.", correct: true },
      { text: "I wish I was rich.", correct: false },
      { text: "I wish I am rich.", correct: false },
      { text: "I wish I would be rich.", correct: false },
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
  if (score >= 13) {
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
