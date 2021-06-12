import React from 'react';
import Modal from '../../layout/Modal';
import icoPregunta from '../../../assets/img/pregunta.png';
import icoAceptar from '../../../assets/img/OK.png'

const ModalCliente = ({configmodal,borrarCliente,closeModal,isOpen,idCliente}) => {
    const { title, icono, tipo} = configmodal;
    console.log(icono)
    console.log(tipo)

    return(
        <Modal closeModal={closeModal} isOpen={isOpen}>
            <div className="modal">
                <div className="modal--imagen">
                    {tipo==='pregunta' ?
                        <img src={icoPregunta} alt="pregunta" />:
                        <img src={icoAceptar} alt="aceptar" />}
                </div>
                <p className="modal--title">{title}</p>
            </div>
            {tipo==='pregunta'?
            <div className="modal__buttons">
                <button onClick={() => borrarCliente(idCliente)} className="button btn-success">Aceptar</button>
                <button onClick={closeModal} className="button btn-cancel">Cancelar</button>
            </div>:
            <div className="modal__buttons">
                <button onClick={closeModal} className="button btn-success">Aceptar</button>
            </div>
            }
        </Modal>
    );
}

export default ModalCliente;