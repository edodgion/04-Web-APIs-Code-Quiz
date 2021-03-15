var scoreList = document.getElementById("#highScore")
var clear = document.getElementById("#clear");

var storedScores = JSON.parse(localStorage.getItem("storedScores"))
for (var i = 0; i < storedScores.length; i++){
    var highscore = storedScorese[i];
    var update = document.createElement("ul")
    update.textContent = storedScorese[i].initials + " " + storedScores[i].score;
    scoreList.appendChild(update)
    
}


//clear highscores
clear.addEventListener("click", function () {
    localStorage.clear();
});
