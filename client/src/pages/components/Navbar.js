
import navLogo from "../../img/logo.png";
import iconPerfil from "../../img/icons/icon_perfil.png";


function Navbar() {

    return (
        <nav id="nav">
            <img src={navLogo} alt="" id="logo" />
            <img src={iconPerfil} alt="" id="perfil" className="iconPerfil" />
        </nav>

    );

}
    
export default Navbar;