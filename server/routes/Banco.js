const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {


    try {
        const banco = await db.query("SELECT narrative.id, narrative.name, subject, grade.year, team_id, team.name AS team_name, course.name AS disciplina, course.url AS disciplina_url, (SELECT COUNT(likes.narrative_id) FROM likes WHERE narrative.id = likes.narrative_id) AS likes, (SELECT COUNT(comments.narrative_id) FROM comments WHERE narrative.id = comments.narrative_id) AS comments FROM narrative INNER JOIN grade ON grade_id = grade.id INNER JOIN team ON team_id = team.id INNER JOIN course ON course_id = course.id  WHERE narrative.is_public = 1 ;", [req.userid], (err, result) => {
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