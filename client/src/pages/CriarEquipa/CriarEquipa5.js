import React from 'react'

import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import avatarUser from "../../img/criarSessoes/avatarEquipa.svg"
import criarEquipa5_semBack from "../../img/criarEquipas/criarEquipa5_semBack.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import iconAdicionar from "../../img/icons/icon_adicionar.svg";

import { Link } from "react-router-dom"
import AsyncSelect from 'react-select/async';

import { useDispatch, useSelector } from 'react-redux'
import { selecionarMentor } from '../../actions/criacaoEquipaAction'
import AsyncCreatableSelect from 'react-select/async-creatable';
//BD
import { carregarMentores } from '../../API'

function CriarEquipa5() {
    const { dadosPreenchidos } = useSelector(state => state.criarEquipa)

    const dispatch = useDispatch()

    //Lista de escolas
    let timerId = null
    const loadingMentores = (e) => {

        clearTimeout(timerId);
        var promise = new Promise(function (resolve, reject) {
            timerId = setTimeout(async () => {

                resolve(carregarMentores({ pesquisa: e }));
            }, 1000);
        });

        return promise;
    }
    //Escolha de uma escola
    const handleChange = (e) => {
        dispatch(selecionarMentor(e))
    }
    return (
        <article className="criarEquipa">
            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Criar Equipa</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>

                <div className="titulo">
                    <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                        <div className="gridAdicionar">
                            <label className="tituloCriarEquipas desktop">Adicionar alunos</label>
                            <div className="imgCriarEquipas">
                                <img src={iconAdicionar} alt="" />
                            </div>
                        </div>

                    </div>



                </div>

                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <section className="associarEquipa">
                            <header className="headerAssociarEquipa">
                                <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                <h2 id="titulo">Adicionar alunos</h2>

                            </header>
                            <div id="inputPesquisar" className="inputPesquisar">
                                <AsyncSelect
                                    onChange={(e) => handleChange(e)}
                                    cacheOptions={true}
                                    defaultOptions={dadosPreenchidos.mentores}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    loadOptions={(e) => (e !== '' && e.length > 2) ? loadingMentores(e).then((res) =>
                                        res.data.success.map(({ id, name, email, url, alt }) => ({ label: `${name} (${email})`, value: id, info: { id: id, email: email, name: name, url: url, alt: alt } }))) : ''}
                                    isClearable={false}
                                    noOptionsMessage={() => 'Não existem resultados. Escreva o nome do seu concelho, escola ou agrupamento...'}
                                    loadingMessage={(e) => e.inputValue.length <= 2 ? 'Digite mais do que 2 carateres para pesquisar' : 'A Pesquisar...'}
                                    allowCreateWhileLoading={false}



                                    id='inputRole'
                                    className='react-select-form'
                                    placeholder={'Pesquisar por Concelho | Agrupamento | Escola'}
                                /* value={dadosPreenchidos.school.map(school => ({ label: school.name, value: school.id }))} */
                                />
                            </div>
                            <div id="id_titulo2">
                                <label id="titulo2">A sua equipa de mentores</label>
                            </div>
                            <div id="equipas">
                                {dadosPreenchidos.mentores.length > 0 &&
                                    dadosPreenchidos.mentores.map(mentor =>

                                        <div id="equipa1">
                                            <img src={require(`../../img/avatar/${mentor.info.url}`).default} alt={mentor.info.alt} className="avatarEquipa" />
                                            <div className="texto">
                                                <p className="tituloTexto">{mentor.info.name}</p>
                                                <p className="escolaTexto">{mentor.info.email}</p>

                                            </div>
                                            <div className="checkbox"></div>
                                        </div>

                                    )

                                }
                            </div>
                            <div id="divBotao">
                                <div id="botao">
                                    <p id="textoBotao">Adicionar selecionados</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="conteudoDireita">
                        <div className="botaoEtapaAnterior">
                            <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                            <p className="textoBotao">Etapa anterior</p>
                        </div>
                        <img src={criarEquipa5_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarEquipa5
