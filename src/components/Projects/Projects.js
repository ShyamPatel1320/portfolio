import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import IMAGEN from "../../Assets/Projects/Imagen.png";
import Reinforcement from "../../Assets/Projects/Reinforcement.png";
import Classification_vs_Clustering from "../../Assets/Projects/Classification_vs_Clustering.jpg";
import GAN from "../../Assets/Projects/GAN.jpg";
import AI_ML_DL from "../../Assets/Projects/AI_ML_DL.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are the blogs I've recently written.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IMAGEN}
              isBlog={true}
              title="Introduction to Diffusion Models and IMAGEN: The Magic Behind Text-to-Image Generation"
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://shyampatel1320.medium.com/introduction-to-diffusion-models-and-imagen-the-magic-behind-text-to-image-generation-24221532580d"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Classification_vs_Clustering}
              isBlog={true}
              title="Machine Learning Essentials: The Ultimate Guide to Classification and Clustering"
              // description="Machine Learning Essentials: The Ultimate Guide to Classification and Clustering"
              ghLink="https://shyampatel1320.medium.com/machine-learning-essentials-the-ultimate-guide-to-classification-and-clustering-b09e6e1a7740"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reinforcement}
              isBlog={true}
              title="Getting Started with Reinforcement Learning: A Beginner's Journey"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://shyampatel1320.medium.com/getting-started-with-reinforcement-learning-a-beginners-journey-346bb605e850"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GAN}
              isBlog={true}
              title="Exploring Generative AI: A Beginner's Guide to Understand How GANs Model Work"
              // description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://shyampatel1320.medium.com/exploring-generative-ai-a-beginners-guide-to-understanding-how-gans-work-1b2a323cc402"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI_ML_DL}
              isBlog={true}
              title="Artificial Intelligence VS Machine Learning VS Deep Learning With Real Life Example"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://shyampatel1320.medium.com/artificial-intelligence-vs-machine-learning-vs-deep-learning-18bfcebc2aa2"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
      <Row className="project-card">
        <ProjectCard
        
          isBlog={true}
          title="Explore all my blogs, and if you enjoy the content, consider following me for more updates."
          // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
          // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
          ghLink="https://shyampatel1320.medium.com/"
          // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
        />
      </Row>
    </Container>
  );
}

export default Projects;
