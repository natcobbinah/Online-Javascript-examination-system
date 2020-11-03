const username = document.getElementById("username").value;
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

username.addEventListener("keyup",() => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username 
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.assign("/userValidation/studentdashboard.html");
}