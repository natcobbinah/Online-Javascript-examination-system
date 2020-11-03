const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

const bcrypt = require('bcrypt');
const Datastore = require('nedb');

const database = new Datastore('database.db');
database.loadDatabase();

//Insert user signup data into database
app.post('/signup',(request,response) =>{
    console.log("i got a request");

    const data = request.body;

    database.insert(data);
    response.json({
        firstname: data.firstname,
        lastname : data.lastname,
        datofbirth : data.datofbirth,
        email:      data.email,
        username: data.username,
        password: data.password,
    });

});