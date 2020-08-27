const bufferList = require('bl');
const http = require('http')

http.get(process.argv[2], (response) => {
    response.pipe(bufferList( function (err, data) {
        if (err) console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
})