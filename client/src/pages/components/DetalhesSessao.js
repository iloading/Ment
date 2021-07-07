import React from 'react'
import iconDownload from "../../img/icons/icon_download.svg";

function DetalhesSessao({ sessao, status }) {
    const { nome, descricao, subject, factos_ficcionais, factos_reais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos, disciplina, ano } = sessao
    return (
        <>

            {status === 'completed' &&
                <>

                    <div className="conteudo">
                        <div className="conteudoDetalhes">
                            <div className="titulos_top">
                                <label>Plano Geral</label>

                            </div>
                            <div className="conteudoPlano">
                                <div className="detalhesConteudo">

                                    <div className="detalhes">
                                        <label className="titulo1">Plano Geral</label>
                                        <div className="caixaTexto">
                                            <label className="detalhes_titulo">Factos Ficcionais</label>
                                            <span className="detalhes_texto">{factos_ficcionais}</span>
                                            <label className="detalhes_titulo">Situação Problema</label>
                                            <span className="detalhes_texto">{situacao_problema}</span>
                                            <label className="detalhes_titulo">Resultados Esperados</label>
                                            <span className="detalhes_texto">{resultados_esperados}</span>
                                            <label className="detalhes_titulo">Papel dos Alunos Mentores</label>
                                            <span className="detalhes_texto">{funcao_alunos_mentores}</span>
                                            <label className="detalhes_titulo">Papel dos Alunos Mentorandos</label>
                                            <span className="detalhes_texto">{funcao_alunos_mentorandos}</span>
                                        </div>


                                    </div>

                                    <div className="detalhes">
                                        <label className="titulo2">Detalhes</label>
                                        <div className="caixaTexto">
                                            <label className="detalhes_titulo">Ano da escolaridade</label>
                                            <span className="detalhes_texto">{ano}</span>
                                            <label className="detalhes_titulo">Unidade Curricular</label>
                                            <span className="detalhes_texto">{subject}</span>
                                            <label className="detalhes_titulo">Matéria Abordada</label>
                                            <span className="detalhes_texto">Organizational structure of the British Isles </span>
                                            <label className="detalhes_titulo">Agrupamento</label>
                                            <span className="detalhes_texto">Agrupamento de Escolas Carlos Amarante</span>
                                            <label className="detalhes_titulo">Escola</label>
                                            <span className="detalhes_texto">Escola Secundária Carlos Amarante</span>
                                            <label className="detalhes_titulo">Equipa</label>
                                            <span className="detalhes_texto">Os Aventureiros</span>
                                            <label className="detalhes_titulo">Professor Responsável</label>
                                            <span className="detalhes_texto">Xtor Miguel Vilelelelele</span>
                                        </div>


                                    </div>



                                </div>

                            </div>







                        </div>
                        <div className="areaDownload">
                            <div className="titulos_top">
                                <label>Descarregar</label>
                            </div>
                            <div className="descarregar">
                                <div className="download">
                                    <label>Descarregar a pasta</label>
                                    <img src={iconDownload} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            }
        </>

    )
}

export default DetalhesSessao
