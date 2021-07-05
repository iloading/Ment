import iconHome from "../../img/icons/icon_home.svg";
import iconCriar from "../../img/icons/icon_criar.svg";
import iconBanco from "../../img/icons/icon_banco.svg";
import iconEquipa from "../../img/icons/icon_equipa.svg";
import navLogo from "../../img/logo.svg";

import iconTerminar from "../../img/icons/icon_terminarSessao.svg";

import { loadUser } from "../../actions/userAction";
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function FooterCore() {


    return (
        <>

            <Link to='/banco' className="iconFooter" id="banco">
                <img src={iconBanco} alt="" />
                <label >Banco</label>
            </Link>

            <Link to='/dashboard' id="home" className="iconFooter" >
                <img src={iconHome} alt="" />
                <label>Início</label>
            </Link>

            <Link to='/criarsessao' id="criar" className="iconFooter" >
                <img src={iconCriar} alt="" />
                <label>Nova Sessão</label>
            </Link>
            <Link to='/minhasEquipas' id="equipa" className=" iconFooter" >
                <img src={iconEquipa} alt="" />
                <label>As Minhas Equipas</label>
            </Link>
        </>
    );



}


function Footer() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])
    const { user, status } = useSelector(state => state.user)


    return (
        <>



            <aside className="menu_principal" id="menu_principal__Desktop">
                <Link to='/dashboard' className="asideLogo" id="logo">
                    <img src={navLogo} alt="" />
                </Link>
                <div id="divBotoesMenu">
                    <div id="botoesMenu">
                        <FooterCore />
                    </div>
                </div>


                {status === 'completed' &&
                    <div className="asidePerfil" id="asidePerfil">
                        <div className="infoPerfil">
                            <div id="avatar">
                                <img src={require(`../../img/avatar/${user.url}`).default} className="imgAvatar" alt="" />
                                {/* <img src={require('../../img/avatar/avatar_1.png')} className="imgAvatar" alt="" /> */}
                            </div>
                            <div id="info">
                                <h3>{user.name}</h3>
                            </div>
                            <div id="sair">
                                <img src={iconTerminar} alt="" />
                            </div>
                        </div>
                    </div>
                }
            </aside>
            <footer className="menu_principal" id="menu_principal"> <FooterCore /></footer>




        </>

    );

}

export default Footer;