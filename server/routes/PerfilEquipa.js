const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {

    /* console.log(req); */
    try {
        const perfilequipa = await db.query("SELECT narrative.id, narrative.name, grade.year, subject FROM narrative INNER JOIN grade ON grade_id = grade.id INNER JOIN team ON team.id = narrative.team_id INNER JOIN user_has_team ON team.id = user_has_team.team_id WHERE user_has_team.user_id = 4 AND is_owner = 1 ;", [req.userid], (err, result) => {
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