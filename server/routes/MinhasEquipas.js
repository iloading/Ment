const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {


    try {
        const minhasEquipas = await db.query("SELECT team.id,team.name, team.alias,team.school_id, school.name AS escola, (SELECT COUNT(team_id) FROM user_has_team WHERE user_has_team.team_id = team.id) AS numero_participantes FROM team INNER JOIN school ON school_id = school.id INNER JOIN user_has_team ON user_has_team.team_id = team.id WHERE  user_has_team.user_id = ? AND user_has_team.is_owner = 1;", [req.userid], (err, result) => {
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