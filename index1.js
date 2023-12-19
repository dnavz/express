const express = require('express')
const app = express()

app.get("/health-checkup", function(req,res){
    const username=req.headers.username;
    const pwd=req.headers.password;
    const kidneyId = Number(req.query.kidneyId);

    console.log(req.query)
    console.log(username, pwd, kidneyId)

    if(!(username === 'Simha' && pwd === 'thelion'))
    {
        res.status(401).json({"msg":"Incorrect Username/PWD"})
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg": "Somethings up with your ionputs"})
        return
      }
      // do something with kidney here
      res.json({
        msg: "Your kidney is fine!"
      })
})

app.listen(3000)