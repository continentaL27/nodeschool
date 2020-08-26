
const fs = require('fs');
fs.readFile(process.argv[2], readLines)

function readLines(err, data) {
    if (err) return console.error(err);
    return console.log(data.toString().split('\n').length - 1);
}

