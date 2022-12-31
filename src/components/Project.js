import "../styles/Project.css";
import {Col, Row} from "react-bootstrap";

function Project(props) {
  let {title, description, image, link, github, orientation} = props;

  return (
    <div className="project">
      <Row>
        <Col xl={6}>

        </Col>
      </Row>
    </div>
  )
}

export default Project;