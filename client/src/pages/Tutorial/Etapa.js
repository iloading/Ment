import React from 'react'
import Etapa0 from './Etapa0'
import Etapa1 from './Etapa1'
import Etapa2 from './Etapa2'
import Etapa3 from './Etapa3'
import Etapa4 from './Etapa4'
import Etapa5 from './Etapa5'
import Etapa6 from './Etapa6'
import { useLocation } from "react-router-dom";

function Etapa() {
    const location = useLocation();
    const path = parseInt(location.pathname.split("/")[2]);

    return (
        <>
            {path === 0 && <Etapa0 />}
            {path === 1 && <Etapa1 />}
            {path === 2 && <Etapa2 />}
            {path === 3 && <Etapa3 />}
            {path === 4 && <Etapa4 />}
            {path === 5 && <Etapa5 />}
            {path === 6 && <Etapa6 />}
        </>
    )
}

export default Etapa
