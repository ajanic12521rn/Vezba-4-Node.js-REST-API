//Trebaju nam neki moduli i ovde, posto je ovo 'izolovani' modul
const express = require("express");
const { sequelize, Student, Smer } = require("../models");

//Dohvatamo router nase express aplikacije (u redu 2 je dohvacena ista instanca kao i u app.js)
const route = express.Router();

//Treba nam json() middleware
route.use(express.json());
//Treba nam i urlencoded middleware, koji ce da sredi sadrzaj url-a ako ima nase znakove i sl.
route.use(express.urlencoded({extended:true}));

//Eksportujemo route objekat, da bude vidljiv u app.js
module.exports = route;

//Punimo route objekat sa handlerima ruta
//Sve rute imaju prefiks /student jer je ovaj modul tako prikljucen u app.js, sa app.use("/student", studentRoutes);

//Ruta /student
route.get("/", async (req, res) => {
    try{
        const svistudenti = await Student.findAll();
        return res.json(svistudenti);
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

//Ostale rute
//...