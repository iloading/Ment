const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

//Encriptar a Password
const bcrypt = require('bcryptjs');

//JWT
const { createTokens } = require('../JWT');
const { validateToken } = require('../JWT')
const { verify } = require('jsonwebtoken')

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

    await db.query("SELECT idschool, agrupamento FROM school WHERE verified = 1 AND agrupamento LIKE ? ", [school], (err, result) => {
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
router.post('/courses', async (req, res) => {


    await db.query("SELECT * FROM course", (err, result) => {
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
router.post('/register', async (req, res) => {
    //Extrair o conteudo que vem no pedido de registo
    let { email, password, name, school, avatar, course, role } = req.body;


    if (isNaN(school)) {

        await db.query('INSERT INTO school (agrupamento, verified) VALUES (?, 0)', [school], (err, result) => {
            //Se der erro, devolver o mesmo
            if (err) {
                res.json({
                    error: err
                });
            } else {
                /* a var school passa a ser o novo id da school criada na BD */
                school = { insertId: result.insertId }.insertId
            }

        })

    }

    //Codificar a password
    bcrypt.hash(password, 10).then(async (hash) => {
        //Mandar o INSERT para a BD

        await db.query('INSERT INTO user (email, password, name, school_idschool, role_idrole, course_idcourse, avatar_idavatar) VALUES (?,?,?,?,?,?,?)', [email, hash, name, school, role, course, avatar], (err, result) => {
            //Se der erro, devolver o mesmo
            if (err) {
                res.status(400).json({
                    error: err
                });
            } else {

                //Se estiver correta, efetuar o login
                //Tokens
                const accessToken = createTokens({ id: result.insertId })

                /* maxAge = 365 dias */
                res.cookie('Ment-login-token', accessToken, { maxAge: 60 * 60 * 24 * 365 * 1000, httpOnly: true })
                /* const accessToken = createTokens(result.data) */

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
    await db.query('SELECT iduser, password FROM user WHERE email = ?', [email], (err, result) => {
        //Se nao houver, devolver erro
        if (result.length == 0) {
            res.status(400).json({ error: "O email que inseriu não existe" });
        } else {
            //Se houver, comparar a password
            bcrypt.compare(password, result[0].password).then((match) => {
                //Se a password estiver errada
                if (!match) {
                    //Devolver erro
                    res.status(400).json({
                        error: "Password Incorreta"
                    })
                } else {
                    //Se estiver correta, efetuar o login
                    //Tokens
                    const accessToken = createTokens(result[0])

                    /* maxAge = 365 dias */
                    res.cookie('Ment-login-token', accessToken, { maxAge: 60 * 60 * 24 * 365 * 1000, httpOnly: true })
                    /* const accessToken = createTokens(result.data) */
                    res.json({
                        success: 'LOGIN EFETUADO COM SUCESSO'
                    })
                }
            })

        }
    })




})

router.get('/getUsers', validateToken, async (req, res) => {
    try {
        const users = await db.query("SELECT * FROM user", (err, result) => {
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

    } catch (error) {

    }
})

/* Verificar se está logado */
router.get('/loggedIn', (req, res) => {
    try {
        const accessToken = req.cookies['Ment-login-token']

        if (!accessToken) return res.json(false)

        verify(accessToken, process.env.JWT_SECRECT);
        res.send(true)

    } catch (e) {
        console.log(3);
        return res.json(false)
    }
})

router.get('/logout', (req, res) => {
    res.cookie('Ment-login-token', '', {
        httpOnly: true,
        expires: new Date(0),
    }).send()
})

module.exports = router;