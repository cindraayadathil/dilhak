import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../images/Ban1.jpeg';

function Banner1() {
  return (
    <div className="Banner1">
      {/* <Link to="/Bannerdetails"> */}
        <img src={banner1} alt="Banner1" width='100%' height='800px' className="banner1-img" />
      {/* </Link> */}
    </div>
  );
}

export default Banner1;