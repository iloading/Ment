const express = require('express');
const mysql = require('mysql2')

const app = express();




const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'mydb'
})

app.get('/', (req, res) => {
    res.send('We are on home')
})
app.get('/insert', (req, res) => {
    db.query('INSERT INTO user (email, password, name, school, role_idrole) VALUES ("teste123", "123", "sam", "abel botelho", 0)', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});