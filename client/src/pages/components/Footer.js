import iconHome from "../../img/icons/icon_home.svg";
import iconCriar from "../../img/icons/icon_criar.svg";
import iconBanco from "../../img/icons/icon_banco.svg";
import iconEquipa from "../../img/icons/icon_equipa.svg";
import navLogo from "../../img/logo.svg";

import iconTerminar from "../../img/icons/icon_terminarSessao.svg";

import { loadUser } from "../../actions/userAction";
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import AuthContext from "../../context/AuthContext";
import { logout } from '../../API'



export function FooterCore() {

    const location = useLocation();
    const refBanco = useRef()
    const refHome = useRef()
    const refCriar = useRef()
    const refEquipa = useRef()
    const [tabSelecionada, setTabSelecionada] = useState(null)
    const [posicaoBanco, setposicaoBanco] = useState(null)
    const [posicaoHome, setposicaoHome] = useState(null)
    const [posicaoCriar, setposicaoCriar] = useState(null)
    const [posicaoEquipa, setposicaoEquipa] = useState(null)

    useEffect(() => {
        if (location.pathname.startsWith('/dashboard')) {
            setTabSelecionada(0)
        } else if (location.pathname.startsWith('/banco')) {
            setTabSelecionada(1)
        } else if (location.pathname.startsWith('/criarsessao')) {
            setTabSelecionada(2)
        } else if (location.pathname.startsWith('/minhasEquipas')) {
            setTabSelecionada(3)
        }

        setposicaoBanco(refBanco.current.getBoundingClientRect());
        setposicaoHome(refHome.current.getBoundingClientRect());
        setposicaoCriar(refCriar.current.getBoundingClientRect());
        setposicaoEquipa(refEquipa.current.getBoundingClientRect());

        window.addEventListener("resize", () => {
            setposicaoBanco(refBanco.current.getBoundingClientRect());
            setposicaoHome(refHome.current.getBoundingClientRect());
            setposicaoCriar(refCriar.current.getBoundingClientRect());
            setposicaoEquipa(refEquipa.current.getBoundingClientRect());
        }, false);



        window.scrollTo(0, 0)

    }, [location])


    // function getPos(el) {
    //     // yay readability

    // }

    return (
        <>

            <Link to='/banco' className="iconFooter" id="banco" ref={refBanco}>
                {tabSelecionada === 1 && <div className="navegacao navegacao_desktop" style={{ top: parseInt(posicaoBanco.y) - 5 + 'px', height: parseInt(posicaoBanco.height) + 10 + 'px' }}></div>}
                {tabSelecionada === 1 && <div className="navegacao navegacao_mobile" style={{ left: parseInt(posicaoBanco.x) - 10 + 'px', width: parseInt(posicaoBanco.width) + 20 + 'px' }}></div>}

                <img src={iconBanco} alt="" />
                <label >Banco</label>
            </Link>

            <Link to='/dashboard' id="home" className="iconFooter" ref={refHome}>
                {tabSelecionada === 0 && <div className="navegacao navegacao_desktop" style={{ top: parseInt(posicaoHome.y) - 5 + 'px', height: parseInt(posicaoHome.height) + 10 + 'px' }}></div>}
                {tabSelecionada === 0 && <div className="navegacao navegacao_mobile" style={{ left: parseInt(posicaoHome.x) - 10 + 'px', width: parseInt(posicaoHome.width) + 20 + 'px' }}></div>}
                <img src={iconHome} alt="" />
                <label>Início</label>
            </Link>

            <Link to='/criarsessao' id="criar" className="iconFooter" ref={refCriar}>
                {tabSelecionada === 2 && <div className="navegacao navegacao_desktop" style={{ top: parseInt(posicaoCriar.y) - 5 + 'px', height: parseInt(posicaoCriar.height) + 10 + 'px' }}></div>}
                {tabSelecionada === 2 && <div className="navegacao navegacao_mobile" style={{ left: parseInt(posicaoCriar.x) - 10 + 'px', width: parseInt(posicaoCriar.width) + 20 + 'px' }}></div>}
                <img src={iconCriar} alt="" />
                <label>Nova Sessão</label>
            </Link>
            <Link to='/minhasEquipas' id="equipa" className=" iconFooter" ref={refEquipa}>
                {tabSelecionada === 3 && <div className="navegacao navegacao_desktop" style={{ top: parseInt(posicaoEquipa.y) - 5 + 'px', height: parseInt(posicaoEquipa.height) + 10 + 'px' }}></div>}
                {tabSelecionada === 3 && <div className="navegacao navegacao_mobile" style={{ left: parseInt(posicaoEquipa.x) - 10 + 'px', width: parseInt(posicaoEquipa.width) + 20 + 'px' }}></div>}
                <img src={iconEquipa} alt="" />
                <label>As Minhas Equipas</label>
            </Link>
        </>
    );



}


function Footer() {
    const [isBoasVindas, setIsBoasVindas] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])
    const { user, status } = useSelector(state => state.user)

    const { getLoggedIn } = useContext(AuthContext)
    const history = useHistory();

    const logOutButton = async () => {
        await logout();
        await getLoggedIn();
        history.push('/')
    }
    const location = useLocation();

    useEffect(() => {
        setIsBoasVindas(location.pathname === "/boasvindas")
    }, [location.pathname])


    return (
        <>



            <aside className="menu_principal" id="menu_principal__Desktop">
                <Link to='/dashboard' className="asideLogo" id="logo">
                    <img src={navLogo} alt="" />
                </Link>
                <div id="divBotoesMenu">
                    <div id={!isBoasVindas ? "botoesMenu" : "botoesOff"} >
                        <FooterCore />
                    </div>
                </div>


                {status === 'completed' &&
                    <div className="asidePerfil" id={!isBoasVindas ? "asidePerfil" : "asidePerfilOff"} >
                        <div className="infoPerfil">
                            <Link to='/perfil' className="decorationLinks">
                                <div id="avatar">
                                    <img src={require(`../../img/avatar/${user.url}`).default} className="imgAvatar" alt="" />
                                    {/* <img src={require('../../img/avatar/avatar_1.png')} className="imgAvatar" alt="" /> */}
                                </div>
                            </Link>
                            <Link to='/perfil' className="decorationLinks linkCentroVertical">
                                <div id="info">
                                    <h3>{user.name}</h3>
                                </div>
                            </Link>
                            <div id="sair">
                                <img src={iconTerminar} alt="Sair da Conta" onClick={logOutButton} />
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