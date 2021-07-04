import React from 'react'
import iconSessoes from "../../img/icons/icon_sessoes.png";

function ResumoSessao() {
    return (
        <>
            <div className="conteudoMid">
                <label>Descrição</label>
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

                <label>Plano Geral</label>

                <div className="factos">

                    <div className="factos_reais">
                        <label>Factos Reais</label>
                        <label>7 ano</label>
                    </div>

                    <div className="unidadeCurricolar">
                        <label>Factos Reais</label>
                        <label>7 ano</label>
                    </div>
                </div>
            </div>

            <div className="conteudoComents">
                <div className="seccaoPlano">
                    <label>Plano Geral</label>
                </div>
                <h1>ola</h1>
            </div>
        </>
    )
}

export default ResumoSessao
