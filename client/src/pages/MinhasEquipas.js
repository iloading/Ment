import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import MinhasEquipas from "./components/MinhasEquipas";


import iconDefinicoes from "../img/icons/icon_settings.svg";





import iconOrdenar from "../img/icons/icon_ordenar.svg";

import iconSetaTras from "../img/setaAtras.png"
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
                    <img src={iconSetaTras} alt="" />
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
                        <MinhasEquipas />
                        <MinhasEquipas />
                        <MinhasEquipas />
                        <MinhasEquipas />
                        <MinhasEquipas />
                        <MinhasEquipas />
                        <MinhasEquipas />

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

                        <div className="areaEquipasArquivadas">
                            <div className="tituloEquipasArquivadas">
                                <label>Equipas arquivadas</label>
                            </div>
                            <MinhasEquipas />
                            <MinhasEquipas />
                            <MinhasEquipas />
                            <MinhasEquipas />


                        </div>

                    </div>











                </div>












            </section>

            <Footer />




        </article >
    );
}

export default Banco;