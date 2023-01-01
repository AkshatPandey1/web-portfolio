import "../styles/OtherProject.css";
import {Col, Row} from "react-bootstrap";
import {BoxArrowUpRight, Github} from "react-bootstrap-icons";

function OtherProject(props) {

  const {title, description, github, link, technologies} = props;

  return (
    <div className="other-project">
      <Row>
        <Col xs={9}>
          <div className="other-project-title">
            <h3>{title}</h3>
          </div>
        </Col>
        <Col xs={3}>
          <div className="other-project-links">
            <Github className="other-project-link" onClick={() => window.open(github, "_blank")}/>
            {link !== "" ?
              <BoxArrowUpRight className="other-project-link" onClick={() => window.open(link, "_blank")}/> : null}
          </div>
        </Col>
      </Row>
      <Row>
        <div className="other-project-description">
          <p>{description}</p>
        </div>
      </Row>
      <Row>
        <div className="other-project-technologies">
          <Row md={technologies.length}>
            {technologies.map((technology, index) => (
              <Col key={index}>
                <div className="technology">
                  <p>{technology}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Row>
    </div>
  )
}

export default OtherProject;