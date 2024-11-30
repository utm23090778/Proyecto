import {Schema, model} from "mongoose";

const AnswerSchema = new Schema({
    pregunta_0:{
        type: String,
        require: true
    },
    pregunta_1:{
        type: String,
        require: true
    },
    pregunta_2:{
        type: String,
        require: true
    },
    pregunta_3:{
        type: String,
        require: true
    },
    pregunta_4:{
        type: String,
        require: true
    },
    pregunta_5:{
        type: String,
        require: true
    },
    pregunta_6:{
        type: String,
        require: true
    },
    pregunta_7:{
        type: String,
        require: true
    },
    pregunta_8:{
        type: String,
        require: true
    },
    pregunta_9:{
        type: String,
        require: true
    },
    pregunta_10:{
        type: String,
        require: true
    },
    pregunta_11:{
        type: String,
        require: true
    },
    pregunta_12:{
        type: String,
        require: true
    },
    pregunta_13:{
        type: String,
        require: true
    },
    pregunta_14:{
        type: String,
        require: true
    },
    pregunta_15:{
        type: String,
        require: true
    },
    pregunta_16:{
        type: String,
        require: true
    },
    pregunta_17:{
        type: String,
        require: true
    },
    pregunta_18:{
        type: String,
        require: true
    },
    pregunta_19:{
        type: String,
        require: true
    },
    
})

export const AnswerModel = model("anwers",AnswerSchema)