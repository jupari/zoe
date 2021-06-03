const clienteSchema = require('../models/Cliente');

class MongoLib {
    constructor(){
        this.collection='clientes';
        this.db 
    }
    // SE PREPARA LA CONEXION CON UN SINGLETON
    async getAll(query){
         const clientes = await clienteSchema.find();
         return clientes;
    }
    

}

module.exports = MongoLib;