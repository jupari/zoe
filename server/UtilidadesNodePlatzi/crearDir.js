const fs = require('fs');

fs.mkdir(__dirname +'jprios',{ recursive: true}, err=>{
    if (err){
        return console.log(err);
    }
});