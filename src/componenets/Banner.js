import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../images/ban.jpg';

function Banner() {
  return (
    <div className="Banner">
        <img src={banner} alt="Banner" width='100%' height='90%' className="banner-img" />
    </div>
  );
}

export default Banner;