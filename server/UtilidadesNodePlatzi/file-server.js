const fs = require('fs');
const http = require('http');

const server = http.createServer();
/* CON ESTA FORMA SE COME LA MEMORIA DEL SERVIDOR CON MULTIPLES PETICIONES
server.on('request', (req,res)=>{
    fs.readFile('./big',(err,data)=>{
        if (err){
            console.log('error', err);
        }else{
            res.end(data);
        }
    })
}) */
//CON ESTA FORMA SE OPTIMIZA UTILIZANDO FUNCIONES DE READWRITESTREM
server.on('request', (req,res)=>{
    const src=fs.createReadStream('./big');
    src.pipe(res)
       
})

server.listen(3000)
console.log('Servidor escuchando url http://localhost:3000')

//desde la consola se escribe curl -i http:localhost:3000 , para ver el resultado
