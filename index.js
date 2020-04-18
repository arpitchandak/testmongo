const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const favicon = require('express-favicon');

const app = express()
const PORT = process.env.PORT || 80

const {mongourl} = require('./keys')
require('./User');

app.use(favicon(__dirname + '/favicon.ico'));

const authroutes = require('./authroutes');
app.use(bodyParser.json())
app.use(authroutes)



mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : true,
    useCreateIndex : true
})

mongoose.connection.on('connected', () =>{
    console.log("Connected to mongo")
})

mongoose.connection.on('error', (error) =>{
    console.log("Not Connected to mongo", error)
})


app.post('/',(request,response) =>{
    console.log(request.body)
    response.send("Hello");
})
app.get('/favicon.ico', (req, res) => res.status(204));

app.listen,(PORT, () => {
    console.log("Server Running on :", PORT)
})

