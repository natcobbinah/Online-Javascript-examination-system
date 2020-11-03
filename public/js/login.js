var loginbtn = document.getElementById('loginVerify');
var studentname = document.getElementById('studentname');

async function getUserCredentialsVerified(){

    var username = document.getElementById('uname').value;
    var password = document.getElementById('pword').value;

        const response = await fetch('/signup');
        const data = await response.json();

          for(users of data){

            var username_fromdb =  `${users.uname}`;
            var password_frmdb =   `${users.passwrd}`;
         
            console.log(username_fromdb,password_frmdb);
           if((username == username_fromdb) && (password == password_frmdb )){
                   alert('Username and password correct');
                   window.location.href = "/userValidation/studentdashboard.html";
                   studentname.innerHTML = username;
                   break;
           }else{
               document.getElementById('status').innerHTML="Incorrect username or password";
           }
        }
}

if(loginbtn){
    loginbtn.addEventListener('click',getUserCredentialsVerified);
}


//const bcrypt = require('bcryptjs'); not using the decryption
 /* verifying user enterd passwordhash vs one stored in db */
           /*  const salt = await bcrypt.genSalt();
            const hashPasswordfromlogin = await bcrypt.hash(password,salt);

            bcrypt.compare(hashPasswordfromlogin,password_frmdb, (err,isMatch)=>{
                if(err){
                    throw err
                }else if(!isMatch){
                    alert('Username and password incorrect');
                    window.location.href = "/userValidation/login.html"
                }else{
                    if(username == username_fromdb){
                        alert('Username and password correct');
                        window.location.href = "/userValidation/studentdashboard.html"
                    }else{
                        alert('Username incorrect');
                    }
                }
            }); */