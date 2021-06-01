import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import minhasSessoes from "../../img/minhasSessoes/minhasSessoes.png"
import minhasSessoes1 from "../../img/minhasSessoes/minhasSessoes1.png"
import minhasSessoes2 from "../../img/minhasSessoes/minhasSessoes2.png"
import minhasSessoes3 from "../../img/minhasSessoes/minhasSessoes3.png"
import criarSessao from "../../img/criarSessao.png"


const sessoaSelect = (e) => {
    console.log(e.target.id);

}



function CarouselDashboard() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        rows: 2,
        slidesPerRow: 2,
        autoplay: true,
        autoplaySpeed: 5000,


    };


    return (


        <div className="carouselDashboard">
            <Slider {...settings}>


                <img className="carouselCards" src={minhasSessoes} alt="sessao_1" id="sessao_1" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={minhasSessoes1} alt="sessao_2" id="sessao_2" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={minhasSessoes2} alt="sessao_3" id="sessao_3" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={minhasSessoes3} alt="sessao_4" id="sessao_4" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={minhasSessoes} alt="sessao_5" id="sessao_5" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={minhasSessoes} alt="sessao_6" id="sessao_6" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={minhasSessoes} alt="sessao_7" id="sessao_7" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={criarSessao} alt="sessao_8" id="sessao_8" onClick={(e) => sessoaSelect(e)} />


            </Slider>
        </div >






    );
}

export default CarouselDashboard;

