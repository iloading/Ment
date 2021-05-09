const express = require('express');
const cors = require('cors');
/* const mysql = require('mysql2') */
const db = require('./config/db');
const app = express();

app.use(express.json());
app.use(cors());

/* const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'mydb'
}) */

// Routes
const usersRoute = require('./routes/Users')
app.use('/auth', usersRoute);

app.get('/', async (req, res) => {
    await res.send('We are on home')
})
app.get('/insert', async (req, res) => {
    await db.query('INSERT INTO user (email, password, name, school, role_idrole) VALUES ("teste123", "123", "sam", "abel botelho", 0)', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});