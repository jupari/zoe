const ClientesService = require('./clientes');


const getClientesRouter = async (req, res, next) => {
    const clienteSer= new ClientesService()
    const { tags } = req.query;
    try {
        const clientes = await clienteSer.getClientes({tags});
        res.json({
            data: clientes,
            message: 'Listado de Clientes'
        })
    } catch (error) {
        console.log('Error', error);
        next();
    }
}

const getClienteRouter = async (req, res, next) => {
    const clienteSer = new ClientesService();
    try {
        const { clienteId } = req.params;
        const cliente = await  clienteSer.getCliente({ clienteId });
        res.json({
            data: cliente,
            message: 'cliente'
        })
    } catch (error) {
        console.log('Error', error);
        next();
    }
}

const createClienteRouter = async (req, res, next) => {
    const clienteSer =  new ClientesService();
    try {
        const { body: cliente } = req;
        const createdCliente = await clienteSer.crearCliente({cliente});
        res.json({
            data: createdCliente,
            message: 'Cliente Creado con Exito'
        })
    } catch (error) {
        console.log('Error', error);
        next();
    }

}


const updateClienteRouter = async (req, res, next) => {
    const clienteSer= new ClientesService()
    try {
        const { clienteId } = req.params;
        const { body: cliente } =  req;
        const updatedCliente = await clienteSer.updateCliente({ clienteId, cliente });
        res.json({
            data: updatedCliente,
            message: 'Cliente Actualizado'
        })
    } catch (error) {
        console.log('Error', error)
        next();
    }

}

const deleteClienteRouter = async (req, res, next) => {
    const clienteSer = new ClientesService();
    try {
        const { clienteId } = req.params;
        const deletedCliente = await clienteSer.deleteCliente({ clienteId });
        res.json({
            data: deletedCliente,
            message: 'Cliente Eliminado'
        })
    } catch (error) {
        console.log('Error', error);
        next();
    }
}

module.exports =  {
    getClientesRouter,
    getClienteRouter,
    createClienteRouter,
    updateClienteRouter,
    deleteClienteRouter
};