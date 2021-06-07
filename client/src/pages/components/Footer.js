import iconHome from "../../img/icons/icon_home.svg";
import iconCriar from "../../img/icons/icon_criar.svg";
import iconBanco from "../../img/icons/icon_banco.svg";
import iconEquipa from "../../img/icons/icon_equipa.svg";


function Footer() {

    return (
        <footer id="footer">
            <img src={iconBanco} alt="" id="banco" className="iconFooter" />
            <img src={iconHome} alt="" id="home" className="iconFooter" />
            <img src={iconCriar} alt="" id="criar" className="iconFooter" />
            <img src={iconEquipa} alt="" id="equipa" className="iconFooterEquipa" />
        </footer>

    );

}

export default Footer;