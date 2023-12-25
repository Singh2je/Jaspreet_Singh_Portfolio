import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaEnvelope } from 'react-icons/fa';
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <strong className="main-name">Jaspreet Singh</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <a href="/home">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </a>
            </Nav.Item>

            <Nav.Item>
              <a href="/about">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </a>
            </Nav.Item>

            <Nav.Item>
              <a href="/projects">
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </a>
            </Nav.Item>

            <Nav.Item>
              <a href="/resume">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </a>
            </Nav.Item>

            <Nav.Item>
              <a href="#gallery">
                <ImBlog style={{ marginBottom: "2px" }} /> Gallery
              </a>
            </Nav.Item>

            <Nav.Item>
              <a href="/contact">
                <FaEnvelope style={{ marginBottom: "2px" }} /> Contact
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
