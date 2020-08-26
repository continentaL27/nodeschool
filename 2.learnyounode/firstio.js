const fs = require('fs')
// read file
const buff = fs.readFileSync(process.argv[2])
// file to str
const str = buff.toString();

console.log(str.split("\n").length-1)