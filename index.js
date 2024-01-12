import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app =express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})


app.get("/article",(req,res)=>{
    res.render("article.ejs");
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})

app.get("/article/Overcoming-Web-Challenges", (req,res)=>{
    res.render("Overcoming-Web-Challenges.ejs");
})

app.get("/article/Master-Art-of-Code", (req,res)=>{
    res.render("Master-Art-Of-Code.ejs");
})

app.get("/article/Frontend-vs-Backend", (req,res)=>{
    res.render("Frontend-vs-Backend.ejs");
})






app.get("article/Overcoming-Common-Challenges-in-Web-Development")

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})

