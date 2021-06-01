import React, {Fragment} from 'react';
import MenuLateral from './MenuLateral';
import Main from './Main';

const Layout = ({children}) => (  
    <>
        <MenuLateral />
        <Main children={children}/>
    </>
);

 
export default Layout;