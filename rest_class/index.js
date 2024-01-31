const express = require("express");
const app = express();
let methodOverride = require('method-override');
const port = 8080;
const path = require("path");

// to create new id 
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }));
 
// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log("app in now listening");
})

// demo data
let posts = [
    {
        id: uuidv4(),
        username: "Jkr19",
        content: "Hello everone!"
    },
    {
        id: uuidv4(),
        username: "Gojo68",
        content: "I am too storng for him."
    },
    {
        id: uuidv4(),
        username: "Yuji10",
        content: "I will go far for gojo sensai."
    }
]

app.get("/posts", (req, res) => {
    res.render("home.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("add-form.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });

    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("show.ejs", {post});
})
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("edit.ejs", {post});
})

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content =newContent;
    res.redirect("/posts");
})

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
     posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
})