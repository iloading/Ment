import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import etapa0 from "../../img/modalHome/etapa_0.gif"
import etapa1 from "../../img/modalHome/etapa_1.gif"
import etapa2 from "../../img/modalHome/etapa_2.gif"
import etapa3 from "../../img/modalHome/etapa_3.gif"
import etapa4 from "../../img/modalHome/etapa_4.gif"
import etapa5 from "../../img/modalHome/etapa_5.gif"
import etapa6 from "../../img/modalHome/etapa_6.gif"
import seta from "../../img/setaDireita_cor.png";
import { Link } from "react-router-dom";

function CarouselHomePage() {

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        rows: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [



            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },







        ]


    };
    return (
        <div className="carouselCards">

            <Slider {...settings}>
                <div className="card">
                    <img src={etapa0} alt="" className="imgModal" />
                    <label>Etapa 0</label>
                    <p>Sensibilize os seus alunos / um grupo de alunos voluntários para o processo de mentoria entre pares, em particular entre alunos de níveis diferentes, e crie uma equipa de mentores.
                    </p>
                </div>
                <div className="card">

                    <img src={etapa1} alt="" className="imgModal" />


                    <label>Etapa 1 </label>
                    <p>Com base em conteúdos programáticos previamente definidos, colabore com os mentores no processo de construção de uma narrativa, a desenvolver com base em factos reais e ficcionais, e que encerre um desafio a resolver pelas personagens atribuídas a alunos mentores e mentorandos, na sessão de mentoria.</p>
                </div>
                <div className="card">
                    <img src={etapa2} alt="" className="imgModal" />
                    <label>Etapa 2</label>
                    <p>A partir da narrativa criada, leve os mentores a construir o guião da sessão de mentoria, começando pelas atividades a implementar. Ajude-os, depois, a identificar os recursos e as tarefas a preparar.</p>
                </div>
                <div className="card">
                    <img src={etapa3} alt="" className="imgModal" />
                    <label>Etapa 3</label>
                    <p>Acompanhe a evolução do trabalho de preparação da sessão de mentoria, implementado, colaborativamente, entre mentores, tanto de forma autónoma, como em sala de aula.</p>
                </div>
                <div className="card">
                    <img src={etapa4} alt="" className="imgModal" />
                    <label>Etapa 4</label>
                    <p>Acompanhe a sessão de mentoria, liderada pelos alunos mentores que, em pequenas equipas, irão trabalhar com os seus colegas mais novos, levando-os a implementar as atividades previstas no guião da sessão. Confie nas potencialidades dos seus alunos e observe. Intervenha apenas se necessário.</p>
                </div>
                <div className="card">
                    <img src={etapa5} alt="" className="imgModal" />
                    <label>Etapa 5</label>
                    <p>Estimule a reflexão de alunos mentores e mentorandos acerca da experiência de participação no projeto, mediante o preenchimento de um breve questionário, após a sessão de mentoria.</p>
                </div>
                <div className="card2">
                    <img src={etapa6} alt="" className="imgModal" />
                    <div className="botaoIrLogin">
                        <Link to="/registo">

                            <label >Registo</label>
                        </Link>
                    </div>


                </div>
            </Slider>
        </div>
    )
}

export default CarouselHomePage
