import React,{useState, useEffect} from 'react';
import axios from 'axios';
import FormAddNew from './FormAddNew';
import ListClientes from './ListClientes';


const Cliente = () => {
      const URI = process.env.API;
      const [clientes, setClientes ] = useState([]);
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

      });
      

      const getClientes =  async () => {
         try {
            const respuesta = await axios(`${URI}/api/clientes`);
            const clientes = respuesta.data.data;
            setClientes(clientes)
         } catch (error) {
            console.log(error);
         }
      }

      const saveCliente = async () => {
         try {
            const respuesta = await axios.post(`${URI}/api/clientes`, cliente);
            console.log('Respuesta del srv:', respuesta.message)
         } catch (error) {
            console.log(error);            
         }
      }

      const getCliente = async (id) => {
         try {
            const clires = await axios.get(`${URI}/api/clientes/${id}`)
            setCliente(clires.data.data);
         } catch (error) {
            console.log(error);
         }
      }

      const updateCliente = async (id, cliente) =>{
         try {
            const updatedCliente = await axios.put(`${URI}/api/clientes/${id}`, cliente)
         } catch (error) {
            console.log(error);
         }
      }

      const deleteCliente = async (id) =>{
         try {
            const deletedCliente = await axios.delete(`${URI}/api/clientes/${id}`);
         } catch (error) {
            console(error);
         }
      }


      useEffect(  ()=>{
         getClientes(); 
      },[clientes])

      return (
        <div className="container__tabs">
            <div className="cantainer__tabs__title">
               <button><label htmlFor="tab1" id="tabppal">
                  Cliente</label></button> 
               <button><label htmlFor="tab2" id="tabsecond" ><i className="fi fi-rr-eye"></i>Ver Clientes</label></button>
            </div>
            <div className="container__tabs__body">
                  <input type="radio" name="tab" id="tab1" defaultChecked/>
                  <div className="tab tab-1">
                     <FormAddNew cliente={cliente} setCliente={setCliente} saveCliente={saveCliente} updateCliente={updateCliente} /> 
                  </div>
                  <input type="radio" name="tab"  id="tab2"/>
                  <div className="tab tab-2">
                     <ListClientes listClientes={clientes} getCliente={getCliente} deleteCliente={deleteCliente}/> 
                  </div>
            </div>
         </div>
      )
};
 
export default Cliente;