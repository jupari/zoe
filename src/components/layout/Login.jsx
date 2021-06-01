import React from 'react';
import logo from '../../assets/img/logo.png';

const Login = () => (
    <section className="grid content">
            <section className="main__container">
                <article className="main__container__login">
                    <div className="main__container__login--titulo">
                        <img src={logo} alt="Logo"/>
                        
                    </div>
                    <div className="main__container__login--body">
                        <form action="#">
                            <div className="input-login">
                                <label for="user">Usuario</label>
                                <input type="text" id="user" placeholder="Usuario"/>
                            </div>
                            <div className="input-login">
                                <label for="password">Contraseña</label>
                                <input type="password" id="password" placeholder="Contraseña"/>
                            </div>
                            <div className="login__submit">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </article>
                <p>Contactenos para asesorarlo @juanpabloRios 3174925199</p>
            </section>
    </section>
);

 
export default Login;