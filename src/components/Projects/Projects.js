import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { BsArrowUpRight, BsCheck2Circle } from "react-icons/bs";
import callGenieImage from "../../Assets/case-studies/call-genie-dashboard.png";
import mintImage from "../../Assets/case-studies/mint-dashboard.png";
import mcpIntegrationImage from "../../Assets/case-studies/mcp-integration-dashboard.png";
import interviewImage from "../../Assets/case-studies/ai-interview-dashboard.png";

const projects = [
  {
    title: "Call Genie",
    eyebrow: "AI-powered call intelligence",
    image: callGenieImage,
    summary:
      "An end-to-end AI pipeline that transforms customer-call recordings into searchable, actionable intelligence.",
    capabilities: [
      "Speaker-labelled transcription and automated PII redaction",
      "LLM analysis for sentiment, quality, key issues and resolution status",
      "Live operations dashboard and RAG chatbot for plain-English queries",
    ],
    impact: "100% call coverage · 60–80% support-cost reduction · 24/7 assistance",
  },
  {
    title: "MINT",
    eyebrow: "GenAI media intelligence",
    image: mintImage,
    summary:
      "A centralized media monitoring and journalist-query platform for proactive brand intelligence across every channel.",
    capabilities: [
      "Real-time ingest across print, digital, TV, social and vernacular media",
      "AI summaries, sentiment, entities, impact scoring and crisis alerts",
      "Structured query lifecycle management with AI-assisted response drafts",
    ],
    impact: "5+ channels · near real-time alerts · 60–80% time saved",
  },
  {
    title: "Custom MCP Integration Platform",
    eyebrow: "Enterprise process automation",
    image: mcpIntegrationImage,
    summary:
      "An AI-powered integration platform that lets teams securely query and automate enterprise systems through natural language.",
    capabilities: [
      "Custom MCP servers connecting ChatGPT with SharePoint, NetSuite and Primavera P6",
      "Secure APIs, role-based access control and audit logging for enterprise compliance",
      "Reusable integration framework to accelerate new-system onboarding",
    ],
    impact: "Natural-language workflows · secure system actions · reusable connectors",
  },
  {
    title: "AI-Powered Interview System",
    eyebrow: "Adaptive hiring intelligence",
    image: interviewImage,
    summary:
      "A data-driven interview system that understands resumes, creates role-specific questions and evaluates candidate responses.",
    capabilities: [
      "Resume analysis to extract skills, technologies and project experience",
      "Adaptive LLM questioning with specialist-panel selection by role",
      "Response scoring for relevance, accuracy and depth, including follow-up questions",
    ],
    impact: "Automated first-round screening · tailored interview flows · less manual effort",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="projects-intro">
          <p className="projects-kicker">Selected work</p>
          <h1 className="project-heading">Turning complex workflows into <strong className="purple">AI products</strong></h1>
          <p>Two enterprise AI platforms designed to turn high-volume, unstructured data into timely decisions.</p>
        </div>
        <Row className="case-study-list">
          {projects.map((project, index) => (
            <Col xs={12} key={project.title}>
              <article className={`case-study ${index % 2 ? "case-study--reverse" : ""}`}>
                <div className="case-study-copy">
                  <p className="case-study-eyebrow">{project.eyebrow}</p>
                  <h2>{project.title}</h2>
                  <p className="case-study-summary">{project.summary}</p>
                  <ul>
                    {project.capabilities.map((capability) => <li key={capability}><BsCheck2Circle />{capability}</li>)}
                  </ul>
                  <p className="case-study-impact">{project.impact}</p>
                  <a className="case-study-link" href="mailto:shyampateljob1320@gmail.com?subject=Portfolio%20project%20enquiry">Discuss this work <BsArrowUpRight /></a>
                </div>
                <div className="case-study-image-wrap">
                  <img src={project.image} alt={`${project.title} product dashboard concept`} className="case-study-image" />
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
