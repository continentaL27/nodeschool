const http = require('http');

const response = http.get(process.argv[2], function callback(response) {
    response.setEncoding('utf8')
    response.on('data', function (data) {
        console.log(data);
    })
})