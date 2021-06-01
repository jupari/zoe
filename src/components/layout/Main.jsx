import React from 'react';
import Header from './Header';
import ContenedorPpal from './ContenedorPpal'


const Main = ({children}) => (
    <div className="main__container__ppal">
        <Header />
        <ContenedorPpal children={children} />
    </div>
);

export default Main;