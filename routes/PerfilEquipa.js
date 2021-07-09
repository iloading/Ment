const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {
    let { id: team_id } = req.body;

    try {
        const perfilequipa = await db.query("SELECT narrative.id, narrative.name, grade.year, subject FROM narrative INNER JOIN grade ON grade_id = grade.id WHERE team_id = ?;", [team_id], (err, result) => {
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


router.post('/equipa', validateToken, async (req, res) => {
    let { id: team_id } = req.body;

    try {
        const perfilequipa = await db.query("SELECT team.id, team.name, descripton, school.name AS escola FROM team INNER JOIN school ON school_id = school.id WHERE team.id = ?;", [team_id], (err, result) => {
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