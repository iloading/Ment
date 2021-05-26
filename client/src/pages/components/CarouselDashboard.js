import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






function CarouselDashboard() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        rows: 2,
        slidesPerRow: 2,


    };


    return (


        <div className="carouselDashboard">
            <Slider {...settings}>
                <div className="carouselCards">
                    <h3>1</h3>
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

export default CarouselDashboard;

