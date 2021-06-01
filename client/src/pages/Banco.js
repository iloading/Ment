import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import CardSessoes from "./components/CardSessoes"
import iconBanco from "../img/icons/icon_banco.png";


function Banco() {
    return (
        <article className="banco">

            <Navbar/>
           
            
            <section id="main" className="conteudoMain">

               <div className="searchBar">
                    <img src={iconBanco} alt="" />
                    <input placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" />
               </div>

                <div className="titulo">
                    <img src={iconBanco} alt="" id="iconTituloBanco" />
                    <label id="tituloMain">Banco</label>
                    <img src={iconBanco} alt="" id="iconTituloBanco1" />
                </div>
                
                <div className="cardSessoes">
                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />
                </div>
                    
            </section>
            
            <Footer />
          
          


        </article>
    );
}
    
export default Banco;