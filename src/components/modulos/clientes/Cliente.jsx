import React from 'react';
import FormAddNew from './FormAddNew';
import ListClientes from './ListClientes';

const Cliente = () => (  
        <div className="container__tabs">
        <div className="cantainer__tabs__title">
            <button><label htmlFor="tab1" id="tabppal">
                Cliente</label></button> 
             <button><label htmlFor="tab2" id="tabsecond" ><i className="fi fi-rr-eye"></i>Ver Clientes</label></button>
        </div>
        <div className="container__tabs__body">
             <input type="radio" name="tab" id="tab1" defaultChecked/>
             <div className="tab tab-1">
                <FormAddNew /> 
             </div>
             <input type="radio" name="tab"  id="tab2"/>
             <div className="tab tab-2">
                <ListClientes /> 
             </div>
        </div>
    </div>
);
 
export default Cliente;