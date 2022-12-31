import "../styles/About.css";
import {Col, Row} from "react-bootstrap";
import Skill from "./Skill";

function About(props) {
  return (
    <div className="about" id="about" style={{height: props.height}}>
      <div className="about-inner">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-content">
          <Row>
            <Col xl={6}>
              <h2>Learn About Me</h2>
              <p>
                As a software developer, I am dedicated to learning and creating innovative web and mobile applications
                using React, React Native, and various backend technologies. Some of my projects can be found in
                the<> </>
                <span
                  className="underline-animation projects"
                  onClick={() => {
                    window.location.href = "#projects"
                  }}>Projects</span> section of this website.
                <br/><br/>
                Currently, I am a student at the University of Alberta pursuing a degree in computer science. In
                addition,
                I am an intern software developer at
                <span className="underline-animation amelia"
                      onClick={() => window.open("https://getamelia.co/", "_blank")}> Amelia</span>
                , a startup founded in Toronto, Canada, and a Teacher's
                Assistant for the programming methodology course
                <span className="underline-animation cs201"
                      onClick={() => window.open("https://apps.ualberta.ca/catalogue/course/cmput/201", "_blank")}> CMPUT
                  201</span><> </>at the University of Alberta.
                <br/><br/>
                I am a highly enthusiastic and hardworking individual who is always seeking opportunities to learn and
                improve my skills. If you have any inquiries or would like to collaborate, please do not hesitate to
                contact me.
              </p>
            </Col>
            <Col lg={6}>
              <h2>My Skills</h2>
              <div className="skills">
                <Skill title="Python" time="6 years"/>
                <Skill title="C/C++" time="4 years"/>
                <Skill title="HTML" time="4 years"/>
                <Skill title="CSS" time="4 years"/>
                <Skill title="JavaScript" time="4 years"/>
                <Skill title="NumPy" time="3 years"/>
                <Skill title="Git" time="3 years"/>
                <Skill title="MySQL" time="3 years"/>
                <Skill title="Node.js" time="2 years"/>
                <Skill title="Express.js" time="2 years"/>
                <Skill title="Flask" time="2 years"/>
                <Skill title="Bootstrap" time="2 years"/>
                <Skill title="React" time="2 years"/>
                <Skill title="React Native" time="1 year"/>
                <Skill title="Three.js" time="1 year"/>
                <Skill title="PyTorch" time="1 year"/>
                <Skill title="Java" time="1 year"/>
                <Skill title="C#" time="1 year"/>
                <Skill title="MongoDB" time="1 year"/>
                <Skill title="Firebase" time="1 year"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;