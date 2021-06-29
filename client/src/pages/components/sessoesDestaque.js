










import medalhaOuro from "../../img/medalhaOuro.svg";
import medalhaPrata from "../../img/medalhaPrata.svg";
import medalhaBronze from "../../img/medalhaBronze.svg";
import iconSessoes from "../../img/icons/icon_sessoes.png";


function CarouselSessao() {




    return (
        <div className="sessoesDestaque">

            <div>
                <img src={iconSessoes} alt="" />
                <div className="textoCards">
                    <label>Os 3 porquinhos </label>
                    <p>Equipa Avila Crew</p>
                    <span>8º ano | Past Tense</span>
                </div>

                <img src={medalhaOuro} alt="" />
            </div>
            <div>
                <img src={iconSessoes} alt="" />
                <div className="textoCards">
                    <label>Os 3 porquinhos </label>
                    <p>Equipa Avila Crew</p>
                    <span>8º ano | Past Tense</span>
                </div>

                <img src={medalhaPrata} alt="" />
            </div>

            <div>
                <img src={iconSessoes} alt="" />
                <div className="textoCards">
                    <label>Os 3 porquinhos </label>
                    <p>Equipa Avila Crew</p>
                    <span>8º ano | Past Tense</span>
                </div>

                <img src={medalhaBronze} alt="" />
            </div>

        </div>

    );
}


export default CarouselSessao;