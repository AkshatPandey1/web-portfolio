import "../styles/Project.css";
import {Col, Row} from "react-bootstrap";

function Project(props) {
  let {title, description, image, link, github, orientation} = props;

  // Orientation is either "left" or "right" so that the image is on the left or right side of the text
  return (
    <div className="project">
      <Row>
        {orientation === "left" ? (
          <>
            <Col lg={6}>
              <div className="project-image">
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col lg={6}>
              <div className="project-image">
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  )
}

export default Project;