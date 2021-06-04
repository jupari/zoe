import React,{useState, useEffect} from 'react';


const FormAddNew = ({cliente, setCliente,saveCliente,updateCliente}) => {
    const onChange=(e)=>{
        setCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if (cliente._id){
            updateCliente(cliente._id, cliente)
        }else{
            saveCliente();            
        }
    }

    const limpiar = () => {

    }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <label htmlFor="identificacion" className="campo-form col-md-3">
                    <span>Nit/Identificación</span>
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Identificacón" 
                            id="identificacion" 
                            name="identificacion"
                            value={cliente.identificacion}
                            onChange={onChange}  
                            autoComplete="on"/>
                </label>
                <label htmlFor="dv" className="campo-form col-md-1">
                    <span>DV</span>
                    <input  type="text" 
                            className="form-control" 
                            placeholder="DV" 
                            id="dv" 
                            value={cliente.dv}
                            name="dv"
                            onChange={onChange}  
                            autoComplete="on"/>
                </label>
                <label htmlFor="nombres" className="campo-form col-md-3">
                    <span>Nombres</span>
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Nombres" 
                            id="nombres" 
                            value={cliente.nombres}
                            name="nombres"
                            onChange={onChange} 
                            autoComplete="on"/>
                </label>
                <label htmlFor="apellidos" className="campo-form col-md-3">
                    <span>Apellidos</span>
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Apellidos" 
                            id="apellidos" 
                            value={cliente.Apellidos}
                            name="apellidos"
                            onChange={onChange} 
                            autoComplete="on"/>
                </label>
            </div>
            <div className="row">
                <label htmlFor="razosocial" className="campo-form col-md-3">
                    <span>Razón Social</span>
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Razon Social" 
                            id="razosocial"
                            value={cliente.razonsocial}
                            name="razonsocial"
                            onChange={onChange}   
                            autoComplete="on"/>
                </label>
                <label htmlFor="telefono" className="campo-form col-md-3">
                    <span>Teléfono</span>
                    <input  type="tel" 
                            className="form-control" 
                            placeholder="teléfono" 
                            id="telefono" 
                            value={cliente.telefono}
                            name="telefono"
                            onChange={onChange} 
                            autoComplete="on"/>
                </label>
                <label htmlFor="email" className="campo-form col-md-3">
                    <span>Email</span>
                    <input  type="email" 
                            className="form-control" 
                            placeholder="@email" 
                            id="email" 
                            value={cliente.email}
                            name="email"
                            onChange={onChange}
                            autoComplete="on"/>
                </label>
            </div>
            <div className="row">
                <label htmlFor="observacion" className="campo-form col-md-12">
                    <span>Observación</span>
                    <input  type="text" 
                            className="form-control"
                            id="observacion" 
                            value={cliente.observacion}
                            name="observacion"
                            onChange={onChange}
                            placeholder="Obs" id="observacion" />
                </label>
            </div>
            <div className="row">
                <button className="button btn-success">Guardar</button>
                <button type="button" onClick={limpiar} className="button btn-delete">Cancelar</button>
            </div>
        </form>
    );
}
 
export default FormAddNew;