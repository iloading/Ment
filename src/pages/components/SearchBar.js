import React from 'react'
import iconFiltro from "../../img/icons/icon_filtro.svg";
import iconPesquisa from "../../img/icons/icon_pesquisa.svg";
import linhaVertical from "../../img/linhaVertical.svg";

function SearchBar() {
    return (
        <>
            <div className="searchBar">
                <input placeholder="Pesquisar..." name="search" id="inputEmail" type="text" />


                <div>
                    <img src={iconPesquisa} alt="" id="iconPesquisa" />
                    <img src={linhaVertical} alt="" id="linhaVertical" />
                    <img src={iconFiltro} alt="" id="iconFiltro" />
                </div>
            </div>
            <div className="searchBar filtro">
                <input placeholder="Filtrar por..." name="search" id="inputEmail" type="text" />
                <div>

                    <img src={iconFiltro} alt="" />
                </div>
            </div>

        </>
    )
}

export default SearchBar
