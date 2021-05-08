const mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'mydb'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;



/* const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'mydb'
})

module.exports = db; */