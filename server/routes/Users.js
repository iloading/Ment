const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

//Encriptar a Password
const bcrypt = require('bcryptjs');


router.get('/avatares', async (req, res) => {
    await db.query('SELECT * FROM avatar', (err, result) => {
        //Se der erro, devolver o mesmo
        if (err) {
            res.json({
                error: err
            });
        } else {

            res.json({
                success: result
            })
        }

    })
})
router.post('/search/schools', async (req, res) => {


    const school = ("%" + req.body.school + "%")

    await db.query("SELECT idschool, agrupamento FROM school WHERE agrupamento LIKE ? ", [school], (err, result) => {
        //Se der erro, devolver o mesmo
        if (err) {
            console.log(err);
            res.json({
                error: err
            });
        } else {

            res.json({
                success: result
            })
        }

    })
})
router.post('/register', async (req, res) => {
    //Extrair o conteudo que vem no pedido de registo
    const { email, password, name, school, avatar, course, role } = req.body;

    //Codificar a password
    bcrypt.hash(password, 10).then(async (hash) => {
        //Mandar o INSERT para a BD
        await db.query('INSERT INTO user (email, password, name, school_idschool, role_idrole, course, avatar_idavatar) VALUES (?,?,?,?,?,?,?)', [email, hash, name, school, role, course, avatar], (err, result) => {
            //Se der erro, devolver o mesmo
            if (err) {
                res.json({
                    error: err
                });
            } else {
                res.json({
                    success: "Conta criada com sucesso!"
                })
            }

        })
    })
})
//Verificar se o email já está registado durante o processo de registo
router.post('/verify-email', async (req, res) => {
    //Extrair o conteudo que vem no pedido de verificação
    const { email } = req.body;

    //Verificar se existe um email registado para essa conta
    await db.query('SELECT email FROM user WHERE email = ?', [email], (err, result) => {
        //Se nao houver, o processo de registo continua
        if (result.length == 0) {
            res.json({ success: 1 });
        } else {
            //Se houver, devolver erro
            res.json({ error: 'O email já pertence a uma conta' });
        }
    })




})





router.post('/login', async (req, res) => {
    //Extrair o conteudo que vem no pedido de login
    const { email, password } = req.body;

    //Verificar se existe um email registado para essa conta
    await db.query('SELECT email,password FROM user WHERE email = ?', [email], (err, result) => {
        //Se nao houver, devolver erro
        if (result.length == 0) {
            res.json({ error: "O email que inseriu não existe" });
        } else {
            //Se houver, comparar a password
            bcrypt.compare(password, result[0].password).then((match) => {
                //Se a password estiver errada
                if (!match) {
                    //Devolver erro
                    res.json({
                        error: "Password Incorreta"
                    })
                } else {
                    //Se estiver correta, efetuar o login
                    res.json({
                        success: "Log In Efetuado com sucesso"
                    })
                }
            })

        }
    })




})

module.exports = router;