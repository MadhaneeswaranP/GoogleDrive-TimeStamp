let time=new Date();

const fs=require('fs');

fs.writeFile('time.txt',`The current time is ${time}`,function (err,data){
    if(err) throw err;
    console.log("Time file created");
})

fs.readFile("time.txt",`utf8`,function(err,data){
    if (err) throw err;
    console.log(data)
    a=data;
});
var a;

fs.readdir("./",function(err,data){
    if(err) throw err;
    console.log(data);
    
})

const express = require("express");

const app = express();

app.listen(8001, function () {
    console.log("Webserver running");
});

app.get("/",function (req,res) {
    res.send(a);
});