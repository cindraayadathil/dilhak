import React from 'react';
// import { Link } from 'react-router-dom';
import banner from '../images/ban.jpg';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css";


function Banner() {
  return (
    <div className="Banner">
        <Carousel>
      <Carousel.Item>
          <img src={banner} alt="Banner" width='100%' height='90%' className="banner-img" />
      </Carousel.Item>
      <Carousel.Item>
          <img src={banner} alt="Banner" width='100%' height='90%' className="banner-img" />
      </Carousel.Item>
      <Carousel.Item>
          <img src={banner} alt="Banner" width='100%' height='90%' className="banner-img" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;