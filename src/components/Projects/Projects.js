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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          --- Here are some projects I've worked on ---
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

          <Col md={4} className="project-card bright-image">
            <ProjectCard
              imgPath={Ditto}
              isBlog={false}
              title="Ditto - Audio Transcription Software"
              description="Ditto is a revolutionary AI-powered product designed to replace manual meeting note-taking. It records and transcribes conversations, categorizes information, and generates concise summaries. With Ditto, users can capture every detail of one-on-one meetings, group sessions, or conference calls, ensuring a complete and accurate record of the conversation. The software's ability to create easily digestible summaries allows users to save time and focus on essential tasks, while still having the convenience of referring back to meeting notes whenever needed."
              ghLink="https://github.com/Singh2je/Ditto"
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
