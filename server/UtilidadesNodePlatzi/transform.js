const { Transform } = require('stream');

const trans= new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase())
        callback();
    }
})

process.stdin.pipe(trans).pipe(process.stdout);