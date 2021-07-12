const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');



router.post('/', validateToken, async (req, res) => {

    let { nome, alias, descricao, school, mentores } = req.body
    /* console.log(nome, alias, descricao, school, mentores); */
    if (nome !== '' && alias !== '' && descricao !== '' && school.length > 0) {
        try {

            let nova_team_id = await db.query("INSERT INTO team (name, alias, descripton, school_id, url) VALUES (?, ?, ?, ?, '1.png')", [nome, alias, descricao, school[0].id], (err, result1) => {
                //Se der erro, devolver o mesmo
                if (err) {
                    console.log(err);
                    res.json({
                        error: err
                    });
                } else {
                    try {
                        db.query("INSERT INTO user_has_team (user_id, team_id, is_owner) VALUES (?, ?, 1)", [req.userid, result1.insertId], (err, result) => {
                            //Se der erro, devolver o mesmo
                            if (err) {
                                console.log(err);
                                res.json({
                                    error: err
                                });
                            } else {
                                if (mentores.length > 0) {
                                    mentores.forEach(mentor => {
                                        try {
                                            db.query("INSERT INTO user_has_team (user_id, team_id, is_owner) VALUES (?, ?, 0)", [mentor.value, result1.insertId], (err, result) => {
                                                //Se der erro, devolver o mesmo
                                                if (err) {
                                                    console.log(err);
                                                    res.json({
                                                        error: err
                                                    });
                                                } else {



                                                }

                                            })

                                        } catch (error) {

                                        }
                                    });
                                    res.json({
                                        success: 'A sua equipa foi criada com sucesso! O próximo passo é criar a primeira sessão.',
                                        idEquipa: result1.insertId
                                    })
                                } else {
                                    res.json({
                                        success: 'A sua equipa foi criada com sucesso! O próximo passo é criar a primeira sessão.',
                                        idEquipa: result1.insertId
                                    })
                                }

                            }

                        })

                    } catch (error) {

                    }

                }

            })

        } catch (error) {

        }

    }


});

router.post('/carregarMentores', validateToken, async (req, res) => {

    let { pesquisa } = req.body;

    try {
        const novaSessao = await db.query("SELECT user.id, user.email, user.name, avatar.url, avatar.alt FROM user INNER JOIN avatar ON avatar_id = avatar.id WHERE user.school_id = (SELECT school_id AS Teacher_school FROM user WHERE user.id = ?) AND user.email = ? AND user.id <> ?", [req.userid, pesquisa, req.userid], (err, result) => {
            //Se der erro, devolver o mesmo
            if (err) {
                console.log(err);
                res.json({
                    error: err
                });
            } else {
                console.log(result);
                res.json({
                    success: result
                })
            }

        })

    } catch (error) {

    }
})

module.exports = router;