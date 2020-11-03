const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

app.use(express.json());

const bcrypt = require('bcrypt');
const Datastore = require('nedb');

const database = new Datastore('database.db');
database.loadDatabase();

//find specific user from database
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
