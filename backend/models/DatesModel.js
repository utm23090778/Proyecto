import { Schema, model } from 'mongoose';

const DatesSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    respuestas: {
        type: Map, // almacena un objeto clave-valor
        of: String,
        required: true
    }
});

export const DatesModel = model('dates', DatesSchema);
