/* const { Readable } = require('stream');

const readStrem = new Readable()


readStrem.push(`${0/0}`.repeat(10).concat('Pablito Clavo un clavito'));
readStrem.push(null);

readStrem.pipe(process.stdout); */

//READABLESTREM POR DEMANDA

const { Readable } = require('stream');

const readS = new Readable({
    read(size){
        setTimeout(()=>{
            if (this.currentCharCode > 90){
                this.push(null);
                return;
            }
        
            this.push(String.fromCharCode(this.currentCharCode++));
        },200)
    }
});

readS.currentCharCode=65;
readS.pipe(process.stdout);
