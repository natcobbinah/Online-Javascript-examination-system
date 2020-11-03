const highScores_ulList = document.getElementById("highScoresList");

getData();
async function getData(){
    const response = await fetch('/testSubmit');
    const data = await response.json();
    var highScores;

    let li= document.createElement('li');
      for(users of data){
       
        var test_no =       `${users.test}`;
        var test_score =    `${users.scoresValue}`;
        
        li.innerHTML += test_no + " - " + test_score + "<br>";
        li.style.fontSize = "450%";
        highScores_ulList.appendChild(li);
      }
}