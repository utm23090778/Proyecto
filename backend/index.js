

import express from 'express'; 
import mongoose from 'mongoose';
import { DatesModel } from './models/DatesModel.js';
import cors from 'cors';

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/evaluacionTutores')
    .then(() => {
        console.log('¡La conexión a MongoDB ha sido exitosa!');
    })
    .catch((err) => {
        console.error('Error al conectar con MongoDB:', err);
    });

app.use(express.json());
app.use(cors());

// prueba
app.get('/', (req, res) => {
    res.send('Hola desde mi servidor');
});

// guarda respuestas
app.post("/save-answers", async (req, res) => {
    const { Name, Last_name, Email, ...answers } = req.body;

    // Valida datos
    if (!Name || !Last_name || !Email) {
        return res.status(400).json({ msg: "Faltan datos personales" });
    }

    // Valida respuestas
    const numberOfQuestions = 20;
    for (let i = 0; i < numberOfQuestions; i++) {
        if (!answers[`pregunta_${i}`]) {
            return res.status(400).json({ msg: `Pregunta ${i + 1} sin responder` });
        }
    }

    try {
        // Crear documento en la base de datos
        await DatesModel.create({
            Name,
            Last_name,
            Email,
            respuestas: answers,
        });
        return res.status(200).json({ msg: "Datos almacenados con éxito" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al guardar datos" });
    }
});

// Ruta para obtener respuestas almacenadas
app.get("/get-answers", async (req, res) => {
    try {
        const answers = await DatesModel.find();
        return res.status(200).json(answers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al obtener datos" });
    }
});

// datos para gráficas
app.get("/get-answers-to-chart", async (req, res) => {
    try {
        const allAnswers = await DatesModel.find();
        let totalSiempre = 0;
        let totalAVeces = 0;
        let totalRaraVez = 0;
        let totalNunca = 0;

        for (const answer of allAnswers) {
            for (let i = 0; i < 20; i++) {
                const answerPerQuestion = answer.respuestas[`pregunta_${i}`];
                if (answerPerQuestion === "Siempre") {
                    totalSiempre++;
                } else if (answerPerQuestion === "A veces") {
                    totalAVeces++;
                } else if (answerPerQuestion === "Rara vez") {
                    totalRaraVez++;
                } else if (answerPerQuestion === "Nunca") {
                    totalNunca++;
                }
            }
        }

        return res.status(200).json({
            totalSiempre,
            totalAVeces,
            totalRaraVez,
            totalNunca,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al obtener datos para gráfico" });
    }
});

// Arrancar el servidor
const port = 4000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

