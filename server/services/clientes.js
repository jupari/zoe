const clienteSchema = require('../models/Cliente');

class ClientesService{
    async getClientes({tags}){
        const query = tags && { tags: {$in: tags}};
        const clientes = await clienteSchema.find({query}); 
        return clientes || [];
    }

    async getCliente({clienteId}){
        const cliente= await clienteSchema.findById(clienteId);
        return cliente || {};
    }

    async crearCliente({ cliente }){
       const clienteAdd = clienteSchema(cliente);
       const createdClienteId = await clienteAdd.save(cliente);
       return createdClienteId || null;
    }

    async updateCliente({ clienteId, cliente }){
        const updatedCliente = await clienteSchema.findOneAndUpdate({_id: clienteId},cliente,{new: true}); 
        return updatedCliente || {};
    }

    async deleteCliente({clienteId}){
        const deletedCliente = await clienteSchema.findOneAndDelete({_id: clienteId});
        return deletedCliente || clienteId;
    }
}

module.exports = ClientesService;