import {
    COMENZAR_DESCARGA_CLIENTES, 
    DESCARGA_CLIENTES_EXITO,
    DESCARGA_CLIENTES_ERROR,
    OBTENER_CLIENTE,
    COMENZAR_EDICION_CLIENTE,
    EDITAR_CLIENTE_EXITO,
    EDITAR_CLIENTE_ERROR,
    COMENZAR_ELIMINAR_CLIENTE,
    ELIMINAR_CLIENTE_EXITO,
    ELIMINAR_CLIENTE_ERROR,
    AGREGAR_CLIENTES,
    AGREGAR_CLIENTES_EXITO,
    AGREGAR_CLIENTES_ERROR
    
}
from '../types';
import clienteAxios from '../config/axios';

//ACTION PARA CONSULTAR LOS CLIENTES EXISTENTES
export function descargarClientes(){
    return async (dispatch) => {
        dispatch( consultarClientes() );
        try {
            const respuesta = await clienteAxios.get('/api/clientes');
            dispatch ( descargarClientesExito(respuesta.data.data));
        } catch (error) {
            dispatch ( descargarClientesError(error) );
        }
    } 
}

const consultarClientes = () => ({
    type: COMENZAR_DESCARGA_CLIENTES,
    payload: true

})

const descargarClientesExito = clientes =>({
    type: DESCARGA_CLIENTES_EXITO,
    payload: clientes
})

const descargarClientesError = (error) => ({
    type: DESCARGA_CLIENTES_ERROR,
    payload: true
})

//ACTION PARA TRAER LA INFORMACION DEL CLIENTE QUE SE VA A EDITAR
export function editarClientes(cliente){
    return async(dispatch) => {
        dispatch (obtenerCliente(cliente))
    }
}

const obtenerCliente = (cliente) => ({
    type: OBTENER_CLIENTE,
    payload: cliente
})

// ACTION PARA EDITAR EL CLIENTE MODIFICADO

export function editarClienteAction(cliente){
    return async (dispatch) =>{
        dispatch( editarCliente() );
        try {
            await clienteAxios.put(`/api/clientes/${cliente._id}`, cliente);
            dispatch ( editarClienteExito(cliente) );
        } catch (error) {
            dispatch ( editarClienteError())
        }
    }
}

const editarCliente = () => ({
    type: COMENZAR_EDICION_CLIENTE
});

const editarClienteExito=(cliente)=> ({
    type: EDITAR_CLIENTE_EXITO,
    payload: cliente
})

const editarClienteError=()=> ({
    type: EDITAR_CLIENTE_ERROR,
    payload: true
})

// ACTION PARA ELIMINAR CLIENTE
export function deleteCliente(id){
    return async(dispatch) => {
        dispatch( elimiarCliente() )
        try {
            await clienteAxios.delete(`/api/clientes/${id}`);
            dispatch( elimiarClienteExito(id) );
        } catch (error) {
            dispatch ( elimiarClienteError() )
        }
    }
}

const elimiarCliente=()=> ({
    type: COMENZAR_ELIMINAR_CLIENTE,
    payload: true
})

const elimiarClienteExito=(id)=> ({
    type: ELIMINAR_CLIENTE_EXITO,
    payload: id
})

const elimiarClienteError=()=> ({
    type: ELIMINAR_CLIENTE_ERROR,
})

//ACTION PARA AGREGAR CLIENTE
export function agregarClienteAction(cliente){
    return async (dispatch)=> {
        dispatch( agregarCliente() )
        try {
            const respuesta = await clienteAxios.post(`/api/clientes`, cliente);
            console.log(respuesta.data.data)
            dispatch ( agregarClienteExito(respuesta.data.data) );
        } catch (error) {
            dispatch ( agregarClienteError() );
        }
    }
}

const agregarCliente=()=> ({
    type: AGREGAR_CLIENTES,
})

const agregarClienteExito=(cliente)=> ({
    type:AGREGAR_CLIENTES_EXITO,
    payload: cliente
})

const agregarClienteError=()=> ({
    type: AGREGAR_CLIENTES_ERROR,
})


