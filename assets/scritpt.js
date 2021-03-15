//refering back to elements in HTML
var timerElement = document.querySelector("#timerElement");
var start = document.querySelector("#start");
var choices = document.querySelector("#choices");
var choiceList = document.getElementById("choice-list");
//question index array
var currentIndex = 0;
var timerCount = 100;
var timer = 0;
var deduct = 15;

//Questions Array
var questions = [
    {
        question:"Commonly used Data Types DO NOT include.",
        choices:["strings","booleans","alerts","numbers"],
        correct:"alerts"
        },
        {
        question:"String values must be enclosed within ______ when being assingned to variables.",
        choices:["commas","curly brackets","quotes","parentheses"],
        correct:"quotes"
        },
        {
        question:"The condition in an if/else statement is enclosed within _____.",
        choices:["quotes","curly brackets","parentheses","square brackets"],
        correct:"curly brackets"
        },
        {
        question:"A very useful tool used during development and debuggin for printing content to the debugger is:",
        choices:["JavaScript","terminal/bash","for loops","console.log"],
        correct:"console.log"
        },
        {
        question: "Arrays in JavaScript can be used to store _____.",
        choices:["numbers & strings","other arrays","booleans","all of the above"],
        correct:"all of the above"
        }
      ];


      start.addEventListener("click", startQuiz);

      function startQuiz() {
        if (timer == 0) {
          timer = setInterval(function () {
              timerCount--;
            timerElement.textContent = timerCount;
      
            if (timerCount <= 0) {
              clearInterval(timer);
              isDone();
              timerElement.textContent = "Time's up!";
            }
          }, 1000);
        }
        console.log(document.body.children);
        renderQuestions();
      }
      //matches correct and wrong answers 
      function match(event) {
        var choiceEl = event.target;
      
        if (choiceEl.matches("li")) {
          //Creates new div that displays if answer is Correct or Wrong
          var result = document.createElement("div");
          result.setAttribute("id", "result");
          //statement for correct answers
          if (choiceEl.textContent == questions[currentIndex].correct) {
            result.textContent = "Correct!!!";
          } else {
            //-15 seconds for wrong answers
            timerCount = timerCount - deduct;
            result.textContent = "Wrong!!!!";
          }
        }
      
        currentIndex++;
      //if questions array is less than or equal to it's length, end quiz("isDone")
        if (currentIndex >= questions.length) {
          isDone();
          result.textContent = " ⬆ Submit your HIGH SCORE!!! ⬆ ";
        } else {
          renderQuestions();
        }
        choices.appendChild(result);
      }
      
      function renderQuestions() {
        choices.innerHTML = "";
        choiceList.innerHTML = "";
        for (var i = 0; i < questions.length; i++) {
          var nextQuestion = questions[currentIndex].question;
          var answerBtn = questions[currentIndex].choices;
          choices.textContent = nextQuestion;
        }
        answerBtn.forEach(function (newChoices) {
          // Make a list for questions and choices
          var listChoices= document.createElement("li");
          listChoices.textContent = newChoices;
          choices.appendChild(choiceList);
          choiceList.appendChild(listChoices);
          listChoices.addEventListener("click", match);
        });
      }
      // stops timer and questions
      function isDone() {
        choices.innerHTML = "";
        timerElement.innerHTML = "";
      
        //Creates paragraph line with "id" element to end quiz
        var endQuiz = document.createElement("p");
        endQuiz.setAttribute("id", "endQuiz");
      
        choices.appendChild(endQuiz);
      
        // Displays final score/time remaining
        if (timerCount >= 0) {
          var timeRemaining = timerCount;
          var displayScore = document.createElement("p");
          clearInterval(timer);
          endQuiz.textContent = "FINAL SCORE: " + timeRemaining;
          
          choices.appendChild(displayScore);
        }
      
        // label to enter initials
        var initials = document.createElement("label");
        initials.textContent = "Enter your initials: ";
      
        choices.appendChild(initials);
      
        // input your initials
        var inputInitials = document.createElement("input");
        inputInitials.setAttribute("id", "initials");
        inputInitials.textContent = "";
      
        choices.appendChild(inputInitials);
      
        var enterBtn = document.createElement("div");
        enterBtn.setAttribute("button", "enter");
        enterBtn.setAttribute("id", "Enter");
        enterBtn.textContent = "Enter";
      
        choices.appendChild(enterBtn);
      
        enterBtn.addEventListener("click", function () {
        });
      }
      