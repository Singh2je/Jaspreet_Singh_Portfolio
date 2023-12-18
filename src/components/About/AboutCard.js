import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaspreet Singh </span>
            from <span className="purple"> Cincinnati, OH</span>
            <br />
            <br/>
            I am currently employed as a Project Manager at Western Southern, check my full work experience in Resume.
            <br />
            <br />
            Apart from coding, I like:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe in law of action"{" "}
          </p>
          <footer className="blockquote-footer">Jaspreet Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
