const express = require("express");
const { sequelize, Student, Smer } = require("../models");

const route = express.Router();

module.exports = route;

route.get("/", async (req, res) => {
    try{
        const svismerovi = await Smer.findAll();
        return res.json(svismerovi);
        
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

route.get("/:id", async (req, res) => {
    try{
        let smer = await Smer.findByPk(req.params.id);
        let studenti = await smer.getStudents();
        return res.json(studenti);

    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});
