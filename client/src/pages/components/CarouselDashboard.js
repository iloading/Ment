import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Equipas from "../../img/Equipas/1.png"
import Equipas1 from "../../img/Equipas/2.png"
import Equipas2 from "../../img/Equipas/3.png"
import Equipas3 from "../../img/Equipas/4.png"
import criarSessao from "../../img/Equipas/5.png"


const sessoaSelect = (e) => {
    console.log(e.target.id);

}



function CarouselDashboard({ ecra }) {
    let settings;
    if (ecra === 'mobile') {
        settings = {
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
            accessibility: true,



        };
    } else {
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: true,
            rows: 1,
            slidesPerRow: 2,
            autoplay: false,
            autoplaySpeed: 5000,
            accessibility: true,



        };
    }



    return (


        <div className="carouselDashboard">
            <Slider {...settings}>


                <img className="carouselCards" src={Equipas} alt="sessao_1" id="sessao_1" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={Equipas1} alt="sessao_2" id="sessao_2" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={Equipas2} alt="sessao_3" id="sessao_3" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={Equipas3} alt="sessao_4" id="sessao_4" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={Equipas} alt="sessao_5" id="sessao_5" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={Equipas} alt="sessao_6" id="sessao_6" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={Equipas} alt="sessao_7" id="sessao_7" onClick={(e) => sessoaSelect(e)} />
                <img className="carouselCards" src={criarSessao} alt="sessao_8" id="sessao_8" onClick={(e) => sessoaSelect(e)} />


            </Slider>
        </div >






    );
}

export default CarouselDashboard;

