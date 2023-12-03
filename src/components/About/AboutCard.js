import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shyam Patel </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> I completed my graduation in Computer Engineering from 
            LDRP Institute of Technology and Research. 
            <br />
            <br />
            Currently, I am working as a <span className="purple">Data Engineer</span> at Ridgeant Technologies. 
            Additionally, I am <span className="purple">writing blogs on Medium </span> about simplifying complex 
            data science concepts and making them easily understandable for everyone 
            using real-life examples.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Imagine your goals, stay focused, make it happen!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
