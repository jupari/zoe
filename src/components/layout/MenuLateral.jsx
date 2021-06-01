import React, { Fragment } from 'react';
import logo from '../../assets/img/logo.png'

const MenuLateral = () => (
    <>
       <input type="checkbox"  id="nav-toggle"/>
       <div className="sidebar" id="menu_lateral">
            <div className="sidebar__logo__container">
                <div className="sidebar__logo">
                    <img src={logo} alt="Logo empresa"/>
                </div>
            </div>
            <nav className="sidebar__nav">
                <ul className="sidebar__nav__opciones">
                    <li>
                        <a href="#" className="activo">
                            <i className="fi-rr-home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fi-rr-apps"></i>
                            <span>Modulos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fi-rr-document-signed"></i>
                            <span>Reportes</span> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fi-rr-settings"></i>
                            <span>Configuración</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
);

export default MenuLateral;