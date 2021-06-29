










import medalha from "../../img/medalha.png";
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

                <img src={medalha} alt="" />
            </div>
            <div>
                <img src={iconSessoes} alt="" />
                <div className="textoCards">
                    <label>Os 3 porquinhos </label>
                    <p>Equipa Avila Crew</p>
                    <span>8º ano | Past Tense</span>
                </div>

                <img src={medalha} alt="" />
            </div>

            <div>
                <img src={iconSessoes} alt="" />
                <div className="textoCards">
                    <label>Os 3 porquinhos </label>
                    <p>Equipa Avila Crew</p>
                    <span>8º ano | Past Tense</span>
                </div>

                <img src={medalha} alt="" />
            </div>

        </div>

    );
}


export default CarouselSessao;