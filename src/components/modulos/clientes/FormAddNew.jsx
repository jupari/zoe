import React from 'react';


const FormAddNew = () => {
    return (
        <form action="#">
            <div className="row">
                <label htmlFor="identificacion" className="campo-form col-md-3">
                    <span>Nit/Identificación</span>
                    <input type="text" className="form-control" placeholder="Identificacón" id="identificacion"  autoComplete="on"/>
                </label>
                <label htmlFor="dv" className="campo-form col-md-1">
                    <span>DV</span>
                    <input type="text" className="form-control" placeholder="DV" id="dv" autoComplete="on"/>
                </label>
                <label htmlFor="nombres" className="campo-form col-md-3">
                    <span>Nombres</span>
                    <input type="text" className="form-control" placeholder="Nombres" id="nombres" autoComplete="on"/>
                </label>
                <label htmlFor="apellidos" className="campo-form col-md-3">
                    <span>Apellidos</span>
                    <input type="text" className="form-control" placeholder="Apellidos" id="Apellidos" autoComplete="on"/>
                </label>
            </div>
            <div className="row">
                <label htmlFor="razosocial" className="campo-form col-md-3">
                    <span>Razón Social</span>
                    <input type="text" className="form-control" placeholder="Razon Social" id="razosocial"  autoComplete="on"/>
                </label>
                <label htmlFor="telefono" className="campo-form col-md-3">
                    <span>Teléfono</span>
                    <input type="tel" className="form-control" placeholder="teléfono" id="telefono" autoComplete="on"/>
                </label>
                <label htmlFor="email" className="campo-form col-md-3">
                    <span>Email</span>
                    <input type="email" className="form-control" placeholder="@email" id="email" autoComplete="on"/>
                </label>
            </div>
            <div className="row">
                <label htmlFor="observacion" className="campo-form col-md-12">
                    <span>Observación</span>
                    <input type="text" className="form-control" placeholder="Obs" id="observacion" />
                </label>
            </div>
            <div className="row">
                <button className="button btn-success">Guardar</button>
                <button className="button btn-delete">Cancelar</button>
            </div>
        </form>
    );
}
 
export default FormAddNew;