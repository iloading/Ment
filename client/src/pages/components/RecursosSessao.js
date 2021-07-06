import React from 'react'
import iconDownload from "../../img/icons/icon_download.svg";

function RecursosSessao() {
    return (
        <>
            <div className="titulos_top">
                <label>Ficheiros principais</label>
                <label>Descarregar recursos</label>
            </div>
            <div className="conteudo">

                <div className="conteudoRecursos">
                    <div className="ficheirosPrincipais">
                        <label className="titulo1">Ficheiros principais</label>
                        <div className="ficheiros">
                            <div className="caixaFicheiros">
                                <label className="ficheiro_nome">Narrativa - "London Culture"</label>
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
                                <label className="ficheiro_nome">Exercícios Icebreakers</label>
                                <img src={iconDownload} alt="" className="ficheiro_icon" />
                            </div>

                        </div>
                    </div>
                </div>


                <div className="descarregar">


                    <div className="download">
                        <label>Descarregar a pasta</label>
                        <img src={iconDownload} alt="" />
                    </div>



                </div>
            </div>
        </>
    )
}

export default RecursosSessao
