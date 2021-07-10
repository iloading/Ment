
import navLogo from "../../img/logo.svg";


import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'


function Navbar() {

    const { user, status } = useSelector(state => state.user)


    return (
        <>
            {status === 'completed' &&
                <nav id="nav">
                    <Link to='/dashboard' className="decorationLinks">
                        <img src={navLogo} alt="" id="logo" />
                    </Link>
                    <Link to='/perfil' className="decorationLinks" id="perfil">
                        <img src={require(`../../img/avatar/${user.url}`).default} alt="" className="iconPerfil" />
                    </Link>
                </nav>
            }
        </>
    );

}

export default Navbar;