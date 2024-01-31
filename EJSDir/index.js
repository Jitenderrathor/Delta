const express = require('express')
const app = express();
const port = 8080;

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
})

app.set("view engine", "ejs");

app.get("/",(req, res)=>{
    res.render("home");
})
app.get("/rolldice",(req, res)=>{
    const diceVal = Math.floor(Math.random()*6+1);
    res.render("rolldice", {diceVal});
})