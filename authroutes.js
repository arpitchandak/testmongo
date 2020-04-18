const express = require('express')
const router = express.Router() 
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.post('/',async (request,response) =>{



    const {first_name,last_name,email,avatar} = request.body
    
    try {
        const user = new User({first_name,last_name,email,avatar})
        await user.save()   
        response.send("Data Recived")
        console.log(request.body)

 
    } catch (err) {
        response.status(404).send(err.message)
        console.log(err.message)

    }
   
} )

module.exports = router