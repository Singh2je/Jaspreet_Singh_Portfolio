import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gallery.css'; // Import a CSS file for styling

const Gallery = () => {
  return (
    <Row style={{margin:"20px"}}>
      <h1 className="project-heading">
        <strong className="purple">Gallery </strong>
      </h1>
      <Col lg={4} md={12} className='mb-4 mb-lg-0'>
        <div className="image-container">
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />
          <div className="image-text-overlay">Boat on Calm Water</div>
        </div>

        <div className="image-container">
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wintry Mountain Landscape'
          />
          <div className="image-text-overlay">Wintry Mountain Landscape</div>
        </div>
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0'>
        <div className="image-container">
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Mountains in the Clouds'
          />
          <div className="image-text-overlay">Mountains in the Clouds</div>
        </div>

        <div className="image-container">
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />
          <div className="image-text-overlay">Boat on Calm Water</div>
        </div>
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0'>
        <div className="image-container">
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
          />
          <div className="image-text-overlay">Waves at Sea</div>
        </div>

        <div className="image-container">
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
          />
          <div className="image-text-overlay">Yosemite National Park</div>
        </div>
      </Col>
    </Row>
  );
}

export default Gallery;
