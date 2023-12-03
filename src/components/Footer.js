import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn,FaMediumM } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <a
            href="mailto:shyampateljob1320@gmail.com"
            style={{ color: "white" }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <p>shyampateljob1320@gmail.com&nbsp;<AiFillMail/></p>
          </a>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ShyamPatel1320"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shyam1320/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://shyampatel1320.medium.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaMediumM />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;


