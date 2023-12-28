import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectImage from "../../Assets/Projects/ProjectImage.png";
import FinanceTracker from "../../Assets/Projects/FinanceTrackerStats.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card bright-image">
            <ProjectCard
              imgPath={FinanceTracker}
              isBlog={false}
              title="Finance Tracker"
              description="Finance Tracker is a comprehensive financial management application featuring a user-friendly homepage with a prominent savings goal feature, revenue, and expense tracking sections with color-coded entries. It includes financial charts for insights, a detailed calendar for expense categorization, and a settings section for user customization. Innovative features such as receipt image capture, recurrence of transactions, and integration with virtual assistants enhance the overall functionality of the application."
              ghLink="https://github.com/Singh2je/FinanceTracker"
              demoLink="https://www.youtube.com/watch?v=LqI86Yh-AyY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Project 2"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Project 3"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Project 4"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Project 5"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProjectImage}
              isBlog={false}
              title="Project 6 "
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo"
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
