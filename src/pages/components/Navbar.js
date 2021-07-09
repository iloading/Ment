
import navLogo from "../../img/logo.svg";
import iconPerfil from "../../img/icons/icon_perfil.svg";

import { Link } from 'react-router-dom'


function Navbar() {

    return (
        <nav id="nav">
            <Link to='/dashboard' className="decorationLinks">
                <img src={navLogo} alt="" id="logo" />
            </Link>
            <Link to='/perfil' className="decorationLinks" id="perfil">
                <img src={iconPerfil} alt="" className="iconPerfil" />
            </Link>
        </nav>

    );

}

export default Navbar;