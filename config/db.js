const mysql = require('mysql');
var connection = mysql.createPool({
    connectionLimit: 10,
    user: 'bc8172db4b5fd4',
    host: 'eu-cdbr-west-01.cleardb.com',
    password: 'a7c2feb2',
    database: 'heroku_866dbd40868d539'
});

/* connection.connect(function (err) {
    if (err) throw err;
});
 */
module.exports = connection;
