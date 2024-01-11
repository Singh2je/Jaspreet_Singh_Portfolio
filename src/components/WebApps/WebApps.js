import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WebAppCard from "./WebAppCards";
import Particle from "../Particle";
import ToDoApplication from "../../Assets/Projects/ToDoApplication.png";
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
        <p style={{ color: "white" }}></p>
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
              description=" A need for unified platform for efficient load, truck, and driver management, coupled with the need for timely access to information for brokers. In response to this industry gap, we developed FleetWave, a web-based application with an objective to establish a unified environment tailored for small business carriers. This initiative centers on providing streamlined load management and fostering seamless communication among brokers, carriers, and drivers. The core focus lies in mitigating operational complexities, inefficiencies, and ultimately simplifying the logistics cycle for small businesses. "
              ghLink=""
              demoLink="https://www.youtube.com/watch?v=BoUJZ3AoY0I&t=52s"
            />
          </Col>

          <Col md={4} className="project-card bright-image">
            <WebAppCard
              imgPath={ToDoApplication}
              isBlog={false}
              title="To Do Application"
              description="
A To-Do List application with note-saving functionality is designed to help users organize tasks and notes in a systematic manner. The application allows users to create, view and delete a list of tasks or notes (In Beginning Stages)"
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
