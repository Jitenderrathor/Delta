const express = require("express");
const app = express();

let port = 8080;

app.listen(port, ()=>{
    console.log("app is now listening!")
})

app.use((req, res)=>{
    // console.log("hello");
    res.send("<h1>Hello World!</h1>")
})