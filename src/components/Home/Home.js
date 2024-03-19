import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import About from "../About/About";
import Home2 from "./Home2";
import Gallery from "../Gallery/gallery";
import Resume from "../Resume/ResumeNew";
import Projects from "../MobileApps/MobileApps"; //Start of projects
import WebApps from "../WebApps/WebApps";
import Games from "../Games/Games";
import Contact from "../contact/contact";
import Type from "./Type";
import { Element } from "react-scroll";

function Home() {
  return (
    <section>
      <Element name="home">
        <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Jaspreet Singh</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        </Container>
      </Element>
      <Element name="about">
        <section id="about">
          <Home2 />
          {/* <About /> */}
        </section>
      </Element>

      <Element name="projects">
        <section id="projects">
          <Projects />
        </section>
      </Element>

      <Element name="webApps">
        <section id="webApps">
          <WebApps />
        </section>
      </Element>

      <Element name="games">
        <section id="games">
          <Games />
        </section>
      </Element>


      <Element name="gallery">
        <section id="gallery">
          <Gallery />
        </section>
      </Element>

{/*      
      <Element name="resume">
        <section id="resume">
          <Resume />
        </section>
      </Element> */}

      <Element name="contact">
        <section id="contact">
          <Contact />
        </section>
      </Element>
    </section>
  );
}

export default Home;
