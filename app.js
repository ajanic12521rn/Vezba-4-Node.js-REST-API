//Ukljucujemo potrebne pakete
const path = require("path");
const express = require("express");
//Ukljucujemo sequelize i modele
const { sequelize, Student, Smer } = require("./models");

//Instanciramo express aplikaciju
const app = express();

//Definisemo handler za home rutu, koji vraca fajl static/index.html
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//Ukljucujemo skript u kome su handleri za rute /student/...
const studentRoutes = require("./routes/students.js");
app.use("/student", studentRoutes);

//Ovde treba da ukljucimo handlere za rute /smer/...
//...

//Pokrecemo http server na portu 8000
app.listen({ port:8000 }, async () => {
    console.log("Started server on localhost:8000");
});