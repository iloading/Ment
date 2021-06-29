
import Footer from "./components/Footer"



import iconSessoes from "../img/icons/icon_sessoes.png";
import SessionNav from "./components/SessionNav"





function Sessao() {
    return (
        <article className="sessao">
            <SessionNav />
            <section id="main" className="conteudoMain">
                <div className="conteudoMid">
                    <label>Descrição</label>
                    <div className="cardDescricao">
                        <div className="topInfo">
                            <div className="titulos">
                                <label>Os 3 porquinhos </label>
                                <p>Past Tense</p>
                                <span>8º ano</span>
                            </div>
                            <img className="imgSessao" src={iconSessoes} alt="" />
                        </div>
                        <div className="bottomInfo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus consequuntur omnis. Veniam provident nam incidunt delectus dicta labore?</p>
                        </div>
                    </div>

                </div>
                <div className="conteudoComents">
                    <div className="seccaoComents">
                        <label>Descrição</label>
                    </div>
                    <h1>ola</h1>
                </div>
            </section>
            <Footer />
        </article>
    );
}

export default Sessao;