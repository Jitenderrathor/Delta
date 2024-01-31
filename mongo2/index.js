const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
// to override method of form
let methodOverride = require('method-override');
const port = 8080;


// to use ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// to use _method from coming
app.use(methodOverride("_method"));

// to use static file like css and js
app.use(express.static(path.join(__dirname, "public")));

// to get value from post
app.use(express.urlencoded({extended:true}));

// to connect to dbs
main().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// to get req from root route "/"
app.get("/",(req,res)=>{
    res.send("It's working totally properly!")
})


// Index Route(All Chat Page)
app.get("/chats", async (req, res)=>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
})
  
// New Route(Give form to add new)
app.post("/chats",(req, res)=>{
  let {from, to, message} = req.body;
  let newChat = new Chat({
    from:from,
    to:to,
    message:message,
    created_at: new Date()
  })
  newChat.save().then((data)=>{
    console.log(data);
  }).catch((err)=>console.log(err));
  res.redirect("/chats");
})

// Create Route(To add form data to dbs)
app.get("/chats/new",(req, res)=>{
  res.render("add.ejs");
})


// Edit Form Route(To edit message)
app.get("/chats/:id/edit", async (req, res)=>{
  let{id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{ chat });
})

// Update Values Route(Values Coming From Edit Route)
app.patch("/chats/:id", async (req, res)=>{
  let{id} = req.params;
  let { message } = req.body;
  let chat = await Chat.findByIdAndUpdate(id,{message:message, created_at:new Date()});
  res.redirect("/chats");
})

// Destory Doc Route(delete data from given id)
app.delete("/chats/:id", async (req, res)=>{
  let{id} = req.params;
  let chat = await Chat.findOneAndDelete(id);
  res.redirect("/chats");
})

// to make it listen at port 8080
app.listen(port,()=>{
    console.log(`App is now listening at port ${port}`);
})