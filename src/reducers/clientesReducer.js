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

const initialState = {
    clientes:[],
    cliente:{},
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case COMENZAR_DESCARGA_CLIENTES:
            return {
                ...state,
                loading: action.payload
            }
        case DESCARGA_CLIENTES_EXITO:
            return {
                ...state,
                clientes: [...state.clientes, action.payload],
                loading:false
            }
        case ELIMINAR_CLIENTE_ERROR:
        case EDITAR_CLIENTE_ERROR:
        case DESCARGA_CLIENTES_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            }
        case OBTENER_CLIENTE:
            return {
                ...state,
                cliente: action.payload
            }
        case AGREGAR_CLIENTES:
        case COMENZAR_ELIMINAR_CLIENTE:    
        case COMENZAR_EDICION_CLIENTE:
            return {
                ...state,
                loading: true,
            }
        case EDITAR_CLIENTE_EXITO:
            return {
                ...state,
                loading:false,
                cliente:null,
                clientes: state.clientes.map(cliente => 
                    cliente._id===action.payload._id ? cliente=action.payload: cliente
                    )
            }
        case ELIMINAR_CLIENTE_EXITO:
            return {
                ...state,
                loading:false,
                clientes: state.clientes.filter(cliente=> cliente._id !== action.payload)
            }
        case AGREGAR_CLIENTES_EXITO:
            return {
                ...state,
                loading:false,
                clientes:[...state.clientes, action.payload]
            }
        default:
            return state;
    }
}