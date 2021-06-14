
import navLogo from "../../img/logo.svg";
import iconPerfil from "../../img/icons/icon_perfil.svg";


function Navbar() {

    return (
        <nav id="nav">
            <img src={navLogo} alt="" id="logo" />
            <img src={iconPerfil} alt="" id="perfil" className="iconPerfil" />
        </nav>

    );

}

export default Navbar;