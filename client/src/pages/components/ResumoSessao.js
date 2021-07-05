import React from 'react'
import iconSessoes from "../../img/icons/icon_sessoes.png";
import imgComentario from "../../img/avatar/avatar_11.png"

function ResumoSessao() {
    return (
        <div className="conteudoResumo">
            <div className="conteudoMid">
                <label className="titulo">Descrição</label>
                <div className="cardDescricao">
                    <div className="topInfo">
                        <div className="titulos">
                            <label>Os 3 porquinhos </label>
                            <p>Past Tense</p>
                            <span>8º ano</span>
                        </div>
                        <img className="imgSessao" src={iconSessoes} alt="" />
                    </div>
                    <div className="bottomInfo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus consequuntur omnis. Veniam provident nam incidunt delectus dicta labore?</p>
                    </div>
                </div>

            </div>
            <div className="conteudoPlano">

                <label className="titulo">Plano Geral</label>

                <div className="factos">

                    <div className="factos_reais">
                        <label className="tituloFactos">Factos Reais</label>
                        <label className="textoFactos">7 ano</label>
                    </div>

                    <div className="unidadeCurricolar">
                        <label className="tituloFactos">Unidade Curricular</label>
                        <label className="textoFactos">Inglês</label>
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
                        <img src={imgComentario} alt="" />
                        <div className="cardInfo">
                            <div className="autor">
                                <p>Adicionar novo comentário</p>
                            </div>
                            <div className="comentario">
                                <input type="text" placeholder="Escreva aqui..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumoSessao
