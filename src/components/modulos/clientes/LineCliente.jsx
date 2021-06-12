import React from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarClientes,deleteCliente } from '../../../actions/clienteActions';

const LineCliente = ({cliente}) => {

    const history = useHistory(); 
    const dispatch = useDispatch();

    const redirectEdit=(cliente)=>{
        dispatch( editarClientes(cliente) ) 
        //history.push(`/clientes/edit/${cliente._id}`);
        const tab1 = document.querySelector('#tab1')
        tab1.checked= true;
    }

    const redirectDelete=(id)=>{
        dispatch(deleteCliente(id))
        //history.push(`/clientes/delete/${id}`);
    }
    return (  
        <tr>
            <td className="ocultar" id="id" name="id">{cliente._id}</td> 
            <td className="text-center">{cliente.identificacion}</td>
            <td className="text-center">{cliente.nombres}</td>
            <td className="text-center">{cliente.apellidos}</td>
            <td className="text-center">{cliente.razonsocial}</td>
            <td className="text-center">{cliente.telefono}</td>
            <td className="text-center">{cliente.email}</td>
            <td className="text-center">{cliente.observacion}</td>
            <td className="d-flex d-centrar"><button type="button" className="button btn-success btn-sm" onClick={()=> redirectEdit(cliente)}><i className="fi fi-rr-pencil"></i></button>
                <button type="button" className="button btn-delete btn-sm" onClick={()=> redirectDelete(cliente._id)}><i className="fi fi-rr-trash"></i></button>
            </td>
        </tr> 
    );
}
 
export default LineCliente;