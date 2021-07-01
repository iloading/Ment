import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seta from "../../img/setaDireita_cor.png";

function CarouselAjuda() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        rows: 2,
        slidesToScroll: 1,
        arrows: false

    };
    return (
        <div className="carouselCards">

            <Slider {...settings}>
                <div className="cards">
                    <div>
                        <label>Etapa 0</label>
                        <p>Preparação e criação de uma equipa de mentores</p>
                    </div>
                    <img src={seta} alt="" className="seta" />

                </div>
                <div className="cards">
                    <div>
                        <label>Etapa 1</label>
                        <p>Criação da narrativa</p>
                    </div>
                    <img src={seta} alt="" className="seta" />

                </div>
                <div className="cards">
                    <div>
                        <label>Etapa 2</label>
                        <p>Construção do guião da sessão de mentoria (Atividades e Tarefas)</p>
                    </div>
                    <img src={seta} alt="" className="seta" />

                </div>
                <div className="cards">
                    <div>
                        <label>Etapa 3</label>
                        <p>Preparação de tarefas e divulgação da sessão de mentoria</p>
                    </div>
                    <img src={seta} alt="" className="seta" />

                </div>
                <div className="cards">
                    <div>
                        <label>Etapa 4</label>
                        <p>Implementação da sessão de mentoria com base no guião criado</p>
                    </div>
                    <img src={seta} alt="" className="seta" />

                </div>
                <div className="cards">
                    <div>
                        <label>Etapa 5</label>
                        <p>Reflexão final através do preenchimento de questionários</p>
                    </div>
                    <img src={seta} alt="" className="seta" />

                </div>
                <div className="cards">
                    <div>
                        <label>Etapa 6</label>
                        <p>Ajudar outros professores através da partilha do trabalho na plataforma</p>
                    </div>
                    <img src={seta} alt="" className="seta" />

                </div>

            </Slider>
        </div>
    )
}

export default CarouselAjuda
