import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isOpen, children,closeModal}) =>{
    if(isOpen){
        return ReactDOM.createPortal(
            <div className="modal__container">
                <div className="modal__container__body">
                    <button onClick={closeModal} className="modal__container__body--close">X</button>
                        {children}
                </div>
            </div>,
            document.getElementById('modal')
        );
    }
    else{
        return null
    }

}

export default Modal;