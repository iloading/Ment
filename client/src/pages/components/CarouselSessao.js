
import React from 'react'
import Slider from "react-slick";

function CarouselSessao() {
  
    var settings = {
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };


    return (
      <div className="conteudoCarousel">
        
        <Slider {...settings}>
          <div className="cards">
            <h3>1</h3>
          </div>
          <div className="cards">
            <h3>2</h3>
          </div>
          <div className="cards">
            <h3>3</h3>
          </div>
          <div className="cards">
            <h3>4</h3>
          </div>
          

         
      
        </Slider>
      </div>
    );
  }


export default CarouselSessao;