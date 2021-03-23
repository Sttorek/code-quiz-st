var startBtn = document.getElementById("start-btn");
var welcome = document.getElementById("welcome-screen");
var questionContainer = document.getElementById("question-screen");

var questionBank = [
  {
    question: "What can be found inside of objects? ",
    answers: [
      { text: "Strings", isCorrect: false },
      { text: "Boolean", isCorrect: false },
      { text: "Numbers", isCorrect: false },
      { text: "All of the above", isCorrect: true },
    ],
  },
  {
      question: "What can you use to run the same code multiple times with different values?",
      answers: [
          { text: "Compilers", isCorrect: false },
          { text: "Event Listeners", isCorrect: false },
          { text: "For Loops", isCorrect: true },
          { text: "None Of The Above", isCorrect: false },
        ],
  },
  {
      question: "What encompasses an array?",
      answers: [
          { text: "[]", isCorrect: true },
          { text: "()", isCorrect: false },
          { text: "..", isCorrect: false },
          { text: "//", isCorrect: false },
      ]
  },
  {
      question: "What number value does an Index start with",
      answers: [
          { text: "2", isCorrect: false },
          { text: "1", isCorrect: false },
          { text: "-1", isCorrect: false },
          { text: "0", isCorrect: true },
      ]
  },
  {
      question: "What does a Boolean return?",
      answers: [
        { text: "0", isCorrect: false },
        { text: "00", isCorrect: false },
        { text: "True/False", isCorrect: true },
        { text: "A String", isCorrect: false},
      ]
  },
  {
      question: "Who created JavaScript?",
      answers: [
          { text: "Chuck Norris", isCorrect: false }, 
          { text: "Brendan Eich", isCorrect: true },
          { text: "james Gosling", isCorrect: false },
          { text: "Guido Van Rossum", isCorrect: false},
      ]
  }
];

startBtn.addEventListener("click", startGame);

function startGame() {
  // hide instructions
  welcome.classList.add("hidden");
  questionContainer.classList.remove("hidden");
}
