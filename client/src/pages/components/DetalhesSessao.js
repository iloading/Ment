import React from 'react'
import iconDownload from "../../img/icons/icon_download.svg";

function DetalhesSessao() {
    return (
        <>
            <div className="titulos_top">
                <label>Plano Geral</label>
                <label>Descarregar recursos</label>
            </div>
            <div className="conteudo">
                <div className="conteudoDetalhes">
                    <div className="conteudoPlano">
                        <div className="detalhesConteudo">

                    <div className="detalhes">
                        <label className="titulo1">Plano Geral</label>
                        <div className="caixaTexto">
                            <label className="detalhes_titulo">Factos Ficcionais</label>
                            <span className="detalhes_texto">factos que nao existem</span>
                            <label className="detalhes_titulo">Situação Problema</label>
                            <span className="detalhes_texto">O problema desta situação é...</span>
                            <label className="detalhes_titulo">Resultados Esperados</label>
                            <span className="detalhes_texto">Que se acabe o projeto</span>
                            <label className="detalhes_titulo">Papel dos Alunos Mentores</label>
                            <span className="detalhes_texto">Ensinar meninos</span>
                            <label className="detalhes_titulo">Papel dos Alunos Mentorandos</label>
                            <span className="detalhes_texto">Aprender matéria</span>
                        </div>


                            </div>

                            <div className="detalhes">
                                <label className="titulo2">Detalhes</label>
                                <div className="caixaTexto">
                                    <label className="detalhes_titulo">Ano da escolaridade</label>
                                    <span className="detalhes_texto">7º ano</span>
                                    <label className="detalhes_titulo">Unidade Curricular</label>
                                    <span className="detalhes_texto">Inglês</span>
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

export default DetalhesSessao
