const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
var methodOverride = require('method-override');
const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const port = 8080;

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "885522"
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ]
}



app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user;";
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            let total = result[0]['count(*)'];
            console.log(total);
            res.render("home.ejs", { total });
        })
    } catch (error) {
        console.log(error);
    }
})
app.get("/user", (req, res) => {
    let q = "SELECT * FROM user;";
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            // console.log(result);
            res.render("show.ejs", { result });
        })
    } catch (error) {
        console.log(error);
    }
})
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;

    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            let data = result[0];
            res.render("edit.ejs", { data });
        })
    } catch (error) {
        console.log(error);
    }
})

app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {usernme, password} = req.body;

    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            let data = result[0];
            if(password == data.password){
    let q2 = `update user set usernme = '${usernme}' where id ='${id}'`;
    connection.query(q2, (error, result) => {
        if (error) throw error;
        let data = result[0];
        res.redirect("/user");
    })
            }
        })
    } catch (error) {
        console.log(error);
    }
})

app.delete("/user/:id/",(req,res)=>{
    let {id} = req.params;
    let q = `delete from user where id ='${id}'`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            res.redirect("/user");
        })
    } catch (error) {
        console.log(error);
    }

})
app.listen(port, () => {
    console.log("app is listening at", port);
});


/* try {
    connection.query(q, [users], (error, result) => {
        if (error) throw error;
        console.log(result);
    })
} catch (error) {
    console.log(error);
}
connection.end(); */