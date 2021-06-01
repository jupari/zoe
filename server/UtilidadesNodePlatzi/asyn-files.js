const fs = require('fs');

   const file = process.argv[2];

    const content = fs.readFile(file, (err,cont)=>{
        if(err){
            return console.log(err);
        }
        const lines = cont.toString().split('\n').length;

        console.log(lines)
    });

    
