function  postSignupData(){
        var firstname  = document.getElementById('#fname').value;
        var lastname  = document.getElementById('#lname').value;
        var dob = document.getElementById('#doblbl').value;
        var email= document.getElementById('#emaillbl').value;
        var username = document.getElementById('#uname').value;
        var password = document.getElementById('#passwrd').value;
        var confpassword = document.getElementById('#confpass').value;
        var isValid = true;

      /*   var fnamespan = document.getElementById('#fname_error');
        var lnamespan = document.getElementById('#lname_error');
        var dobspan = document.getElementById('#dob_error');
        var emailspan = document.getElementById('#email_error');
        var usernspan = document.getElementById('#username_error');
        var passwordspan = document.getElementById('#password_error');
        var confpassspan = document.getElementById('#confpassword_error');

        if(firstname == "" || lastname == "" || dob == "" || email == "" || username == "" || (password != confpassword)){
            fnamespan.textContent = "This field is required";
            lastname.textContent = "This field is required";
            dob.textContent = "This field is required";
            email.textContent = "This field is required";
            username.textContent = "This field is required";
            confpassword.textContent ="This entry must be equal to password";
            isValid = false;
        }else{
            isValid = true;
         */
        var fname  = document.getElementById('#fname').value;
        var lname  = document.getElementById('#lname').value;
        var doblbl = document.getElementById('#doblbl').value;
        var emaillbl= document.getElementById('#emaillbl').value;
        var uname = document.getElementById('#uname').value;
        var passwrd = document.getElementById('#passwrd').value;
        var confpass = document.getElementById('#confpass').value;

        const data = {fname,lname,doblbl,emaillbl,uname,passwrd,confpass,};
        const options = {
             method: 'POST',
             headers: {
                  'Content-Type': 'application/json'
             },
             body: JSON.stringify(data),      
        }

        fetch('/signup',options).then(response => {
            console.log(response);
        });
    }

    document.querySelector('#send_SigupData').addEventListener('click', postSignupData);
    alert('Registered Successfully');