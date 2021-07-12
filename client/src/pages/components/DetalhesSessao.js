import React from 'react'
import iconDownload from "../../img/icons/icon_download.svg";
import iconSessoes from "../../img/icons/icon_sessoes.png";

function DetalhesSessao({ sessao, status, toggle }) {
    const { subject, factos_ficcionais, factos_reais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos, ano, nome, disciplina } = sessao
    return (
        <>

            {status === 'completed' &&
                <>

                    <div className="conteudo">
                        <div className="conteudoDetalhes">

                            <div className="titulos_top_mobile">
                                <label>{nome}</label>
                                <img className="imgSessao" src={require(`../../img/disciplinas/${sessao.disciplina_url}`).default} alt={sessao.disciplina} />
                            </div>
                            <div className="titulos_top">
                                <label>Plano Geral</label>

                            </div>
                            <div className="conteudoPlano">
                                <div className="detalhesConteudo">

                                    <div className="detalhes">
                                        <label className="titulo1">Plano Geral</label>
                                        <div className="caixaTexto">
                                            <label className="detalhes_titulo">Factos Reais</label>
                                            <span className="detalhes_texto">{factos_reais}</span>
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

                                    {/* <div className="detalhes">
                                        <label className="titulo2">Detalhes</label>
                                        <div className="caixaTexto">
                                            <label className="detalhes_titulo">Ano da escolaridade</label>
                                            <span className="detalhes_texto">{ano}</span>
                                            <label className="detalhes_titulo">Unidade Curricular</label>
                                            <span className="detalhes_texto">{disciplina}</span>
                                            <label className="detalhes_titulo">Matéria Abordada</label>
                                            <span className="detalhes_texto">{subject} </span>
                                            <label className="detalhes_titulo">Agrupamento</label>
                                            <span className="detalhes_texto">Agrupamento de Escolas Carlos Amarante</span>
                                            <label className="detalhes_titulo">Escola</label>
                                            <span className="detalhes_texto">Escola Secundária Carlos Amarante</span>
                                            <label className="detalhes_titulo">Equipa</label>
                                            <span className="detalhes_texto">Os Aventureiros</span>
                                            <label className="detalhes_titulo">Professor Responsável</label>
                                            <span className="detalhes_texto">Xtor Miguel Vilelelelele</span>
                                        </div>


                                    </div> */}



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
                            {sessao.is_public === 0 &&
                                <>
                                    <div className="titulos_top">
                                        <label>Tornar a sessão pública</label>
                                    </div>
                                    <div className="botaoUpload" onClick={toggle}>

                                        <label>Partilhar</label>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                </>
            }
        </>

    )
}

export default DetalhesSessao
