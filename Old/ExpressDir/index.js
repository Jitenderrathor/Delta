const express = require("express");
const app = express();
// console.dir(app);

const port = 8080;

app.listen(port, ()=>{
    console.log(`app listening to port ${port}`);
})
/*app.use((req, res)=>{
    console.log("received request");
    res.send("hello world");
    res.send("<h2>Hello World</h2>");  
})
 app.get("/",(req,res)=>{
    res.send("You are Home Root Path");
})
app.get("/apple",(req,res)=>{
    res.send("You are contacting Apple Path");
})
app.get("*",(req,res)=>{
    res.send("404");
}) */
app.get("/:username/:id", (req, res)=>{
let{username, id} = req.params;
res.send(`Hello this is the page of @${username}.`);
});