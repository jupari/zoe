/*const http = require('http');
const server = http.createServer();


server.on('request', (req,res)=>{
    res.statuscode= '200';
    res.setHeader('Content-type','text-plain');
    res.end('Hello world');
})

server.listen(8000);
console.log('Servidor escuchando en url http://localhost:8000');*/


const http=require('http');
const server =  http.createServer();

server.on('request', (req, res)=>{
    if (req.method === 'POST' && req.url == '/echo'){
        let body = [];
        req.on('data', chunk =>{
            body.push(chunk);
        })
   
        .on('end', ()=>{
           res.writeHead('200',{"Content-tupe":"text-plain"});
           body = Buffer.concat(body).toString();
           res.end(body);
        })
    }else{
        res.statusCode = 404;
        res.end('Lo siento ha ocurrido un Error.');
    }
})

server.listen(8000);
console.log('Servidor escuchando en url http://localhost:8000');
