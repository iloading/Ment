const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');


router.post('/carregarMentores', validateToken, async (req, res) => {

    let { pesquisa } = req.body;
    const pesquisaQuery = ("%" + pesquisa + "%")

    console.log(pesquisaQuery);
    console.log(req.userid);
    try {
        const novaSessao = await db.query("SELECT user.id, user.email, user.name, avatar.url, avatar.alt FROM user INNER JOIN avatar ON avatar_id = avatar.id WHERE user.school_id = (SELECT school_id AS Teacher_school FROM user WHERE user.id = ?) AND (user.name LIKE ? OR user.email LIKE ?) AND user.id <> ?", [req.userid, pesquisaQuery, pesquisaQuery, req.userid], (err, result) => {
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