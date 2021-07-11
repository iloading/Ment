import React, { useEffect } from 'react'
import iconSessoes from "../../img/icons/icon_sessoes.png";
import imgComentario from "../../img/avatar/avatar_11.svg"
import imgComentario2 from "../../img/avatar/avatar_12.svg"
import iconDownload from "../../img/icons/icon_download.svg";
import { loadUser } from "../../actions/userAction";
import { useDispatch, useSelector } from 'react-redux'
function ResumoSessao({ sessao, status }) {

    const { nome, descricao, subject, factos_ficcionais, factos_reais, ano, disciplina } = sessao


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])
    const { user, status: userStatus } = useSelector(state => state.user)
    return (
        <>
            {status === 'completed' &&
                <>


                    <div className="conteudo">

                        <div className="conteudoResumo">
                            <div className="titulos_top_mobile">
                                <label>{nome}</label>
                                <img className="imgSessao" src={require(`../../img/disciplinas/${sessao.disciplina_url}`).default} alt={sessao.disciplina} />
                            </div>





                            <div className="resumoInfo">
                                <div className="tituloAno">
                                    <label>Unidade Curricular</label>
                                    <span>{disciplina}</span>
                                </div>
                                <div className="tituloAno">
                                    <label>Ano</label>
                                    <span>{ano}</span>
                                </div>
                                <div className="tituloMateria">
                                    <label>Conteúdos</label>
                                    <p>{subject}</p>
                                </div>


                                <div className="bottomInfo">
                                    <label>Descrição</label>
                                    <p>{descricao}</p>
                                </div>

                                {/*   <div className="factos_reais">
                                    <label className="tituloFactos">Factos Reais</label>
                                    <label className="textoFactos">{factos_reais}</label>
                                </div> */}

                                {/* <div className="unidadeCurricolar">
                                    <label className="tituloFactos">Factos Ficcionais</label>
                                    <label className="textoFactos">{factos_ficcionais}</label>
                                </div> */}
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
                                                <p>Parabéns pela narrativa! Foi muito útil para o desenvolvimento da minhas sessão. Os alunos adoraram.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardComentario">
                                        <img src={imgComentario2} alt="" />
                                        <div className="cardInfo">
                                            <div className="autor">
                                                <p>Rui Costa</p>
                                                <p>hora</p>
                                            </div>
                                            <div className="comentario">
                                                <p>Fui mentor nesta sessão. A partilha de experiências e conhecimento com os mentorandos foi muito boa.</p>
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
                                        {user &&
                                            < img src={require(`../../img/avatar/${user.url}`).default} alt="imagem de perfil do utilizador" />
                                        }
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

export default ResumoSessao
