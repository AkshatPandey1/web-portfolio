import "../styles/Project.css";
import {Col, Row} from "react-bootstrap";
import {BoxArrowUpRight, Github} from "react-bootstrap-icons";

function Project(props) {
  let {title, description, image, link, github, technologies, orientation} = props;

  function projectImage() {
    return (
      <div className="project-image">
        <img src={image} alt={title}/>
      </div>
    )
  }

  function projectContent() {
    return (
      <div className={`project-content ${orientation}`}>
        <div className="project-title">
          <h1>{title}</h1>
        </div>
        <div className="project-description">
          <p>{description}</p>
        </div>
        <div className="project-technologies">
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
        <div className="project-links">
          <Github className="project-link" onClick={() => window.open(github, "_blank")}/>
          {link !== "" ? <BoxArrowUpRight className="project-link" onClick={() => window.open(link, "_blank")}/> : null}
        </div>
      </div>
    )
  }


  return (
    <div className="project">
      <Row className={`${orientation}-row`}>
        {orientation === "left" ? (
          <>
            <Col xl={6}>
              {projectImage()}
            </Col>
            <Col xl={6}>
              {projectContent()}
            </Col>
          </>
        ) : (
          <>
            <Col xl={6}>
              {projectContent()}
            </Col>
            <Col xl={6}>
              {projectImage()}
            </Col>
          </>
        )}
      </Row>
    </div>
  )
}

export default Project;