import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WebAppCard from "./WebAppCards";
import Particle from "../Particle";
import ProjectImage from "../../Assets/Projects/ProjectImage.png";
import Ditto from "../../Assets/Projects/Ditto.png";
import FleetWave from "../../Assets/Projects/FleetWave.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Web </strong>Applications
        </h1>
        <p style={{ color: "white" }}>
     
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card bright-image">
            <WebAppCard
              imgPath={Ditto}
              isBlog={false}
              title="Ditto - Audio Transcription Software"
              description="Ditto is a transcription web application that is designed to replace manual meeting note-taking. It records and transcribes conversations, categorizes information, and generates concise summaries. With Ditto, users can capture every detail of one-on-one meetings, group sessions, or conference calls, ensuring a complete and accurate record of the conversation. The software's ability to create easily digestible summaries allows users to save time and focus on essential tasks, while still having the convenience of referring back to meeting notes whenever needed."
              ghLink="https://github.com/Singh2je/Ditto"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <WebAppCard
              imgPath={FleetWave}
              isBlog={false}
              title="Fleet Wave"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <WebAppCard
              imgPath={ProjectImage}
              isBlog={false}
              title="To Do Application"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo"
              ghLink="https://github.com/Singh2je/ToDoApplication"
              demoLink=""
            />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
