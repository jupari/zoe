const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    identificacion: {
        type: String,
        trim: true,
        unique:true
    },
    dv:{
        type:String,
        trim: true
    },
    nombres: {
        type: String,
        trim: true,
        uppercase: true,
        maxLength: 100
    },
    apellidos: {
        type: String,
        trim: true,
        uppercase: true,
        maxLength: 100
    },
    razonsocial: {
        type: String,
        trim: true,
        uppercase: true,
        maxLength: 100
    },
    telefono: {
        type: String,
        trim: true,
        maxLength:50
    },
    email: {
        type: String,
        trim:true,
        lowercase: true,
        maxLength: 100
    },
    observacion: {
        type:String,
        trim: true,
        maxLength: 200,
        uppercase: true
    },
    activo:{
        type: String,
        default: 'ACTIVO'
    }
})

module.exports = mongoose.model('Clientes', ClienteSchema);