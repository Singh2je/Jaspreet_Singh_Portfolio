import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectImage from "../../Assets/Projects/ProjectImage.png";
import FinanceTracker from "../../Assets/Projects/FinanceTrackerStats.png";
import CalendarTech from "../../Assets/Projects/CalendarTech.png";
import Ditto from "../../Assets/Projects/Ditto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Mobile</strong> Applications
        </h1>
        <p style={{ color: "white" }}>
      
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

          <Col md={4} className="project-card bright-image color-change ">
            <ProjectCard
              imgPath={CalendarTech}
              isBlog={false}
              title="Calendar Tech"
              description="The CalendarTech app aims to provide users with a comprehensive platform for managing events, notes, and notifications. The use of Firebase ensures cloud-based storage for seamless data access across devices. The login feature adds a personalized touch to the app, allowing users to associate their data with specific accounts. Overall, CalendarTech offers a user-friendly interface for organizing events, taking notes, and get reminded of things that matter."
              ghLink="https://github.com/Singh2je/CalendarTech"
              demoLink="https://www.youtube.com/watch?v=MriAL22fEWU&t=463s"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
