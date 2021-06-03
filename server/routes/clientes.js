const express = require('express');
const ClientesService = require('../services/clientes');
const {
    getClientesRouter,
    getClienteRouter,
    createClienteRouter,
    updateClienteRouter,
    deleteClienteRouter
} = require('../services/ClientesRouter');


function clientesApi(app){
    const router = express.Router();
    // DEFINIMOS LA RUTA
    app.use('/api/clientes', router)

    const clientes = new ClientesService();

    // CREAMOS LOS ENDPOINTS.
    router.get('/', getClientesRouter);

    router.get('/:clienteId',getClienteRouter);

    router.post('/', createClienteRouter);

    router.put('/:clienteId', updateClienteRouter );

    router.delete('/:clienteId', deleteClienteRouter);
}

module.exports = clientesApi;