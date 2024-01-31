const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

/* // API validator
app.use("/api",(req,res, next)=>{
   let {token} = req.query;
   if(token === "giveaccess"){
    next();
   }
   res.send("REQUEST DENAIED!")
}) 
app.get("/api",(req, res)=>{
    res.send("data");
})
*/

// or
// API validator
let checktoken = ((req,res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
     next();
    }
    throw new ExpressError(401,"ACCESS DENIED!")
 })

 app.get("/api",checktoken, (req, res)=>{
    res.send("data");
})

app.get("/admin", (req, res)=>{
    throw new ExpressError(403,"It's not admin route!")
})

// Custom Error Handeler
app.get("/err", (req, res)=>{
abcd = sdffs;
})

app.use((err, req, res, next)=>{
    let {status= 500, message="Some Error Ouccer"} = err;
    res.status(status).send(message);
})


/* // Custom Middleware 
app.use((req,res, next)=>{
    console.log("I am 1st Middleware");
    // res.send("I am 1st Middleware");
    next()
}) */


/* // Logger
app.use((req,res, next)=>{
    // console.log(req);
    req.time = new Date(Date.now());
    console.log(req.time);
    next()
}) */


// app.get("/", (req, res)=>{
// res.send("It's root route");
// })
app.listen(8080, ()=>{
    console.log("App is now listening at port 8080");
})

/* //404
app.use((err,req,res)=>{
    res.status(404).send("Page Not Found");
}) */