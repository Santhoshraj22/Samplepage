import React from 'react';
import overview from '../assets/overview.jpeg';  
import questin from '../assets/questin.jpeg';  
import usermanual from '../assets/usermanual.png';  
import FAQ from '../assets/FAQ.png';  
import video from '../assets/video.jpeg'; 
import features from '../assets/features.jpeg'; 
import price from '../assets/price.png'; 
import camera from '../assets/camera.png'; 
import './Content.css';

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-item">
        <img src={overview} alt="Overview" className="headerimage" />
        <span>Overview</span>
      </div>

      <div className="content-item">
        <img src={questin} alt="Question" className="headerimage" />
        <span>Question</span>
      </div>

      <div className="content-item">
        <img src={features} alt="Features" className="headerimage" />
        <span>Features</span>
      </div>


      <div className="content-item">
        <img src={video} alt="Video" className="headerimage" />
        <span>Video</span>
      </div>

      <div className="content-item">
        <img src={price} alt="Price" className="headerimage" />
        <span>Price</span>
      </div>

      <div className="content-item">
        <img src={camera} alt="Camera" className="headerimage" />
        <span>Camera</span>
      </div>
    </div>
  );
};

export default Content;
