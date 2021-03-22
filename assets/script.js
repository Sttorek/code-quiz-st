// variables ------------------------------------------------------------------
var questionBox = document.getElementById("question-box");
var answerBox = document.getElementById("answer-box");
var mainBtn = document.getElementById("main-button");
var highScore = document.getElementById("high-score");
var time = document.getElementById("time-box");
var secondsLeft = 5;

// --------------------------------------


function sendMessage() {
  document.getElementById("time").textContent = "Game Over!";
  document.getElementById("time").setAttribute("style", "font-size: 40px;");
  document.getElementById("time").setAttribute("style", "font-size: 40px;");
//   !!!!!!!   how to set Multiple Data Attributes? !!!!!!!!!!!!!!!!!
};


mainBtn.addEventListener("click", function () {
  var startTimer = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(startTimer);
      sendMessage();
    }
  }, 1000);
});
