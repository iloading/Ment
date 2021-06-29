import iconHome from "../../img/icons/icon_home.svg";
import iconCriar from "../../img/icons/icon_criar.svg";
import iconBanco from "../../img/icons/icon_banco.svg";
import iconEquipa from "../../img/icons/icon_equipa.svg";


function Footer() {

    return (
        <>
            <div className="iconFooter" id="banco">
                <img src={iconBanco} alt="" />
                <label >Banco</label>
            </div>

            <div id="home" className="iconFooter" >
                <img src={iconHome} alt="" />
                <label>Início</label>
            </div>

            <div id="criar" className="iconFooter" >
                <img src={iconCriar} alt="" />
                <label>Nova Sessão</label>
            </div>
            <div id="equipa" className=" iconFooter" >
                <img src={iconEquipa} alt="" />
                <label>As Minhas Equipas</label>
            </div>










        </>

    );

}

export default Footer;