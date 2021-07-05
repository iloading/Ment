const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');


router.post('/grausDeEnsino', validateToken, async (req, res) => {


    try {
        const grausEnsino = await db.query("SELECT * FROM grade", (err, result) => {
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

    } catch (error) {

    }
})
router.post('/', validateToken, async (req, res) => {

    let { nome: name, equipaEscolhida: team_id, DisciplinaEscolhida: course_id, conteudos: subject, grauEscolhido: grade_id } = req.body;

    try {
        const novaSessao = await db.query("INSERT INTO narrative (name, team_id, course_id, subject, grade_id) VALUES (?,?,?,?,?); ", [name, team_id, course_id.value, subject, grade_id.value], (err, result) => {
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

    } catch (error) {

    }
})

module.exports = router;