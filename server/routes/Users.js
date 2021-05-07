const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

//Encriptar a Password
const bcrypt = require('bcryptjs');



router.post('/register', (req, res) => {

    const { email, password, name, school } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        db.query('INSERT INTO user (email, password, name, school, role_idrole) VALUES (?,?,?,?,?)', [email, hash, name, school, 0], (err, result) => {
            if (err) {
                console.log(err);
                res.send(err)
            }
            res.send(result)
        })
    })
})

module.exports = router;