const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {
    let { id: team_id } = req.body;

    try {
        const perfilequipa = await db.query("SELECT narrative.id, narrative.name, grade.year, subject, team.name AS team_name, team.descripton, school.name AS school FROM narrative INNER JOIN grade ON grade_id = grade.id INNER JOIN team ON team.id = narrative.team_id INNER JOIN user_has_team ON team.id = user_has_team.team_id INNER JOIN school ON team.school_id = school.id WHERE user_has_team.user_id = ? AND is_owner = 1 AND team.id = ?;", [req.userid, team_id], (err, result) => {
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