import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {AnswerModel} from "./models/AnswersModel.js";


mongoose.connect("mongodb://localhost:27017/questionnairesFusion")
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })

  .catch((error) => {
    console.error("Error de conexión a la base de datos", error);
  });


const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("hola desde mi servidor");
});

app.post("/create", async (req, res) => {
  const questionnaire = {
    
    preguntas: [
      "¿El profesor muestra interés en el progreso de los estudiantes?",
      "¿El profesor utiliza diferentes métodos de enseñanza?",
      "¿El profesor es accesible para resolver dudas?",
      "¿El profesor fomenta la participación en clase?",
      "¿El profesor explica los conceptos de manera clara?",
      "¿El profesor es puntual en las clases?",
      "¿El profesor respeta las opiniones de los estudiantes?",
      "¿El profesor proporciona retroalimentación constructiva?",
      "¿El profesor crea un ambiente de aprendizaje positivo?",
      "¿El profesor está actualizado en su materia?",
      "¿El profesor establece expectativas claras?",
      "¿El profesor motiva a los estudiantes a aprender?",
      "¿El profesor maneja bien el tiempo durante la clase?",
      "¿El profesor se preocupa por el bienestar emocional de los estudiantes?",
      "¿El profesor fomenta el trabajo en equipo?",
      "¿El profesor utiliza recursos didácticos variados?",
      "¿El profesor maneja adecuadamente la disciplina en clase?",
      "¿El profesor es amable y respetuoso con los estudiantes?",
      "¿El profesor adapta su enseñanza a las necesidades de los estudiantes?",
      "¿El profesor fomenta el pensamiento crítico entre los estudiantes?"
    ],
    opciones: [
      "Siempre", 
      "A veces", 
      "Rara vez", 
      "Nunca"]

  };

})

app.post("/save-answers", async (req, res) => {
  console.log(req.body)
  //Areglo 
 const numberofQuestions = Array.from(Array(20).keys());
 let flag = true;
 for(const nQ of numberofQuestions){
  console.log(nQ)
  if (!req.body['pregunta_${nQ}']){
    flag = false;
  }
 }

 if(!flag){
  return res.status(400).json({msg:"Datos incompletos"})
 }
 try {
  await AnswerModel.create(req.body);
  return res.status(200).json ({msg: "Respuestas almacenadas"})
 } catch (error) {
   return  res.status(500).json({msg:"Algo salio mal al guardar tus respuestas"})
 }

})
app.get("/get-answers", async (req, res) => {
  const answers = await AnswerModel.find();
  return res.status(200).json(answers);
});

app.get("/get-answers-chart", async (req, res) => {
  const allAnswers = await AnswerModel.find();

  let totalSiempre = 0;
  let totalAveces = 0;
  let totalRaraVez = 0;
  let totalNunca = 0;
  

  for(const answer of allAnswers){
    for(let i = 0; i<20; i++){
      const answerperQuestion = answer['pregunta_${i}'];

      if (answerperQuestion === "Siempre"){
        totalSiempre++
      } else if (answerperQuestion === "A veces"){
        totalAveces++
      }else if (answerperQuestion === "Rara vez"){
        totalRaraVez++
      }else {
        totalNunca++
      }
    }
  }
  return res.status(200).json([
    totalSiempre,
    totalAveces,
    totalRaraVez,
    totalNunca
  ])

})


app.listen(4000, () => {
  console.log("Servidor en línea!");
});

