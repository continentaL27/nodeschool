
const mymodule = require('./module');
const dir = process.argv[2];
const exp = process.argv[3];
mymodule(dir, exp, function (err, list) {
    if (err) {
        return console.error(err);
    }
    list.forEach(function (file) {
        console.log(file);
    })
})