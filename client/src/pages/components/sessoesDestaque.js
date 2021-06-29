
import medalha from "../../img/medalha.png";
import iconSessoes from "../../img/icons/icon_sessoes.png";
import Narrativa from "../components/Narrativa";


function CarouselSessao({ destaque }) {




    return (
        <div className="sessoesDestaque">

            <Narrativa destaque={true} />
            <Narrativa destaque={true} />
            <Narrativa destaque={true} />
        </div>

    );
}


export default CarouselSessao;