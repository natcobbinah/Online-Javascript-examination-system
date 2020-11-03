function  postRegisteredCoursesData(){

    var studentNo  = document.getElementById('studentnolbl').value;
    var select = document.getElementById('courses');
    var selected = [...select.selectedOptions]
                      .map(option => option.value);
    
    const data = {studentNo,selected};
    const options = {
         method: 'POST',
         headers: {
              'Content-Type': 'application/json'
         },
         body: JSON.stringify(data),      
    }

    alert('Courses Registered Successfully');
    window.location.href = "/userValidation/studentdashboard.html";

    fetch('/courses',options).then(response => {
        console.log(response);
    });
}

document.querySelector('#registerCourse').addEventListener('click', postRegisteredCoursesData);
