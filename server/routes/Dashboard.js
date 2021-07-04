const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {

    /* console.log(req); */
    try {
        const users = await db.query("SELECT team.id, team.name, school.name AS school_name, descripton, school_id, url, is_archived, alias, created_at, updated_at FROM team INNER JOIN user_has_team ON team_id = team.id INNER JOIN school ON school.id = team.school_id WHERE user_id = ? AND is_owner = 1", [req.userid], (err, result) => {
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