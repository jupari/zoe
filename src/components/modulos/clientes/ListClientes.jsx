import React,{ Fragment, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {descargarClientes} from '../../../actions/clienteActions';
import LineCliente from './LineCliente';


const ListClientes = ()=>{

    const dispatch = useDispatch();

    let clientes=[];

    useEffect(()=>{
        const traerClientes = () => dispatch ( descargarClientes() );
        traerClientes();

    },[])

    const clientesws = useSelector(state => state.clientes.clientes);
    clientesws.map(cliente =>{
        clientes = cliente
    })
      
    const editarCliente = (e) =>{
        const row = e.target.parentNode.parentNode.parentNode;
        const id = row.children[0].innerHTML
        getCliente(id);
        
    }
    
    const [idCliente, setIdCliente]= useState(0);

    const selIdCliente = (e) =>{
        const row = e.target.parentNode.parentNode.parentNode;
        const id = row.children[0].innerHTML
        if(id.length < 30 ){
            setIdCliente(id);
            handleModal({
                title: "Esta seguro de Eliminar el Cliente",
                icono: "../../../assets/img/delete.png",
                tipo: "pregunta"
            })
            openModal();
        }
    }

    const borrarCliente = (id) =>{
        deleteCliente(id);
    }

    return(
        <>
            <div className="btn-zone">
                <h3 className="col-md-3">Clientes Registrados.</h3>
                <input type="text" 
                       className="text-control col-md-4" 
                       id="valor-buscar" 
                       name="valor-buscar" 
                       placeholder="Buscar"/>
            </div>

            <div className="row">
                <table className="table table-bordered table-hover table-striped table-responsive">
                    <thead>
                        <tr>
                            <th className="ocultar">Id</th>
                            <th>Identificación</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Nombre/Razón Social</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Observación</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.length > 0
                            ?(clientes.map((cliente)=>(
                                <LineCliente    
                                    key={cliente._id}
                                    cliente={cliente}
                                />
                            )))
                            :(<tr><td colSpan="6">No hay Clientes...</td></tr>)}
                    </tbody>
                </table>
                {/* <ModalCliente 
                    isOpen={isOpen} 
                    configmodal={configmodal}
                    idCliente={idCliente}
                    borrarCliente={borrarCliente}
                    closeModal={closeModal}>
                </ModalCliente>    */}
            </div>
        </>
    )
}

export default ListClientes;