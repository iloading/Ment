const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');

router.post('/', validateToken, async (req, res) => {
    let { id: sessao_id } = req.body;

    try {
        const sessao = await db.query("SELECT narrative.id, narrative.name, narrative.description, narrative.subject,narrative.factos_ficcionais, narrative.factos_reais,narrative.situacao_problema, narrative.resultados_esperados, narrative.funcao_alunos_mentores, narrative.funcao_alunos_mentorandos, course.name AS disciplina, course.id AS disciplina_id, course.level AS disciplina_level,  grade.year, grade.id AS ano_id FROM narrative INNER JOIN course ON course.id = narrative.course_id INNER JOIN grade ON grade.id = narrative.grade_id WHERE narrative.id = ?;", [sessao_id], (err, result) => {
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
router.post('/editarSessao', validateToken, async (req, res) => {

    let { nome, nova_disciplina_id, subject, ano_id, descricao = '', situacao_problema = '', factos_reais = '', factos_ficcionais = '', resultados_esperados = '', funcao_alunos_mentores = '', funcao_alunos_mentorandos = '' } = req.body.dados;
    let { id } = req.body

    try {
        const novaSessao = await db.query("UPDATE narrative SET name = ?, course_id = ?, subject = ?, grade_id = ?, description = ?, factos_reais = ?, factos_ficcionais = ?, situacao_problema = ?, resultados_esperados = ?, funcao_alunos_mentores = ?, funcao_alunos_mentorandos = ? WHERE id = ?", [nome, nova_disciplina_id, subject, ano_id, descricao, factos_reais, factos_ficcionais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos, id], (err, result) => {
            //Se der erro, devolver o mesmo
            if (err) {

                res.json({
                    error: err.sqlMessage
                });
            } else {

                res.json({
                    success: 'A sua sessão foi atualizada com sucesso!',
                })
            }

        })

    } catch (error) {

    }
})

module.exports = router;