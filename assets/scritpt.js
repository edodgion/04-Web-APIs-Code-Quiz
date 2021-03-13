// select all elements
var start = document.querySelector(".start");
var timerElement = document.querySelector(".timer-count")
var quiz = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

//Questions Array
var questions = [
  {
  question:"Commonly used Data Types DO NOT include.",
  choiceA:"1. strings",
  choiceB:"2. booleans",
  choiceC:"3. alerts",
  choiceD:"4. numbers",
  correct:"3. alerts"
  },
  {
  question:"String values must be enclosed within ______ when being assingned to variables.",
  choiceA:"1. commas",
  choiceB:"2. curly brackets",
  choiceC:"3. square brackets",
  choiceD:"4. parentheses",
  correct:"3. square brackets"
  },
  {
  question:"The condition in an if/else statement is enclosed within _____.",
  choiceA:"1. quotes",
  choiceB:"2. curly brackets",
  choiceC:"3. parentheses",
  choiceD:"4. square brackets",
  correct:"B"
  },
  {
  question:"A very useful tool used during development and debuggin for printing content to the debugger is:",
  choiceA:"1. JavaScript",
  choiceB:"2. terminal/bash",
  choiceC:"3. for loops",
  choiceD:"4. console.log",
  correct:"D"
  },
  {
  question: "Arrays in JavaScript can be used to store _____.",
  choiceA:"1. numbers & strings",
  choiceB:"2. other arrays",
  choiceC:"3. booleans",
  choiceD:"4. all of the above",
  correct:"D"
  }
];

//variables
var lastQuestion = questions.length - 1;
var currentIndex = 0;
var questionTime = 90;
var timer;
var timerCount;
var score = 0;

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    quiz.style.display = "inline";
    timerCount = 90;
    renderQuestion()
    startTimer()
    console.log("start quiz")
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);

  renderQuestion();
}

var optionsButtons = document.getElementsByClassName("choice");

for (var i = 0; i < optionsButtons.length; i++) {
  optionsButtons[i].addEventListener('click',function(){
    var answerButton = this.innerHTML;
    var correctAnswer = questions[currentIndex].correct;
    console.log(answerButton, correctAnswer)

    if (correctAnswer === answerButton){

    }else{
      
    }

    questionClick()
  });
}
// render a question
function renderQuestion(){
  var q = questions[currentIndex];
  if (q == questions[4]){
    timerCount = 0
  }

    //Current Question is an object

  //logic to render question
  questionEl.innerHTML = q.question;
  choiceA.textContent = q.choiceA;
  choiceB.textContent = q.choiceB;
  choiceC.textContent = q.choiceC;
  choiceD.textContent = q.choiceD;
  console.log(questions[currentIndex])

}

function questionClick() {

  //get the value of the users Selection
  //correct
  //incorrect
 
  currentIndex++


renderQuestion();
}

function answerIsCorrect(){
  document.querySelector("#answer-container").style.color = "gray"
}

function answerIsWrong(){
  document.querySelector("#answer-container").style.color ="gray"
timerCount = timerCount -15 
}


