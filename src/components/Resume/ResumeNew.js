import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from '../../Assets/Jaspreet.pdf'
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            as={Link} // Use Link component for internal navigation
            to="/resume"
            variant="primary"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Print Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            as={Link} // Use Link component for internal navigation
            to="/resume"
            variant="primary"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Print Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
