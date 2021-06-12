import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : process.env.API
});

export default clienteAxios;