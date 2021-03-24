// DOM VARIABLES ------------------------------------------------------------------
var questionBox = document.getElementById("question-box");
var answerBox = document.getElementById("initial-text");
var mainBtn = document.getElementById("main-button");
var btnCont = document.getElementById("btn-cont");
var highScore = document.getElementById("high-score");
var time = document.getElementById("time-box");
var mainContainer = document.getElementById("answer-box");

var btnOne = document.getElementById("btn-one");
var btnTwo = document.getElementById("btn-two");
var btnThree = document.getElementById("btn-three");
var btnFour = document.getElementById("btn-four");
// JAVASCRIPT VARIABLES -----------------------------------------------------------
var secondsLeft = 60;

var testPageOne = {
  question: "What can be found inside of objects?",
  choiceOne: "Strings",
  choiceTwo: "Booleans",
  choiceThree: "Numbers",
  choiceFour: "All Of The Above",
};

var testPageTwo = {
  question:
    "What can you use to run the same code multiple times with different values?",
  choiceOne: "Compilers",
  choiceTwo: "Event Listeners",
  choiceThree: "For Loops",
  choiceFour: "None Of The Above",
};

var testPageThree = {
  question: "What encompasses an array?",
  choiceOne: "[]",
  choiceTwo: "()",
  choiceThree: "For Loops{}",
  choiceFour: "//",
};

var testPageFour = {
  question: "What number value does an Index start with",
  choiceOne: "2",
  choiceTwo: "1",
  choiceThree: "-1",
  choiceFour: "0",
};

var testPageFive = {
  question: "What does a Boolean return?",
  choiceOne: "0",
  choiceTwo: "00",
  choiceThree: "True/False",
  choiceFour: "A String",
};

var testPageSix = {
  question: "Who created JavaScript?",
  choiceOne: "Chuck Norris",
  choiceTwo: "Brendan Eich",
  choiceThree: "James Gosling ",
  choiceFour: "Guido van Rossum",
};

// FUNCTION DEFINITIONS -----------------------------------------------------------

function gameOverMessage() {
  document.getElementById("time").textContent = "Game Over!";
  document
    .getElementById("time")
    .setAttribute("style", "background-color: red; font-size: 40px;");
}

function runSecondPage() {
  questionBox.innerHTML = testPageTwo.question;
  btnOne.innerHTML = testPageTwo.choiceOne;
  btnTwo.innerHTML = testPageTwo.choiceTwo;
  btnThree.innerHTML = testPageTwo.choiceThree;
  btnFour.innerHTML = testPageTwo.choiceFour;

  btnOne.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runThirdPage();
    btnOne.removeEventListener("click");
  });
  btnTwo.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runThirdPage();
    btnTwo.removeEventListener("click");
  });
  btnThree.addEventListener("click", function () {
    runThirdPage();
  });
  btnFour.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runThirdPage();
    btnFour.removeEventListener("click");
  });
}

function runThirdPage() {
  questionBox.innerHTML = testPageThree.question;
  btnOne.innerHTML = testPageThree.choiceOne;
  btnTwo.innerHTML = testPageThree.choiceTwo;
  btnThree.innerHTML = testPageThree.choiceThree;
  btnFour.innerHTML = testPageThree.choiceFour;

  btnOne.addEventListener("click", function () {
    runFourthPage();
  });
  btnTwo.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runFourthPage();
    btnTwo.removeEventListener("click");
  });
  btnThree.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runFourthPage();
    btnThree.removeEventListener("click");
  });
  btnFour.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runFourthPage();
    btnFour.removeEventListener("click");
  });
}

function runFourthPage() {
  questionBox.innerHTML = testPageFour.question;
  btnOne.innerHTML = testPageFour.choiceOne;
  btnTwo.innerHTML = testPageFour.choiceTwo;
  btnThree.innerHTML = testPageFour.choiceThree;
  btnFour.innerHTML = testPageFour.choiceFour;

  btnOne.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runFifthPage();
    btnOne.removeEventListener("click");
  });
  btnTwo.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runFifthPage();
    btnTwo.removeEventListener("click");
  });
  btnThree.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runFifthPage();
    btnThree.removeEventListener("click");
  });
  btnFour.addEventListener("click", function () {
    runFifthPage();
  });
}

function runFifthPage() {
  questionBox.innerHTML = testPageFive.question;
  btnOne.innerHTML = testPageFive.choiceOne;
  btnTwo.innerHTML = testPageFive.choiceTwo;
  btnThree.innerHTML = testPageFive.choiceThree;
  btnFour.innerHTML = testPageFive.choiceFour;

  btnOne.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runSixthPage();
    btnOne.removeEventListener("click");
  });
  btnTwo.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runSixthPage();
    btnTwo.removeEventListener("click");
  });
  btnThree.addEventListener("click", function () {
    runSixthPage();
  });
  btnFour.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runSixthPage();
    btnFour.removeEventListener("click");
  });
}

function runSixthPage() {
  questionBox.innerHTML = testPageSix.question;
  btnOne.innerHTML = testPageSix.choiceOne;
  btnTwo.innerHTML = testPageSix.choiceTwo;
  btnThree.innerHTML = testPageSix.choiceThree;
  btnFour.innerHTML = testPageSix.choiceFour;
  // !!!!!!!!!!!!!!!!!subtract seconds from wrong answers!!!!!!!!!!!!!!!!!!!!!!!!
  btnOne.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runCompletedGame();
  });
  btnTwo.addEventListener("click", function () {
    runCompletedGame();
  });
  btnThree.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runCompletedGame();
  });
  btnFour.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runCompletedGame();
  });
}
// This runs the completed page
function runCompletedGame() {
  mainContainer.innerHTML = "";
  questionBox.innerHTML = "Complete!";
}

// EVENT LISTENERS ----------------------------------------------------------------

mainBtn.addEventListener("click", function () {
  var startTimer = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;

    if (secondsLeft < 0) {
      clearInterval(startTimer);
      gameOverMessage();
    }
  }, 1000);
});

mainBtn.addEventListener("click", function () {
  questionBox.innerHTML = testPageOne.question;
  answerBox.innerHTML = "";
  btnOne.innerHTML = testPageOne.choiceOne;
  btnTwo.innerHTML = testPageOne.choiceTwo;
  btnThree.innerHTML = testPageOne.choiceThree;
  btnFour.innerHTML = testPageOne.choiceFour;
  btnCont.innerHTML = "";
  btnOne.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runSecondPage();
    btnOne.removeEventListener("click");
  });
  btnTwo.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runSecondPage();
    btnTwo.removeEventListener("click");
  });
  btnThree.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    runSecondPage();
    btnThree.removeEventListener("click");
  });
  btnFour.addEventListener("click", function () {
    runSecondPage();
  });
});
