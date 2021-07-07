const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/minhasEquipas', validateToken, async (req, res) => {


    try {
        const banco = await db.query("SELECT team.id, team.name, team.url, team.alias, school.name AS school_name FROM team INNER JOIN school ON team.school_id = school.id INNER JOIN user_has_team ON team.id = user_has_team.team_id  WHERE user_has_team.user_id = ? AND is_owner = 1 ORDER BY updated_at DESC;", [req.userid], (err, result) => {
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
router.post('/minhaEscola', validateToken, async (req, res) => {


    try {
        const banco = await db.query("SELECT school.id, school.name FROM school INNER JOIN user ON school_id = school.id WHERE user.id = ?", [req.userid], (err, result) => {
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