import express from "express";
import mongoose from "mongoose";
import {DatesModel} from "./models/DatesModels.js";



mongoose.connect("mongodb://localhost:27017/Evaluacion-Docente")
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error de conexión a la base de datos", error);
  });


  const app = express();
  app.use(express.json());


  app.get("/", (req, res) => {
    res.send("hola desde mi servidor");
  });
  
  
  app.get("/answers", async (req, res) => {
    try {
      const respuestas = await DatesModel.find(); 
      res.status(200).json(respuestas); 
    } catch (error) {
      console.error("Error al obtener las respuestas:", error);
      return res.status(500).json({
        msg: "Hubo un error al obtener las respuestas. Intenta nuevamente."
      });
    }
  });
  
  
  app.post("/create", (req, res) => {
   
    const {
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
    } = req.body;

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
   
    DatesModel.create(obj)
    .then(() => {
     
      return res.status(200).json({
        msg: "Respuestas almacenadas con éxito!!"
      });
    })
    .catch((error) => {
      
      console.error("Error al guardar las respuestas:", error);
      return res.status(500).json({
        msg: "Hubo un error al guardar los datos",
        error: error.message
      });
    });
});

app.listen(4000, () => {
  console.log("Servidor en línea!");
});
