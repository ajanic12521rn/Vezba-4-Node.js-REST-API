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

//Ostale rute za GET
route.get("/:id", async (req, res) => {
    try {
        let student = await Student.findByPk(req.params.id);
        return res.json(student);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

const { Op } = require("sequelize");

route.get("/find/:q", async (req, res) => {
    try {
        let studenti = await Student.findAll({
            where: {
                [Op.or]: {
                    ime: req.params.q,
                    prezime: req.params.q,
                    zvanje: {
                        [Op.substring]: req.params.q
                    },
                    tema_rada: {
                        [Op.substring]: req.params.q
                    },
                    mentor: {
                        [Op.substring]: req.params.q
                    }
                }
            }
        });

        console.log(studenti + " " + req.params.q); //debug

        return res.send(studenti);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

//Ruta za POST

route.post("/", async (req,res) => { 
    let noviStudent = await Student.create(req.body);
    res.send(noviStudent);
});

//Ruta za PUT

route.put("/:id", async (req,res) => { 
    try {
        let student = await Student.findByPk( req.params.id );
        student.ime = req.ime;
        student.prezime = req.prezime;
        student.zvanje = req.zvanje;
        student.tema_rada = req.tema_rada;
        student.mentor = req.mentor;
        student.godina = req.godina;
        student.smerID = req.smerID;
        await student.save();
        res.send(student);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

//Ruta za DELETE

route.delete("/:id", async (req,res) => { 
    try {
        let student = await Student.findByPk( req.params.id );
        await student.destroy();
        res.send(student);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});