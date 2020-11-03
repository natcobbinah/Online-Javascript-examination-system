const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

app.use(express.json());

const bcrypt = require('bcrypt');
const Datastore = require('nedb');

const database = new Datastore('database.db');
database.loadDatabase();

const courses_database = new Datastore('courses_database.db');
courses_database.loadDatabase();

const testscores_database = new Datastore('testscores_database.db');
testscores_database.loadDatabase();

//retrive users from the database to client end perform comparison to enable login
app.get('/signup', (request, response) =>{
    console.log("i got a request");
    console.log(request.body);

    database.find({}, (err, data) =>{
        if(err){
            response.end();
            return;
        }
        response.json(data);
    });
});

//Insert into testscores database
app.post('/testSubmit', (request,response) =>{
    console.log("i got a request");
    console.log(request.body);

    const data = request.body;
    testscores_database.insert(data);

    response.json({
        Testno: data.test,
        scores  : data.scoresValue
    });
});

//retrieve  user test scores
app.get('/testSubmit', (request,response) =>{
    console.log("i got a request");
    console.log(request.body);

    testscores_database.find({}, (err, data) =>{
        if(err){
            response.end();
            return;
        }
        response.json(data);
    });
});


//Insert user signup data into database
app.post('/signup',async (request,response) =>{
    console.log("i got a request");
    console.log(request.body);

    const data = request.body;

        database.insert(data);
        response.json({
            firstname: data.fname,
            lastname : data.lname,
            datofbirth : data.doblbl,
            email:      data.emaillbl,
            username: data.uname,
            password: hashPassword,
        });
});

//const data = {fname,lname,doblbl,emaillbl,uname};
app.post('/editProfile',async(request,response) =>{
    console.log("i got a request");
    console.log("request.body");

    const data = request.body;
    database.update({$set: {fname: data.fname,
                           lname: data.lname,
                           doblbl: data.doblbl,
                           emaillbl: data.emaillbl,
                           uname: data.uname}},{},function(err,values){

                           });
});

//Insert student registered course module into database
app.post('/courses', (request,response) => {
    console.log("I got a request");
    console.log(request.body);

    const data = request.body;

    courses_database.insert(data);
    response.json({
        StudentNo: data.studentNo,
        SelectedCourses: data.selectedCourses
    });

});

/* app.post('/signup',async (request,response) =>{ supports encryption but a bit messy with decryption
    console.log("i got a request");
    console.log(request.body);

    const data = request.body;

    try{
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(request.body.passwrd,salt);
    
        const signupData = {
            firstname: request.body.fname,
            lastname : request.body.lname,
            datofbirth : request.body.doblbl,
            email:      request.body.emaillbl,
            username: request.body.uname,
            password: hashPassword

        };

        database.insert(signupData);
        response.json({
            firstname: data.fname,
            lastname : data.lname,
            datofbirth : data.doblbl,
            email:      data.emaillbl,
            username: data.uname,
            password: hashPassword,
        });
    
    }catch{
        response.status(500).send();
    }
}); */
