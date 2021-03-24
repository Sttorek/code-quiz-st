var startBtn = document.getElementById("start-btn");
var welcome = document.getElementById("welcome-screen");
var questionContainer = document.getElementById("question-screen");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var questionBank = [
  {
    questions: "What can be found inside of objects? ",
    answers: [
      { text: "Strings", isCorrect: false },
      { text: "Boolean", isCorrect: false },
      { text: "Numbers", isCorrect: false },
      { text: "All of the above", isCorrect: true },
    ],
  },
  {
      questions: "What can you use to run the same code multiple times with different values?",
      answers: [
          { text: "Compilers", isCorrect: false },
          { text: "Event Listeners", isCorrect: false },
          { text: "For Loops", isCorrect: true },
          { text: "None Of The Above", isCorrect: false },
        ],
  },
  {
      questions: "What encompasses an array?",
      answers: [
          { text: "[]", isCorrect: true },
          { text: "()", isCorrect: false },
          { text: "..", isCorrect: false },
          { text: "//", isCorrect: false },
      ]
  },
  {
      questions: "What number value does an Index start with",
      answers: [
          { text: "2", isCorrect: false },
          { text: "1", isCorrect: false },
          { text: "-1", isCorrect: false },
          { text: "0", isCorrect: true },
      ]
  },
  {
      questions: "What does a Boolean return?",
      answers: [
        { text: "0", isCorrect: false },
        { text: "00", isCorrect: false },
        { text: "True/False", isCorrect: true },
        { text: "A String", isCorrect: false},
      ]
  },
  {
      questions: "Who created JavaScript?",
      answers: [
          { text: "Chuck Norris", isCorrect: false }, 
          { text: "Brendan Eich", isCorrect: true },
          { text: "james Gosling", isCorrect: false },
          { text: "Guido Van Rossum", isCorrect: false},
      ]
  }
];



function startGame() {
  // hide instructions
  welcome.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  displayQuestion();
}


function displayQuestion() {
    questionContainer.innerHTML = questionBank[0].questions;
    
    for (i = 0; i < 4; i++) {
        
      }
    

    
}






startBtn.addEventListener("click", startGame);

  



