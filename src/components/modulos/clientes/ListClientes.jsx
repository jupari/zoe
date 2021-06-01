import React,{Fragment} from 'react';

const ListClientes = ({nombre})=>{
    return(
        <>
            <h4 className="col-md-4">Registros de {nombre} adicionados</h4>
            <div className="row">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Identificación</th>
                            <th>Nombre/Razón Social</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>94531852</td>
                            <td>Juan Pablo Rios</td>
                            <td>555555</td>
                            <td>correo@correo.com</td>
                            <td><button className="button btn-success btn-sm"><i className="fi fi-rr-pencil"></i></button></td>
                        </tr>
                        <tr>
                            <td>94531852</td>
                            <td>Juan Pablo Rios</td>
                            <td>555555</td>
                            <td>correo@correo.com</td>
                            <td><button className="button btn-success btn-sm"><i className="fi fi-rr-pencil"></i></button></td>
                        </tr>
                        <tr>
                            <td>110031364</td>
                            <td>Leidy Viviana Londoño</td>
                            <td>555555</td>
                            <td>correo@correo.com</td>
                            <td><button className="button btn-success btn-sm"><i className="fi fi-rr-pencil"></i></button></td>
                        </tr>
                        <tr>
                            <td>1100054646</td>
                            <td>Zoe Rios</td>
                            <td>555555</td>
                            <td>correo@correo.com</td>
                            <td><button className="button btn-success btn-sm"><i className="fi fi-rr-pencil"></i></button></td>
                        </tr>
                        <tr>
                            <td>35000014</td>
                            <td>Desarrollo integrado ltda</td>
                            <td>555555</td>
                            <td>correo@correo.com</td>
                            <td><button className="button btn-success btn-sm"><i className="fi fi-rr-pencil"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListClientes;