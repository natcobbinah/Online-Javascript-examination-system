const finalScore = document.getElementById("finalScore");
var score = sessionStorage.getItem("score");
var username= sessionStorage.getItem("username");

finalScore.innerHTML = score;
var scoresvalue = score;

function postScores(){
    var username = username;
    var scoresValue = scoresvalue;

    var testno = 0;
    var test= "Test" + testno++;

    const data = {test,scoresValue};
    const options = {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),  
    }

    alert('Test submission successful');
    window.location.href = "/userValidation/studentdashboard.html";

    fetch('/testSubmit',options).then(response => {
        console.log(response);
    });
}
document.querySelector('#saveScoreBtn').addEventListener('click',postScores);
