import React from 'react'
import iconSessoes from "../../img/icons/icon_sessoes.png";
import imgComentario from "../../img/avatar/avatar_11.png"
import iconDownload from "../../img/icons/icon_download.svg";

function ResumoSessao({ sessao, status }) {
    const { nome, descricao, subject, factos_ficcionais, factos_reais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos, disciplina, ano } = sessao
    return (
        <>
            {status === 'completed' &&
                <>


                    <div className="conteudo">

                        <div className="conteudoResumo">
                            <div className="titulos_top_mobile">
                                <label>Descrição</label>
                            </div>

                            <div className="conteudoMid">

                                <div className="cardDescricao">
                                    <div className="topInfo">
                                        <div className="titulos">
                                            <label>{nome}</label>
                                            <p>{subject}</p>
                                            <span>{ano}</span>
                                        </div>
                                        <img className="imgSessao" src={iconSessoes} alt="" />
                                    </div>
                                    <div className="bottomInfo">
                                        <p>{descricao}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="conteudoPlano">

                                <label className="titulo">Plano Geral</label>

                                <div className="factos">

                                    <div className="factos_reais">
                                        <label className="tituloFactos">Factos Reais</label>
                                        <label className="textoFactos">{factos_reais}</label>
                                    </div>

                                    <div className="unidadeCurricolar">
                                        <label className="tituloFactos">Factos Ficcionais</label>
                                        <label className="textoFactos">{factos_ficcionais}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="conteudoComents">
                                <div className="seccaoPlano">
                                    <label className="titulo">Comentários</label>
                                </div>
                                <div className="ListaComentarios">
                                    <div className="cardComentario">
                                        <img src={imgComentario} alt="" />
                                        <div className="cardInfo">
                                            <div className="autor">
                                                <p>Joana Silva</p>
                                                <p>hora</p>
                                            </div>
                                            <div className="comentario">
                                                <p>Muito Bom mas top</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardComentario">
                                        <img src={imgComentario} alt="" />
                                        <div className="cardInfo">
                                            <div className="autor">
                                                <p>Joana Silva</p>
                                                <p>hora</p>
                                            </div>
                                            <div className="comentario">
                                                <p>Muito Bom mas top</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comentarioInput">
                                    <div className="cardComentario">

                                        <div className="cardInfo">
                                            <div className="autor">
                                                <p>Adicionar novo comentário</p>
                                            </div>
                                            <div className="comentario">
                                                <input type="text" placeholder="Escreva aqui..." />
                                            </div>
                                        </div>
                                        <img src={imgComentario} alt="" />
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

export default ResumoSessao
