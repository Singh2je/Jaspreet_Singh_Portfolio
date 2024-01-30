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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am currently pursuing Bachelors in
              <b className="purple"> Software Development </b> and
              <b className="purple"> Masters of Business Administration</b>.
              <br />
              <br /> As part of my curriculum, I have done{" "}
              <b className="purple">7 software development co-ops </b> along
              with <b className="purple"> Project Management co-op</b>, because  I
              want to have the hard skills as well as the soft skills required
              to succeed in this field.
              <br />
              <br /> I want to become a
              <i>
                <b className="purple"> perfect balance </b>
              </i>
              between business and technical skills which is what I intended t o
              do when I started college.
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
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
