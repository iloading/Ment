
import Footer from "./components/Footer"
import Carousel from "./components/CarouselSessao"





function Sessao() {
    return (
        <article className="sessao">

        

            <section id="main" className="conteudoMain">

                <div className="barraSocial">
                    <p>tras</p>
                    <p>share</p>
                    <p>like</p>
                    <p>like</p>
                    
                </div>

                <div className="navegacao">
                    <h1>titulo</h1>

                    <div className="carousel">
                        <Carousel/>
                    </div>
                   
                </div>

               <div className="conteudoMid">
                   <h1>conteudo</h1>
               </div>

            </section>

            <Footer />

        
        </article>
    );
}

export default Sessao;