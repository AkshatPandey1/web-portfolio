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
                  className="underline-animation projects-title">Projects</span><> </>section of this website.
                <br/><br/>
                Currently, I am a student at the University of Alberta pursuing a degree in computer science. In
                addition,
                I am an intern developer at<> </>
                <span className="underline-animation amelia"
                      onClick={() => window.open("https://getamelia.co/", "_blank")}>BBInsight</span>
                , a company based in Rolling Meadows, Illinois 
                <> </>
                <br/><br/>
                I am a highly enthusiastic and hardworking individual who is always seeking opportunities to learn and
                improve my skills. If you have any inquiries or would like to collaborate, please do not hesitate to<> </>
                <span className="underline-animation contact-title"
                      onClick={() => window.open("#contact", "_self")}>contact me</span>!
              </p>
            </Col>
            <Col lg={6}>
              <h2>My Skills</h2>
              <div className="skills">
                <Skill title="Python" time="8 years"/>
                <Skill title="C/C++" time="5 years"/>
                <Skill title="HTML" time="5 years"/>
                <Skill title="CSS" time="5 years"/>
                <Skill title="JavaScript" time="5 years"/>
                <Skill title="NumPy" time="3 years"/>
                <Skill title="Git" time="4 years"/>
                <Skill title="MySQL" time="4 years"/>
                <Skill title="Node.js" time="3 years"/>
                <Skill title="Express.js" time="3 years"/>
                <Skill title="Flask" time="2 years"/>
                <Skill title="Bootstrap" time="3 years"/>
                <Skill title="React" time="3 years"/>
                <Skill title="React Native" time="2 years"/>
                <Skill title="Three.js" time="2 years"/>
                <Skill title="PyTorch" time="2 years"/>
                <Skill title="Java" time="2 years"/>
                <Skill title="C#" time="2 years"/>
                <Skill title="MongoDB" time="2 years"/>
                <Skill title="Firebase" time="2 years"/>
                <Skill title="Ruby" time="<1 year"/>
                <Skill title="AWS" time="1 year"/>
                <Skill title="gRPC" time="<1 year"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;