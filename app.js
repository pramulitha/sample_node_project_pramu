const express = require('express');  //import express to the js file

const app = express();
const mongoose = require('mongoose'); 
const bodyparser = require('body-parser');

app.use(bodyparser.json());

//Import routes
const postsRoute = require('./Routes/posts')
app.use('/posts',postsRoute)

//Routes
app.get('/', (req,res)=> {
    res.send('pramulitha athukorala');
});

app.get('/posts', (req,res)=> {
    res.send('Fuck you');
});

//connect to DB

mongoose.connect('mongodb+srv://pramu96:sliit@123@pramucluster.lwte3.mongodb.net/sample_analytics?retryWrites=true&w=majority', 
{useNewUrlParser: true},
() => console.log('connected to DB !')
)



//How we start listening to the server

app.listen(3000);   

