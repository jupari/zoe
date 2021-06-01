const fs = require('fs')

fs.copyFile('otro.txt', 'otro1.txt',err=>{
    if (err){
        return console.log(err);
    }
});

