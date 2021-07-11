import React from 'react'
import iconDownload from "../../img/icons/icon_download.svg";
import iconSessoes from "../../img/icons/icon_sessoes.png";

function RecursosSessao({ sessao, status }) {
    const { nome, descricao, subject, factos_ficcionais, factos_reais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos, disciplina, ano } = sessao
    return (
        <>

            {status === 'completed' &&
                <>

                    <div className="conteudo">

                        <div className="conteudoRecursos">
                            <div className="titulos_top_mobile">
                                <label>{nome}</label>
                                <img className="imgSessao" src={require(`../../img/disciplinas/${sessao.disciplina_url}`).default} alt={sessao.disciplina} />
                            </div>

                            <div className="titulos_top">
                                <label>Recursos Fornecidos</label>

                            </div>
                            <div className="ficheirosPrincipais">
                                <label className="titulo1">Recursos Fornecidos</label>
                                <div className="ficheiros">
                                    <div className="caixaFicheiros">
                                        <label className="ficheiro_nome">Narrativa - '{nome}'</label>
                                        <img src={iconDownload} alt="" className="ficheiro_icon" />
                                    </div>
                                    <div className="caixaFicheiros">
                                        <label className="ficheiro_nome">Guião dos Mentores</label>
                                        <img src={iconDownload} alt="" className="ficheiro_icon" />
                                    </div>
                                    <div className="caixaFicheiros">
                                        <label className="ficheiro_nome">Material Multimédia</label>
                                        <img src={iconDownload} alt="" className="ficheiro_icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="conteudosAdicionais">

                                <label className="titulo2">Conteúdo adicional</label>
                                <div className="ficheiros">
                                    <div className="caixaFicheiros">
                                        <label className="ficheiro_nome">Exercícios</label>
                                        <img src={iconDownload} alt="" className="ficheiro_icon" />
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
                            <div className="titulos_top">
                                <label>Tornar a sessão pública</label>
                            </div>
                            <div className="botaoUpload">

                                <label>Partilhar</label>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default RecursosSessao
