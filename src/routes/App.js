import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../components/layout/Login';
import NotFound from '../components/layout/NotFound.jsx';
import Layout from '../components/layout/Layout';
import Cliente from '../components/modulos/clientes/Cliente';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/clientes" component={Cliente}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);
    
 
export default App;