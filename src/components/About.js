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
                    I am currently an <b>MSc Cybersecurity student (Honors) at TU/e</b> in Eindhoven, specializing in Applied Cryptography and Network Security.
                    <br/><br/>
                    With a strong professional background in <b>DevOps and Software Engineering</b>, I bridge the gap between building scalable applications and securing them.
                    My expertise lies in Cloud Infrastructure (AWS), Automated Defense Systems, and Full-Stack Development.
                    <br/><br/>
                    Previously, I worked as a <b>DevOps Engineer</b> at Blackbuck Insights and a Full-Stack Developer at various startups.
                    I am always looking for opportunities in <b>DevSecOps, Threat Intelligence, and Offensive Security</b>.
                    If you have any inquiries or would like to collaborate, please do not hesitate to<> </>
                    <span className="underline-animation contact-title" onClick={() => window.open("#contact", "_self")}>contact me</span>!
                </p>
            </Col>
            <Col lg={6}>
              <h2>My Skills</h2>
              <div className="skills">
                <Skill title="Network Security" time="2 years"/>
                <Skill title="AWS (Glue/S3)" time="2 years"/>
                <Skill title="Python" time="8 years"/>
                <Skill title="Docker/CI/CD" time="2 years"/>
                <Skill title="Linux/Bash" time="5 years"/>
                <Skill title="React/Next.js" time="4 years"/>
                <Skill title="SQL (Postgres)" time="5 years"/>
                <Skill title="C/C++" time="6 years"/>
                <Skill title="Java" time="3 years"/>
                <Skill title="Metasploit/Burp" time="2 years"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;