getData();
async function getData(){
    const response = await fetch('/testSubmit');
    const data = await response.json();

    for(scores of data){
               const root = document.createElement('div');
                const mood = document.createElement('div');

                mood.textContent =  `mood: ${scores.test}`;
                const geo = document.createElement('div');
                geo.textContent =  `${scores.scoresValue}`;
                const date = document.createElement('div');
                const dateString= new Date(scores.timestamp).toLocaleString();
                date.textContent = dateString;

                root.append(mood,geo,date);
                document.body.append(root);
    }

    console.log(data);
}