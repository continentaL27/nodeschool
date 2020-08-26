
const fs = require('fs');
const path1 = require('path');

module.exports = function(path, exp, callback) {
    fs.readdir(path, function(err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file) {
            return path1.extname(file) === '.' + exp;
        })
        callback(null, list)
    })
}
// function filter(path, exp, callback) {
//     fs.readdir(path, function(err, list) {
//         if (err) {
//             return callback(err);
//         }
//
//         list = list.filter(function (file) {
//             return path1.extname(file) === '.' + exp;
//         })
//         callback(null, list)
//     })
// }
//
// module.exports.filter = filter;