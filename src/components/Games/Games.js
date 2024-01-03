import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./GameCards";
import Particle from "../Particle";
import ProjectImage from "../../Assets/Projects/ProjectImage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Games for <strong className="purple"> Fun </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card bright-image">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Rock Paper Scissor"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card bright-image color-change ">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Phaser 1"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Phaser 2"
              description=""
              ghLink=""
              demoLink=""              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
