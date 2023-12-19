const express= require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<user>:<pwd>@cluster0.4tundro.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('Users',{
  name: String,
  email: String,
  password: String
})

app.post('/signup', function(req,res){
  const username = req.body.username
  const password = req.body.password
  const name = req.body.name

  const existUser = User.findOne({email: username})

  if(existUser){
    return res.statusCode(400).send('User already exists')
  }

  const newUser = new User({
    name: name,
    email: username,
    password: password
  })

  newUser.save();
  res.json({
    msg : "user created successfully"
  })

})