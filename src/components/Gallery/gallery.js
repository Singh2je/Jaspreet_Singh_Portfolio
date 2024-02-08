import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gallery.css'; // Import a CSS file for styling
import Bhangra from "../../Assets/Gallery/Bhangra.jpg";
import Drawing from "../../Assets/Gallery/Drawing.jpg";
import FestivalOfFaiths from "../../Assets/Gallery/FestivalOfFaiths.jpg";
import Jeep from "../../Assets/Gallery/Jeep.jpg";
import Pose from "../../Assets/Gallery/Pose.jpg";
import Project from "../../Assets/Gallery/Project.jpg";
import Wedding from "../../Assets/Gallery/Wedding.jpg";


const Gallery = () => {
  return (
    <Row style={{margin:"20px"}}>
      <h1 className="project-heading">
        <strong className="purple"> Gallery  </strong>
        <br></br>
        <br></br>
      </h1>
      <Col lg={4} md={12} className='mb-4 mb-lg-0'>
        <div className="image-container">
          <img
            src= {Bhangra}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wedding'
          />
          <div className="image-text-overlay"></div>
        </div>

        <div className="image-container">
          <img
            src={FestivalOfFaiths}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wintry Mountain Landscape'
          />
          <div className="image-text-overlay"></div>
        </div>
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0'>
        <div className="image-container">
          <img
            src= {Jeep}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Mountains in the Clouds'
          />
          <div className="image-text-overlay"></div>
        </div>

        <div className="image-container">
          <img
            src= {Drawing}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />
          <div className="image-text-overlay"></div>
        </div>

    
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0'>
        <div className="image-container">
          <img
            src={Pose}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
          />
          <div className="image-text-overlay"></div>
        </div>

        <div className="image-container">
          <img
            src={Project}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
          />
          <div className="image-text-overlay"></div>
        </div>
      </Col>
    </Row>
  );
}

export default Gallery;
