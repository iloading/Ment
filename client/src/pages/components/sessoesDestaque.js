
/* import iconSessoes from "../../img/icons/icon_sessoes.png"; */
import Narrativa from "../components/Narrativa";


function sessoesDestaque({ destaques, status }) {




    return (
        <>
            {status === "completed" &&
                <div className="sessoesDestaque">

                    <Narrativa destaque={'ouro'} sessao={destaques[0]} status={status} />
                    <Narrativa destaque={'prata'} sessao={destaques[1]} status={status} />
                    <Narrativa destaque={'bronze'} sessao={destaques[2]} status={status} />

                </div >
            }
        </>

    );
}


export default sessoesDestaque;