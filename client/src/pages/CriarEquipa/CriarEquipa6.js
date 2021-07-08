import React, { useEffect } from 'react'

import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa6 from "../../img/criarEquipas/criarEquipa6.svg"
import criarEquipa6_semBack from "../../img/criarEquipas/criarEquipa6_semBack.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { criarNovaEquipa, clearCriarEquipa } from "../../actions/criacaoEquipaAction";
import { useHistory } from 'react-router';

function CriarEquipa6() {
    const dispatch = useDispatch()
    const history = useHistory();

    const { dadosPreenchidos, novaEquipa } = useSelector(state => state.criarEquipa)

    const handleCriarEquipa = () => {
        dispatch(criarNovaEquipa(dadosPreenchidos))
    }

    useEffect(() => {
        if (novaEquipa !== null) {
            history.push(`/perfilEquipa/${novaEquipa}`)
            dispatch(clearCriarEquipa(dadosPreenchidos))
        }
    }, [novaEquipa, history])

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
                        <label className="tituloCriarEquipas desktop">Escolher foto</label>
                    </div>



                </div>

                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">
                            <header className="criarSessaoImg">


                                <div className="setaTras">
                                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                </div>

                                <img src={criarEquipa6} alt="criar equipa primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Escolher foto</label>

                                <div>
                                    <p id="texto">A foto da equipa é a única identidade sobre a qual permitimos fazer o upload. A fotografia não é obrigatória, e caso o deseje, nós fornecemos uma automaticamente, apenas com as iniciais (prometemos que vai gostar). Se a sua equipa tiver uma identidade visual definida, pode fazer então o upload de um ficheiro. Ressalvamos apenas de novo a discrição necessária uma vez que estamos a lidar com alunos menores. Lembre-se de proteger a sua equipa acima de tudo.</p>
                                </div>



                                <Link className="botaoAzul" to="/" >
                                    <button id="divBotao" disabled>
                                        <div id="botao" >
                                            <p id="textoBotao">Upload</p>
                                        </div>
                                    </button>
                                </Link>
                                <h3 className='criar_sem_foto' onClick={handleCriarEquipa}><u>Criar equipa sem fotografia</u></h3>

                            </section>

                        </form>
                    </div>
                    <div className="conteudoDireita">
                        <div className="botaoEtapaAnterior cursorEtapaAnterior">
                            <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                            <p className="textoBotao">Etapa anterior</p>
                        </div>
                        <img src={criarEquipa6_semBack} className="imgEquipa" alt="criar equipa primeira imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarEquipa6
