const mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'bb634438aacb2d',
    host: 'eu-cdbr-west-01.cleardb.com',
    password: '1d38da54',
    database: 'heroku_acd41d977512a36?reconnect=true'
});

/* mysql://bb634438aacb2d:1d38da54@eu-cdbr-west-01.cleardb.com/heroku_acd41d977512a36?reconnect=true */

connection.connect(function (err, suc) {
    if (suc) {
        console.log(suc);
    }
    if (err) {
        console.log(err);
    };
});

/* const { Prohairesis } = require('prohairesis')
const env = require('../env');

const connection = new Prohairesis(env.CLEARDB_DATABASE_URL) */
module.exports = connection;
