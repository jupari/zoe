import React from 'react';
import notify from '../../assets/icons/notify-icon.png'
import foto_perfil from '../../assets/img/foto-perfil.jpg'

const Header = () => (
    <header className="header">
        <div className="header__menu" id="menuhi">
            <label htmlFor="nav-toggle">
                <i className="fi-rr-align-justify"></i>
            </label>   
        </div>
        <div className="header__perfi__buscador">
            <span className="fr fi-rr-search"></span>
            <input type="search" placeholder="Buscar aquí" />
        </div>                
        <div className="header__perfil__container">
            <div className="header__perfil__notificacion">
                <img src={notify} alt="notificacion"/>
            </div>
            <div className="header__perfil">
                <div className="header__perfil__imagen">
                    <div className="header__perfil__imagen--foto">
                        <img src={foto_perfil}  alt="foto de perfil"/>
                    </div>
                    <div className="header__perfil__opciones">
                        <p className="header__perfil__imagen--nombre"><a href="#">Juan Pablo R.</a></p>
                        <ul className="header__perfil__opciones--lista">
                            <li><a href="#">Perfil</a></li>
                            <li><a href="#">Cerrar Sesion</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
export default Header;