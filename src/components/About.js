import "../styles/About.css";
import {Col, Row} from "react-bootstrap";
import Skill from "./Skill";

function About(props) {
  return (
    <div className="about" id="about" style={{height: props.height}}>
      <div className="about-title">
        <h1>About Me</h1>

      </div>
      <div className="about-content">
        <Row>
          <Col lg={6}>
            <h2>Learn More About Me</h2>
            <p>
              As a software developer, I am dedicated to learning and creating innovative web and mobile applications
              using React, React Native, and various backend technologies. Some of my projects can be found in the<> </>
              <span onClick={() => {window.location.href = "#projects"}}
                    style={{cursor: "pointer", textDecoration: "underline"}}>Projects</span> section of this website.
              <br/><br/>
              Currently, I am a student at the University of Alberta pursuing a degree in computer science. In addition,
              I am an intern software developer at Amelia, a startup founded in Toronto, Canada, and a Teacher's
              Assistant for the programming methodology course at the University of Alberta.
              <br/><br/>
              I am a highly enthusiastic and hardworking individual who is always seeking opportunities to learn and
              improve my skills. If you have any inquiries or would like to collaborate, please do not hesitate to
              contact me.
            </p>
          </Col>
          <Col lg={6}>
            <h2>My Skills</h2>
            <div className="skills">
              <Skill title="React" time="1 year"/>
              <Skill title="React Native" time="1 year"/>
              <Skill title="Node.js" time="1 year"/>
              <Skill title="Java" time="1 year"/>
              <Skill title="C++" time="1 year"/>
              <Skill title="Python" time="1 year"/>
              <Skill title="HTML" time="1 year"/>
              <Skill title="CSS" time="1 year"/>
              <Skill title="JavaScript" time="1 year"/>
              <Skill title="Git" time="1 year"/>
              <Skill title="MongoDB" time="1 year"/>
              <Skill title="MySQL" time="1 year"/>
              <Skill title="Firebase" time="1 year"/>
              <Skill title="AWS" time="1 year"/>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;