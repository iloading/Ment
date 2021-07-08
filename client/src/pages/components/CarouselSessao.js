
import React from 'react'
import Slider from "react-slick";
import { Link, useRouteMatch } from "react-router-dom";
function CarouselSessao() {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    arrows: false,


  };



  let { url } = useRouteMatch();



  return (
    <div className="carousel" id="carouselSessao">

      <Slider {...settings}>
        <Link to={`${url}/resumo`}>
          <div className="cards">
            <label >Resumo</label>
          </div>
        </Link>
        <Link to={`${url}/recursos`}>
          <div className="cards">
            <label >Recursos</label>
          </div>
        </Link>
        <Link to={`${url}/detalhes`}>
          <div className="cards">
            <label >Detalhes</label>
          </div>
        </Link>









      </Slider>
    </div>
  );
}


export default CarouselSessao;