import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import minhasSessoes from "../../img/minhasSessoes.png"
import criarSessao from "../../img/criarSessao.png"






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
               
           
            <img className="carouselCards"src={minhasSessoes} alt="" />
            <img className="carouselCards"src={minhasSessoes} alt="" />
            <img className="carouselCards"src={minhasSessoes} alt="" />
            <img className="carouselCards"src={minhasSessoes} alt="" />
            <img className="carouselCards"src={minhasSessoes} alt="" />
            <img className="carouselCards"src={minhasSessoes} alt="" />
            <img className="carouselCards"src={minhasSessoes} alt="" />
            <img className="carouselCards"src={criarSessao} alt="" />
             
                
            </Slider>
        </div >






    );
}

export default CarouselDashboard;

