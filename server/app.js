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


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});