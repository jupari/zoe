import React,{Fragment} from 'react';

const ListClientes = ({listClientes, getCliente,deleteCliente})=>{

    const editarCliente = (e) =>{
        const row = e.target.parentNode.parentNode.parentNode;
        const id = row.children[0].innerHTML
        getCliente(id);
        const tab1 = document.querySelector('#tab1')
        tab1.checked= true;
    }

    const borrarCliente = (e) =>{
        const row = e.target.parentNode.parentNode.parentNode;
        const id = row.children[0].innerHTML
        deleteCliente(id);
    }

    return(
        <>
            <h4 className="col-md-4">Clientes Registrados.</h4>
            <div className="row">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="ocultar">Id</th>
                            <th>Identificación</th>
                            <th>Nombre/Razón Social</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Observación</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listClientes.map((cliente)=>(
                            <tr key={cliente._id}>
                               <td className="ocultar" id="id" name="id">{cliente._id}</td> 
                               <td>{cliente.identificacion}</td>
                               <td>{cliente.razonsocial}</td>
                               <td>{cliente.telefono}</td>
                               <td>{cliente.email}</td>
                               <td>{cliente.observacion}</td>
                               <td> <button type="button" onClick={editarCliente} className="button btn-success btn-sm"><i className="fi fi-rr-pencil"></i>
                                    </button>
                                    <button type="button" onClick={borrarCliente} className="button btn-delete btn-sm"><i className="fi fi-rr-trash"></i>
                                    </button>
                               </td>
                           </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListClientes;