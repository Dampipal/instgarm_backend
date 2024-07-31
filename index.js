const express = require('express');

const app = express()

const PORT = 3001

app.get('/' ,(req,res) =>{
    res.send("WELCOME TO INSTAGRAM BACKEND");
    console.log("working routes /");
})

app.listen(PORT , () =>{
    console.log(`Server is running port ${PORT}`);
})