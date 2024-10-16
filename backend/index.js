import express from "express";
import mongoose from "mongoose";
import {DatesModel} from "./models/DatesModels.js";


mongoose.connect("mongodb://localhost:27017/Evaluacion-Docente").then(()=>{
    console.log("conexion exitosa a la base de datos")
})

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hola desde mi servidor")

})

app.post("/create",(req,res)=>{
    const respuesta_pregunta1 = req.body.respuesta_pregunta1;
    const respuesta_pregunta2 = req.body.respuesta_pregunta2;
    const respuesta_pregunta3 = req.body.respuesta_pregunta3;
    const respuesta_pregunta4 = req.body.respuesta_pregunta4;
    const respuesta_pregunta5 = req.body.respuesta_pregunta5;
    const respuesta_pregunta6 = req.body.respuesta_pregunta6;
    const respuesta_pregunta7 = req.body.respuesta_pregunta7;
    const respuesta_pregunta8 = req.body.respuesta_pregunta8;
    const respuesta_pregunta9 = req.body.respuesta_pregunta9;
    const respuesta_pregunta10 = req.body.respuesta_pregunta10;
    const respuesta_pregunta11 = req.body.respuesta_pregunta11;
    const respuesta_pregunta12 = req.body.respuesta_pregunta12;
    const respuesta_pregunta13 = req.body.respuesta_pregunta13;
    const respuesta_pregunta14 = req.body.respuesta_pregunta14;
    const respuesta_pregunta15 = req.body.respuesta_pregunta15;
    const respuesta_pregunta16 = req.body.respuesta_pregunta16;
    const respuesta_pregunta17 = req.body.respuesta_pregunta17;
    const respuesta_pregunta18 = req.body.respuesta_pregunta18;
    const respuesta_pregunta19 = req.body.respuesta_pregunta19;
    const respuesta_pregunta20 = req.body.respuesta_pregunta20;
    if(!respuesta_pregunta1|| !respuesta_pregunta2|| !respuesta_pregunta3|| !respuesta_pregunta4|| !respuesta_pregunta5||
        !respuesta_pregunta6|| !respuesta_pregunta7|| !respuesta_pregunta8|| !respuesta_pregunta9|| !respuesta_pregunta10||
        !respuesta_pregunta11|| !respuesta_pregunta12|| !respuesta_pregunta13|| !respuesta_pregunta14|| !respuesta_pregunta15||
        !respuesta_pregunta16|| !respuesta_pregunta17|| !respuesta_pregunta18|| !respuesta_pregunta19|| !respuesta_pregunta20)
    {
        return res.status(400).json({
            msg:"Necesitamos todos los valores para almacenar un documento!!!"
        })

    }
    const obj = {
        respuesta_pregunta1,
        respuesta_pregunta2,
        respuesta_pregunta3,
        respuesta_pregunta4,
        respuesta_pregunta5,
        respuesta_pregunta6,
        respuesta_pregunta7,
        respuesta_pregunta8,
        respuesta_pregunta9,
        respuesta_pregunta10,
        respuesta_pregunta11,
        respuesta_pregunta12,
        respuesta_pregunta13,
        respuesta_pregunta14,
        respuesta_pregunta15,
        respuesta_pregunta16,
        respuesta_pregunta17,
        respuesta_pregunta18,
        respuesta_pregunta19,
        respuesta_pregunta20,
    };
    DatesModel.create(obj);
    return res.status(200).json({
        msg: "Cita almacenada con exito!!"
    })
})

app.listen(4000,()=>{
    console.log("servidor en linea!")
})