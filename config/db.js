const mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'bc6050a16ba73c',
    host: 'us-cdbr-east-04.cleardb.com',
    password: 'd16badb2',
    database: 'heroku_8b30da5ebf6c579'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
