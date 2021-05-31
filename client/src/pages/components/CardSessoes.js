import medalha from "../../img/medalha.png";
import iconSessoes from "../../img/icons/icon_sessoes.png";

function CardSessoes() {

    return (

                    <div>
                        <img src={iconSessoes} alt="" id="iconTituloEquipa" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" id="iconTituloEquipa" />
                    </div>
                    
    );

}
    
export default CardSessoes;