import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/shyam.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with technology, and with a passion for innovation🚀,
              I find joy in transforming manual tasks into seamless, automated processes with the power of AI.
              <br />
              <br />This passion drives me to write blogs that simplify complex data science problems, making them easily understandable for everyone using real-life examples.
              <br />
              <br />
              My field of interest is building&nbsp;
                <b className="purple"> Intelligent machines </b>
                that automate manual tasks, empowering people to save time and effort, and contributing to the advancement of &nbsp;
                <b className="purple">
                   Artificial Intelligent.
                </b>
              <br />
              <br />
              I possess a strong understanding and skill set in
              <b className="purple"> Machine Learning, Artificial Intelligence</b> and
                <b className="purple">
                  {" "}
                  Data Engineering 
                </b>
              &nbsp; concepts.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ShyamPatel1320"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub size={25}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shyam1320/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn size={25}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://shyampatel1320.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMediumM size={25} color="purple"/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
