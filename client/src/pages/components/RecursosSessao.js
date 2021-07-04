import React from 'react'
import iconDownload from "../../img/icons/icon_download.svg";


function RecursosSessao() {
    return (
        <>
            <div className="conteudoPlano">
                <div className="ficheirosPrincipais">
                    <label className="titulo1">Ficheiros principais</label>
                    <div className="ficheiros">
                        <div className="factos">
                            <label className="factos_nome">Narrativa - "London Culture"</label>
                            <img src={iconDownload} alt="" className="factos_icon" />
                        </div>
                        <div className="factos">
                            <label className="factos_nome">Guião dos Mentores</label>
                            <img src={iconDownload} alt="" className="factos_icon" />
                        </div>
                        <div className="factos">
                            <label className="factos_nome">Material Multimédia</label>
                            <img src={iconDownload} alt="" className="factos_icon" />
                        </div>
                    </div>
                </div>
                <div className="conteudosAdicionais">

                    <label className="titulo2">Conteúdo adicional</label>
                    <div className="ficheiros">
                        <div className="factos">
                            <label className="factos_nome">Exercícios Icebreakers</label>
                            <img src={iconDownload} alt="" className="factos_icon" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RecursosSessao
