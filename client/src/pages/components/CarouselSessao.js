
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
      <div className="carousel">
        
        <Slider {...settings}>
        <div className="cards">
            <h3>Resumo</h3>
          </div>
          <div className="cards">
            <h3>Recursos</h3>
          </div>
          <div className="cards">
            <h3>Detalhes</h3>
          </div>
         
         
         
          
          
          

         
      
        </Slider>
      </div>
    );
  }


export default CarouselSessao;