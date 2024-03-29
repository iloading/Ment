import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carouselCard1 from "../../img/carouselCards1.png";




/* VER DOCUMENTAÇÃO PARA ALTERAR COMPORTAMENTO DO CARROSSEL https://react-slick.neostack.com/docs/example/simple-slider */
function Carousel() {
    var settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (


        <div className="carousel">
            <Slider {...settings}>
                <div className="carouselCards">
                    <div className="imgCard">
                        <img src={carouselCard1} alt="" />
                    </div>
                    <div className="texto">
                        <label>Joana Silva, 34</label>
                        <p>Nunca pensei que fosse tão fácil, e a funcionalidade de poder ver outros projetos, incríbellllllll. </p>
                    </div>


                </div>
                <div className="carouselCards">
                    <h3>2</h3>
                </div>
                <div className="carouselCards">
                    <h3>3</h3>
                </div>
                <div className="carouselCards">
                    <h3>4</h3>
                </div>
                <div className="carouselCards">
                    <h3>5</h3>
                </div>
                <div className="carouselCards">
                    <h3>6</h3>
                </div>
                <div className="carouselCards">
                    <h3>7</h3>
                </div>
                <div className="carouselCards">
                    <h3>8</h3>
                </div>
            </Slider>
        </div >






    );
}

export default Carousel;

