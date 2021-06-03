const express = require('express');
const app = express()
const cors = require('cors');
const { config } = require('./config/index');
const clientesApi = require('./routes/clientes');
//CONEXION CON MONGOOSE
const mongoose = require('mongoose')
const USER = encodeURIComponent(config.dbUser);
const PASSWORD =  encodeURIComponent(config.dbPassword);
const  DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}
                /${DB_NAME}?retryWrites=true&w=majority`;

//OPCIONES PARA LA CONEXION CON LA BASE DE DATOS
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName : DB_NAME  
}

//CONEXION
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, options)

//IMPLEMENTACION DE LOS CORS
app.use(cors());


//BODY PARSER
app.use(express.json());

//LLAMADO A LAS RUTAS

clientesApi(app);

app.listen(config.port, ()=>{
    console.log(`Server Escuchando url http://localhost:${config.port}`);
})