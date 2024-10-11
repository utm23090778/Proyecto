import {Schema, model} from "mongoose";

const DatasSchema = new Schema({
    respuesta_pregunta1:{
        type: String,
        require: true
    },
    respuesta_pregunta2:{
        type: String,
        require: true
    },
    respuesta_pregunta3:{
        type: String,
        require: true
    },
    respuesta_pregunta4:{
        type: String,
        require: true
    },
    respuesta_pregunta5:{
        type: String,
        require: true
    },
    respuesta_pregunta6:{
        type: String,
        require: true
    },
    respuesta_pregunta7:{
        type: String,
        require: true
    },
    respuesta_pregunta8:{
        type: String,
        require: true
    },
    respuesta_pregunta9:{
        type: String,
        require: true
    },
    respuesta_pregunta10:{
        type: String,
        require: true
    },
    respuesta_pregunta11:{
        type: String,
        require: true
    },
    respuesta_pregunta12:{
        type: String,
        require: true
    },
    respuesta_pregunta13:{
        type: String,
        require: true
    },
    respuesta_pregunta14:{
        type: String,
        require: true
    },
    respuesta_pregunta15:{
        type: String,
        require: true
    },
    respuesta_pregunta16:{
        type: String,
        require: true
    },
    respuesta_pregunta17:{
        type: String,
        require: true
    },
    respuesta_pregunta18:{
        type: String,
        require: true
    },
    respuesta_pregunta19:{
        type: String,
        require: true
    },
    respuesta_pregunta20:{
        type: String,
        require: true
    },
})

export const DatesModel = model("dates",DatasSchema)