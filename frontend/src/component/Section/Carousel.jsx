import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
import image from '../../assest/image.jpg'

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='carousel'>
      <Slider {...settings} className='slider'>
        <div className="item">
          <img src={image} alt="" className='img-fluid' />
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
      </Slider>
    </div>
  );
}
