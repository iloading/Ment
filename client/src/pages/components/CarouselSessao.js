
import React from 'react'
import Slider from "react-slick";

function CarouselSessao() {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    arrows: false,


  };


  return (
    <div className="carousel" id="carouselSessao">

      <Slider {...settings}>
        <div className="cards">
          <label>Resumo</label>
        </div>
        <div className="cards">
          <label>Recursos</label>
        </div>
        <div className="cards">
          <label>Detalhes</label>
        </div>









      </Slider>
    </div>
  );
}


export default CarouselSessao;