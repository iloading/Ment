import iconHome from "../../img/icons/icon_home.svg";
import iconCriar from "../../img/icons/icon_criar.svg";
import iconBanco from "../../img/icons/icon_banco.svg";
import iconEquipa from "../../img/icons/icon_equipa.svg";
import navLogo from "../../img/logo.svg";
import imgAvatar from "../../img/imgPerfil.svg";
import iconTerminar from "../../img/icons/icon_terminarSessao.svg";

export function FooterCore() {
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


function Footer() {

    return (
        <>



            <aside className="menu_principal" id="menu_principal__Desktop">
                <div className="asideLogo" id="logo">
                    <img src={navLogo} alt="" />
                </div>
                <div id="divBotoesMenu">
                    <div id="botoesMenu">
                        <FooterCore />
                    </div>
                </div>



                <div className="asidePerfil" id="asidePerfil">
                    <div className="infoPerfil">
                        <div id="avatar">
                            <img src={imgAvatar} alt="" />
                        </div>
                        <div id="info">
                            <h3>Joana Silva</h3>
                            <label>joanasilva.12@gmail.com</label>
                        </div>
                        <div id="sair">
                            <img src={iconTerminar} alt="" />
                        </div>
                    </div>
                </div>
            </aside>
            <footer className="menu_principal" id="menu_principal"> <FooterCore /></footer>




        </>

    );

}

export default Footer;