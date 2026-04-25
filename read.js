const fs = require("fs");
const http = require('http');
const express = require('express');

const app = express();

http.createServer();

app.get('/', (req,res)=>{
    res.send("lala runnning na ")
})
app.get('/write', (req,res)=>{
    fs.writeFileSync("rudra.txt","YO YO NIGA");
    console.log("Created sucucessfullle");
})

app.get('/read', (req,res)=>{
    const data = fs.readFileSync('rudra.txt', "utf-8");
    res.send(data);
})
app.listen(4000);