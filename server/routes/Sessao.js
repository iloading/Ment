const { validateToken } = require('../JWT')

const express = require('express');

//Isto é um Route
const router = express.Router();

//Conexao à BD
const db = require('../config/db');


router.post('/', validateToken, async (req, res) => {
    let { id: sessao_id } = req.body;

    try {
        //VERIFICAR SE O UTILIZADOR PERTENCE À EQUIPA E QUE CARGO OCUPA
        const isOwner = await db.query("SELECT is_owner FROM user_has_team WHERE user_has_team.team_id = (SELECT team_id FROM narrative WHERE id = ?) AND user_has_team.user_id = ? ", [sessao_id, req.userid], (err, resultOwner) => {
            //Se der erro, devolver o mesmo
            if (err) {
                console.log(err);
                res.json({
                    error: err
                });
            } else if (resultOwner.length === 0) {
                /* SE O USER NAO ESTIVER NA EQUIPA  */
                const isPublic = async () => {
                    const sessao = await db.query("SELECT is_public FROM narrative WHERE id = ?", [sessao_id], (err, resultPublic) => {
                        //Se der erro, devolver o mesmo

                        if (err) {
                            console.log(err);
                            res.json({
                                error: err
                            });
                        } else if (resultPublic[0]?.is_public === 1) {
                            /* SE A SESSAO QUE ESTIVER A TENTAR ACEDER FOR PUBLICA FAZ O PEDIDO NORMAL */
                            const pedidoNormal = async () => {
                                const sessao = await db.query("SELECT narrative.id, narrative.name, narrative.description, narrative.subject,narrative.factos_ficcionais, narrative.factos_reais,narrative.situacao_problema, narrative.resultados_esperados, narrative.funcao_alunos_mentores, narrative.funcao_alunos_mentorandos, course.name AS disciplina, course.url AS disciplina_url, course.id AS disciplina_id, course.level AS disciplina_level,  grade.year, grade.id AS ano_id, is_public FROM narrative INNER JOIN course ON course.id = narrative.course_id INNER JOIN grade ON grade.id = narrative.grade_id WHERE narrative.id = ?;", [sessao_id], (err, result) => {
                                    //Se der erro, devolver o mesmo
                                    if (err) {
                                        console.log(err);
                                        res.json({
                                            error: err
                                        });
                                    } else {
                                        console.log('AQUI3');
                                        res.json({
                                            success: {
                                                sessao: result,
                                                is_owner: -1,
                                                is_public: 1
                                            }
                                        })
                                    }

                                })
                            }
                            pedidoNormal();
                        } else {
                            console.log('AQUI2');
                            /* SE A SESSAO QUE ESTIVER A TENTAR ACEDER FOR PRIVADA */
                            res.json({
                                error: {
                                    is_owner: -1,
                                    is_public: 0,
                                    message: 'Esta sessão é privada e ainda não pertences à equipa! Fala com o responsável para que possas ter acesso a estes conteúdos'
                                }

                            })


                        }



                    })
                }
                isPublic();

            } else {
                /* SE ELE ESTIVER NA EQUIPA */
                const pedidoNormal = async () => {
                    const sessao = await db.query("SELECT narrative.id, narrative.name, narrative.description, narrative.subject,narrative.factos_ficcionais, narrative.factos_reais,narrative.situacao_problema, narrative.resultados_esperados, narrative.funcao_alunos_mentores, narrative.funcao_alunos_mentorandos, course.name AS disciplina, course.url AS disciplina_url, course.id AS disciplina_id, course.level AS disciplina_level,  grade.year, grade.id AS ano_id, is_public FROM narrative INNER JOIN course ON course.id = narrative.course_id INNER JOIN grade ON grade.id = narrative.grade_id WHERE narrative.id = ?;", [sessao_id], (err, result) => {
                        //Se der erro, devolver o mesmo
                        if (err) {
                            console.log(err);
                            res.json({
                                error: err
                            });
                        } else {
                            console.log('AQUI');
                            res.json({
                                success: { sessao: result, is_owner: resultOwner[0].is_owner }
                            })
                        }

                    })
                }
                pedidoNormal();
            }




        })
    } catch (error) {
        console.log(error);
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

router.post('/publicarSessao', validateToken, async (req, res) => {


    let { id } = req.body

    try {
        const permissao = await db.query("SELECT is_owner, narrative.is_public, narrative.name, narrative.description, narrative.subject, narrative.course_id, narrative.factos_reais, narrative.factos_ficcionais, narrative.situacao_problema,narrative.resultados_esperados, narrative.funcao_alunos_mentores, narrative.grade_id, narrative.funcao_alunos_mentorandos FROM user_has_team INNER JOIN narrative ON narrative.team_id = user_has_team.team_id WHERE user_id = ? AND narrative.id = ?", [req.userid, id], (err, result) => {
            //Se der erro, devolver o mesmo
            if (err) {
                res.json({
                    error: err.sqlMessage
                });
            } else {

                if (result[0].is_owner === 1) {
                    if (result[0].is_public === 0) {
                        /* TODOS OS CAMPOS TEM DE ESTAR PREENCHIDO PARA TORNAR UMA SESSAO PUBLICA */
                        if (result[0].name && result[0].description && result[0].subject && result[0].course_id && result[0].factos_reais && result[0].factos_ficcionais && result[0].situacao_problema && result[0].resultados_esperados && result[0].funcao_alunos_mentores && result[0].grade_id && result[0].funcao_alunos_mentorandos) {
                            const update = async () => {
                                const publicarSessao = await db.query("UPDATE narrative INNER JOIN user_has_team ON narrative.team_id = user_has_team.team_id SET is_public = CASE WHEN user_has_team.user_id = ? AND user_has_team.is_owner = 1 THEN is_public + 1 ELSE is_public END WHERE narrative.id = ? ", [req.userid, id], (err, result) => {
                                    //Se der erro, devolver o mesmo
                                    if (err) {
                                        res.json({
                                            error: err.sqlMessage
                                        });
                                    } else {
                                        console.log(res);
                                        res.json({
                                            success: 'A sua sessão foi publicada no banco público com sucesso! ',
                                        })
                                    }

                                })
                            }
                            update()
                        } else {
                            res.json({
                                error: 'Todos os campos preenchíveis são necessários para tornar a sua sessão pública e publicá-la no banco.',
                            })
                        }

                    } else {
                        res.json({
                            error: 'A sessão já está publicada no banco público.',
                        })
                    }

                } else {
                    res.json({
                        error: 'Não tem permissão para executar esta ação',
                    })
                }
                /* console.log(res); */

            }

        })


    } catch (error) {

    }
})

module.exports = router;