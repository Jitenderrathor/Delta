const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
// app.set("views", path.join(__dirname,"/views")')
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.get("/", (req, res)=>{
    res.render("home.ejs");
})
app.get("/ig/:username", (req, res)=>{
    const instaData = require("./data.json");
    const {username} = req.params;
    console.log(instaData[username].name);
    // res.render("instagram.ejs", {username});
    res.render("instagram.ejs", {data:instaData[username]});
})
app.get("/rolldice", (req, res)=>{
    let rollValue = Math.floor(Math.random()*6+1);
    res.render("rolldice.ejs", {rollValue});
})
app.listen(port, ()=>{
    console.log(`Listening at ${port}.`);
})
