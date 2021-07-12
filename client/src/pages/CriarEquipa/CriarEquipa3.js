import React, { useEffect } from 'react'

import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa3 from "../../img/criarEquipas/criarEquipa3.svg"
import criarEquipa3_semBack from "../../img/criarEquipas/criarEquipa3_semBack.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { preencherDescricao, loadEscolaOwner, mudarEscola } from '../../actions/criacaoEquipaAction'
import AsyncCreatableSelect from 'react-select/async-creatable';
import { colourStyles } from './selectStyle';
//BD
import { listaEscolas } from '../../API'
function CriarEquipa3() {
    const { dadosPreenchidos } = useSelector(state => state.criarEquipa)

    const dispatch = useDispatch()
    const descricaoHandler = (e) => {
        dispatch(preencherDescricao(e.target.value))
    }
    //carregar escola registada ao professor 
    useEffect(() => {
        dispatch(loadEscolaOwner());
    }, [dispatch])

    //Lista de escolas
    let timerId = null
    const loadOptions = (e) => {

        clearTimeout(timerId);
        var promise = new Promise(function (resolve, reject) {
            timerId = setTimeout(async () => {
                resolve(listaEscolas({ school: e }));
            }, 1000);
        });

        return promise;
    }
    //Escolha de uma escola
    const handleChange = (e) => {
        dispatch(mudarEscola(e))
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
                        <label className="tituloCriarEquipas desktop">Detalhes</label>
                    </div>



                </div>


                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">
                            <header className="criarSessaoImg">


                                <div className="setaTras">
                                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                </div>

                                <img src={criarEquipa3} alt="criar equipa primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Detalhes</label>

                                <div>
                                    <p id="texto">Uma equipa tem de obrigatoriamente estar associada a uma Escola/Agrupamento.</p>
                                    <p id="texto">De seguida, preencha uma breve descrição sobre a equipa.</p>
                                    <p id="texto"> Esta descrição estará disponível publicamente, e por isso aconselhamos brevidade e discrição de acordo com o RGPD em atuação.</p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Escola</label>
                                    {dadosPreenchidos.school &&
                                        <AsyncCreatableSelect
                                            onChange={(e) => handleChange(e)}
                                            cacheOptions={true}
                                            defaultOptions={dadosPreenchidos.school.map(school => ({ label: school.name, value: school.id }))}

                                            loadOptions={(e) => (e !== '' && e.length > 2) ? loadOptions(e).then((res) =>
                                                res.data.success.map(({ id, name }) => ({ label: name, value: id }))) : ''}
                                            isClearable={false}
                                            noOptionsMessage={() => 'Não existem resultados. Escreva o nome do seu concelho, escola ou agrupamento...'}
                                            loadingMessage={(e) => e.inputValue.length <= 2 ? 'Digite mais do que 2 carateres para pesquisar' : 'A Pesquisar...'}
                                            allowCreateWhileLoading={false}
                                            /* Criar uma nova escola caso a do utilizador não esteja na lista  */
                                            isValidNewOption={(inputValue, selectValue, selectOptions, accessors) => {
                                                if (inputValue.length > 2) {
                                                    if (selectValue.length === 0) {
                                                        if (selectOptions.length === 0) {
                                                            return true
                                                        }
                                                    }
                                                }
                                                return false
                                            }}

                                            id='inputRole'
                                            className='react-select-form'
                                            styles={colourStyles}
                                            placeholder={'Pesquisar por Concelho | Agrupamento | Escola'}
                                            value={dadosPreenchidos.school.map(school => ({ label: school.name, value: school.id }))}
                                        />
                                    }
                                </div>

                                <div className="formulario">

                                    <label className="tituloFormulario">Descrição</label>

                                    <textarea type="text" className="textareaTexto" placeholder="ex: A equipa mais divertida de Aveiro!..." onChange={descricaoHandler} value={dadosPreenchidos.descricao}></textarea>
                                </div>


                                {dadosPreenchidos.descricao !== '' ?
                                    <Link className="botaoAzul" to="/criarEquipa/4" >
                                        <button id="divBotao">
                                            <div id="botao" >
                                                <p id="textoBotao">Próximo passo</p>
                                            </div>
                                        </button>
                                    </Link>
                                    :
                                    <button id="divBotao" disabled>
                                        <div id="botao" >
                                            <p id="textoBotao">Próximo passo</p>
                                        </div>
                                    </button>
                                }
                            </section>

                        </form>
                    </div>
                    <div className="conteudoDireita">
                        <Link to='/criarEquipa/2' className="decorationLinks">
                            <div className="botaoEtapaAnterior cursorEtapaAnterior">
                                <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                <p className="textoBotao">Etapa anterior</p>
                            </div>
                        </Link>
                        <img src={criarEquipa3_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarEquipa3
