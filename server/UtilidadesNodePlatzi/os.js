const os = require('os');

console.log('Información CPU ', os.cpus());
console.table(os.cpus());
//mi controlador de red es wiffi
console.log('Dirección IP', os.networkInterfaces().lo.map(i => i.address));
console.log("Memoria Libre" , os.freemem());
console.log("Sistema Operativo", os.type);
console.log("Sistema Operativo", os.release);
console.log("Información por defecto",os.userInfo());
console.table(os.userInfo());