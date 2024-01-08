import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./GameCards";
import Particle from "../Particle";
import ProjectImage from "../../Assets/Projects/ProjectImage.png";
import RockPaperScissor from "../../Assets/Projects/RockPaperScissor.png";
import RockPaperScissor2 from "../../Assets/Projects/RockPaperScissor2.png";
import Dino from "../../Assets/Projects/Dino.png";

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
              imgPath={RockPaperScissor2}
              isBlog={false}
              title="Rock Paper Scissor"
              description=""
              ghLink="https://github.com/Singh2je/3-rock-paper-scissors-group-group-24"
              demoLink="https://singh2je.github.io/3-rock-paper-scissors-group-group-24/"
            />
          </Col>

          <Col md={4} className="project-card bright-image">
            <ProjectCard
              imgPath={Dino}
              isBlog={false}
              title="Go Dino!"
              description=""
              ghLink="https://github.com/Singh2je/final-project-dino-game?tab=readme-ov-file"
              demoLink="https://singh2je.github.io/final-project-dino-game/"              
            />
          </Col>

          <Col md={4} className="project-card bright-image color-change ">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Phaser 1"
              description=""
              ghLink="https://github.com/Singh2je/71-phaser-game-Singh2je"
              demoLink="https://singh2je.github.io/71-phaser-game-Singh2je/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Flappy Bird"
              description=""
              ghLink="https://github.com/Singh2je/8-phaser-game-Singh2je?tab=readme-ov-file"
              demoLink="https://singh2je.github.io/8-phaser-game-Singh2je/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
