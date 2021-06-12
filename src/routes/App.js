import React from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../components/layout/Login';
import NotFound from '../components/layout/NotFound.jsx';
import Layout from '../components/layout/Layout';
import Cliente from '../components/modulos/clientes/Cliente';
import { Provider } from 'react-redux';
import store  from '../store';



const App = () => {
    const pathname = '/login'
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/clientes" component={Cliente}/>
                        <Route exact path="/login" component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </Provider>
        </BrowserRouter>
    );
};
    
 
export default App;