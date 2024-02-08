import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        MacOS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        VsCode
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Postman
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        GitLab
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Android Studio
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        JIRA
      </Col>
{/* 
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
