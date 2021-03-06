const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

const {mongourl} = require('./keys')
require('./modules/User');

const authroutes = require('./routes/authroutes');
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

app.listen(process.env.PORT || 80, () => {
    console.log("Server Running on :", PORT)
})

