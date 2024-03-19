import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Jaspreet1.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT </span> ME
            </h1>
          

 

            <p className="home-about-body">
            As an accomplished tech professional with a proven track record in project management and software development, I excel in driving efficiency, innovation, and team cohesion.
              <b className="purple">  </b>
              <b className="purple"> </b>
              <br />
              <br />  {" "}
              <b className="purple"> </b> 
             <b className="purple"> </b>My experience across diverse platforms and methodologies in various industries has consistently delivered significant operational improvements and cost savings
              <br />
              <br /> I am the
              <i>
                <b className="purple"> perfect balance </b>
              </i>
              of leadership and technical skills that your company needs.
              <br />
              <br /> &nbsp;
              <i>
                <b className="purple"> </b>{" "}
                <b className="purple"></b>
              </i>
              <br />
              <br /> <b className="purple"></b>
              <i>
                <b className="purple"> </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ height: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1></h1>
            <h3>
              Feel free to <span className="purple">connect </span>with me
            </h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Singh2je"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jaspreet-singh19/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillProject />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
