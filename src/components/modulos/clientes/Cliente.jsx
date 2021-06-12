import React,{useState, useEffect} from 'react';
import axios from 'axios';
import FormAddNew from './FormAddNew';
import ListClientes from './ListClientes';


const Cliente = () => {
      const URI = process.env.API;
      
      
      const [isOpen, setIsOpen] = useState(false);

      const openModal = () => {
         setIsOpen(true)
      }

      const closeModal = () => {
         setIsOpen(false)
      }

      const [configmodal, setModal] = useState({
         title:"",
         icono:"",
         tipo:""
      });

      const handleModal = (info) =>{
         setModal(
            {
               title:info.title,
               icono:info.icono,
               tipo: info.tipo
            }
         );
      }

      const getClientes =  async () => {
         try {

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
            //setCliente(clires.data.data);
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
            closeModal()
         } catch (error) {
            console.log('Erro deleteCliente: ',error);
         }
      }

      return (
        <div className="container__tabs">
            <div className="cantainer__tabs__title">
               <button><label htmlFor="tab1" id="tabppal">
                  Cliente</label></button> 
               <button><label htmlFor="tab2" id="tabsecond" ><i className="fi fi-rr-eye"></i>Ver Clientes</label></button>
            </div>
            <div className="container__tabs__body">
                  <input type="radio" name="tab" id="tab1" defaultChecked/>
                  <div className="tab tab-1 table-responsive">
                     <FormAddNew
                        saveCliente={saveCliente} 
                        updateCliente={updateCliente} 
                        isOpen={isOpen}
                        closeModal={closeModal}
                        openModal={openModal}
                        configmodal={configmodal}
                        handleModal={handleModal}
                     /> 
                  </div>
                  <input type="radio" name="tab"  id="tab2"/>
                  <div className="tab tab-2 table-responsive">
                     <ListClientes 
                        getCliente={getCliente} 
                        deleteCliente={deleteCliente}
                        isOpen={isOpen}
                        openModal={openModal}
                        closeModal={closeModal}
                        configmodal={configmodal}
                        handleModal={handleModal}
                     /> 
                  </div>
            </div>
         </div>
      )
};
 
export default Cliente;