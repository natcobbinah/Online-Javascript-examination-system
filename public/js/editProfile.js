function  editProfileData(){
    var fname  = document.getElementById('fname').value;
    var lname  = document.getElementById('lname').value;
    var doblbl = document.getElementById('doblbl').value;
    var emaillbl= document.getElementById('emaillbl').value;
    var uname = document.getElementById('uname').value;

    const data = {fname,lname,doblbl,emaillbl,uname};
    const options = {
         method: 'POST',
         headers: {
              'Content-Type': 'application/json'
         },
         body: JSON.stringify(data),      
    }

    alert('Profile Data edit Successful');
    window.location.href = "/";

    fetch('/editProfile',options).then(response => {
        console.log(response);
    });
}

document.querySelector('#send_editPofileData').addEventListener('click', editProfileData);
