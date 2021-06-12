import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { editarClienteAction,agregarClienteAction } from '../../../actions/clienteActions';

const FormAddNew = () => {

    const [cliente, setCliente]= useState({
        _id:undefined,
        identificacion:"",
        dv:"",
        nombres:"",
        apellidos:"",
        razonsocial:"",
        telefono:"",
        email:"",
        observacion:"",
        activo:true,
     });
    const dispatch = useDispatch()
    //ACCEDE AL STORE MODIFICADO CON EL CLIENTE PARA EDITAR
    let clienteStore = useSelector(state => state.clientes.cliente);
    //CUANDO SE ABRE EL FORMULARIO SIN NINGUN CLIENTE SE REALIZA LA VERIFICACION PARA QUE NO 
    // GENERE ERROR
    if (Object.keys(clienteStore).length === 0){
        clienteStore = cliente
    }

    // SE ACTUALIZA EL STATE CLIENTE PARA MOSTRARLO EN PANTALLA
    useEffect(()=>{
        setCliente(clienteStore);
    },[clienteStore]);


    //SE CAPTURA LO QUE DIGITE EL USUARIO EN EL FORMULARIO
    const onChange=(e)=>{
        setCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    //EL SUBMIT DEL FORMULARIO
    const onSubmit = (e)=>{
        e.preventDefault();
        if (cliente._id){
            dispatch ( editarClienteAction(cliente) );
            const tab2 = document.querySelector('#tab2')
            tab2.checked= true;
        }else{
            console.log(cliente)
            dispatch ( agregarClienteAction(cliente) )
            const tab2 = document.querySelector('#tab2')
            tab2.checked= true;
        }
    }

    // SE LIMPIA LOS INPUT PARA QUE EL USUARIO DIGITE NUEVAMENTE
    const limpiar = () => {
        setCliente({
            _id:undefined,
            identificacion:"",
            dv:"",
            nombres:"",
            apellidos:"",
            razonsocial:"",
            telefono:"",
            email:"",
            observacion:"",
            activo:false
         }
        )
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
                            value={cliente.apellidos}
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
                            placeholder="Obs" id="observacion" 
                        />
                </label>
            </div>
            <div className="row col-md-12 btn-zone">
                <button className="button btn-success col-md-2">Guardar</button>
                <button type="button" onClick={limpiar} className="button btn-delete col-md-2">Cancelar</button>
            </div>
        </form>
    );
}
 
export default FormAddNew;