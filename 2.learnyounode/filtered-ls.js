const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function callback(err, list) {
    if (err) console.error(err);
    for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i].toString()) === '.' + process.argv[3])
            console.log(list[i])
    }
})