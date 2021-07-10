import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seta from "../../img/setaDireita_cor.png";
import { Link } from "react-router-dom";

function CarouselAjuda() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        rows: 2,
        slidesToScroll: 1,
        slidesPerRow: 1,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    rows: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    rows: 2,
                    slidesToScroll: 1,
                    slidesPerRow: 1,

                }
            },
        ]


    };
    return (
        <div className="carouselCards">

            <Slider {...settings}>
                <Link to="/tutorial/0" className="decorationLinks">
                    <div className="cards">
                        <div>
                            <label>Etapa 0</label>
                            <p>Preparação e criação de uma equipa de mentores</p>
                        </div>
                        <img src={seta} alt="" className="seta" />

                    </div>
                </Link>
                <Link to="/tutorial/1" className="decorationLinks">
                    <div className="cards">
                        <div>
                            <label>Etapa 1</label>
                            <p>Criação da narrativa</p>
                        </div>
                        <img src={seta} alt="" className="seta" />

                    </div>
                </Link>
                <Link to="/tutorial/2" className="decorationLinks">
                    <div className="cards">
                        <div>
                            <label>Etapa 2</label>
                            <p>Construção do guião da sessão de mentoria (Atividades e Tarefas)</p>
                        </div>
                        <img src={seta} alt="" className="seta" />

                    </div>
                </Link>
                <Link to="/tutorial/3" className="decorationLinks">
                    <div className="cards">
                        <div>
                            <label>Etapa 3</label>
                            <p>Preparação de tarefas e divulgação da sessão de mentoria</p>
                        </div>
                        <img src={seta} alt="" className="seta" />

                    </div>
                </Link>
                <Link to="/tutorial/4" className="decorationLinks">
                    <div className="cards">
                        <div>
                            <label>Etapa 4</label>
                            <p>Implementação da sessão de mentoria com base no guião criado</p>
                        </div>
                        <img src={seta} alt="" className="seta" />

                    </div>
                </Link>
                <Link to="/tutorial/5" className="decorationLinks">
                    <div className="cards">
                        <div>
                            <label>Etapa 5</label>
                            <p>Reflexão final através do preenchimento de questionários</p>
                        </div>
                        <img src={seta} alt="" className="seta" />

                    </div>
                </Link>
                <Link to="/tutorial/6" className="decorationLinks">
                    <div className="cards">
                        <div>
                            <label>Etapa 6</label>
                            <p>Ajudar outros professores através da partilha do trabalho na plataforma</p>
                        </div>
                        <img src={seta} alt="" className="seta" />

                    </div>
                </Link>

            </Slider>
        </div>
    )
}

export default CarouselAjuda
