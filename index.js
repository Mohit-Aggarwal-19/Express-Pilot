require('dotenv').config()

const express = require('express')
const app=express()

function callback(ab,xy){
    xy.send("Hello World callback kya kar rhe bhai");
}

function callback2(req,res){
    res.send("twiiter heelo world")
}

function callback3(req,res){
    res.send("<h1>PLease login with right credentials</h1>")
}

function callbackYoutube(req,res){
    res.send(`<a href="https://www.youtube.com">Visit YouTube</a>`)
}

app.get('/', callback);

app.get('/twitter',callback2);

app.get('/login',callback3);

app.get('/youtube',callbackYoutube);



app.listen(process.env.PORT,()=>{
    console.log(`this is port ${process.env.PORT}`)
})