import React from 'react';
import Ban5 from '../images/Ban5.png';
import Ban2 from '../images/Ban2.avif';
import Ban3 from '../images/Ban3.webp';
import Ban4 from '../images/Ban4.png';
import Ban6 from '../images/Ban6.avif';
import Ban7 from '../images/Ban7.jpeg';
import './Banner1.css'; // Import CSS file for styling

function Banner1() {
  return (
    <div>
     
      <div className="scroll-container" >
        {/* Image containers with images */}
        <div className="image-container">
        <img src={Ban5} alt="Ban5" width="350" height="800"/>
        </div>
        <div className="image-container">
        <img src={Ban6} alt="Ban6" width="350" height="300"/>
        </div>
        <div className="image-container">
        <img src={Ban6} alt="Ban6" width="350" height="300"/>
        </div>
        <div className="image-container">
          <img src={Ban6} alt="Ban6" width="350" height="300"/>
        </div>
        <div className="image-container">
          <img src={Ban6} alt="Ban6" width="350" height="300"/>
        </div>
        <div className="image-container">
          <img src={Ban6} alt="Ban6" width="350" height="300"/>
        </div>
        <div className="image-container">
        <img src={Ban6} alt="Ban6" width="350" height="300"/>
        </div>
      </div>
      
    </div>
  );
}

export default Banner1;
