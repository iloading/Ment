import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


import iconDefinicoes from "../img/icons/icon_settings.svg";


import iconBanco from "../img/icons/icon_banco.svg";


import iconOrdenar from "../img/icons/icon_ordenar.svg";
import iconEquipa from "../img/Equipas/icon_equipa.svg";
import icon3pontos from "../img/icons/icon_3pontos.svg";
import iconParticipantes from "../img/icons/icon_equipa_branco.svg";
import iconSeta from "../img/setaAtras.png"
import iconCriar from "../img/icons/icon_plus.svg"
import iconTituloEquipa from "../img/icons/icon_equipa.svg"






function Banco() {

    return (
        <article className="minhasEquipas layout">

            <Navbar />


            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Minhas Equipas</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>


                {/*DESKTOP*/}

                <div className="goBack_criarEquipa">
                    <img src={iconSeta} alt="" />
                    <div>
                        <img src={iconCriar} alt="" />
                        <label>Nova equipa</label>
                    </div>
                </div>


                <div className="titulo">
                    <img src={iconTituloEquipa} alt="" id="iconTituloMinhasEquipas" />
                    <div className="titulo_and_img" id="titulo_and_img">
                        <label className="tituloMinhasEquipas mobile">As minhas equipas</label>
                        <label className="tituloMinhasEquipas desktop">Equipas ativas</label>

                        <img src={iconOrdenar} alt="" id="iconOrdenar" />
                    </div>


                    <div className="criarEquipa" id="criarEquipa">
                        <label>Criar uma nova equipa</label>
                    </div>


                </div>

                <div className="conteudoMid">

                    <div className="listaMinhasEquipas">
                        <div className="cardMinhasEquipas">
                            <img src={iconEquipa} alt="" id="iconEquipa" />
                            <div className="midInfo">
                                <label>8ºD</label>
                                <p>Inglês</p>
                                <span>Escola Secundária Carlos Amarante</span>
                            </div>
                            <div className="leftInfo">
                                <div className="botaoPontos" >
                                    <img src={icon3pontos} alt="" id="botaoPontos" />
                                </div>

                                <div id="participantes">
                                    <img src={iconParticipantes} alt="" />
                                    <p>20</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="coluna_direita_desktop">

                        <div className="areaCriarEquipa">
                            <div className="search">
                                <input type="text" placeholder="Inserir nome da equipa..." />
                                <img src={iconCriar} alt="" />
                            </div>
                            <button>
                                Criar
                            </button>


                        </div>

                        <div className="areaEquipasArquivadas">ola</div>

                    </div>











                </div>












            </section>

            <Footer />




        </article >
    );
}

export default Banco;