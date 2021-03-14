//refering back to elements in 
var timerElement = document.querySelector("#timerElement"); 
var start = document.querySelector("#start"); 
var choices = document.querySelector("#choices");
var wrapper = document.querySelector("#wrapper");

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



