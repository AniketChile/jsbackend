require('dotenv').config();
const express = require("express");
const app = express();
const port = 2000;

app.get("/",(req,res)=>{
    res.send('Hello world')
})

app.get("/twitter",(req,res)=>{
    res.send('aniketchile')
})

app.get('/login',(req,res)=>{
    res.send('<h1>login page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>youtube page</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
