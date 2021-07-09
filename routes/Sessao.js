const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {
    let { id: sessao_id } = req.body;

    try {
        const sessao = await db.query("SELECT narrative.id, narrative.name, narrative.description, narrative.subject,narrative.factos_ficcionais, narrative.factos_reais,narrative.situacao_problema, narrative.resultados_esperados, narrative.funcao_alunos_mentores, narrative.funcao_alunos_mentorandos, course.name AS disciplina, grade.year FROM narrative INNER JOIN course ON course.id = narrative.course_id INNER JOIN grade ON grade.id = narrative.grade_id WHERE narrative.id = ?;", [sessao_id], (err, result) => {
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