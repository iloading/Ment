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

    let { nome: name, equipaEscolhida: team_id, DisciplinaEscolhida: course_id, conteudos: subject, grauEscolhido: grade_id, descricao: description, situacao_problema, factos_reais, factos_fic: factos_ficcionais, resultados_esperados, funcao_mentores: funcao_alunos_mentores, funcao_mentorandos: funcao_alunos_mentorandos } = req.body;

    try {
        const novaSessao = await db.query("INSERT INTO narrative (name, team_id, course_id, subject, grade_id, description, factos_reais, factos_ficcionais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos) VALUES (?,?,?,?,?,?,?,?,?,?,?,?); ", [name, team_id, course_id.value, subject, grade_id.value, description, factos_reais, factos_ficcionais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos], (err, result) => {
            //Se der erro, devolver o mesmo
            if (err) {
                console.log(err);
                res.json({
                    error: err
                });
            } else {

                res.json({
                    success: 'A sua sessão foi criada com sucesso!',
                })
            }

        })

    } catch (error) {

    }
})

module.exports = router;