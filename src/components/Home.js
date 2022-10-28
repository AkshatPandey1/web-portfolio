import '../styles/Home.css';
import {Button, Col, Container, Row} from "react-bootstrap";

function Home(props) {
    console.log(props);
    return (<div className="home" style={{height: "100vh"}}>
        <Container fluid>
            <Row xs={1} lg={3}>
                <Col lg={8}>
                    <div className="greeting" style={{height: props.height * 0.9}}>
                        <Container fluid>
                            <Row>
                                <h3>Hey there! I am</h3>
                            </Row>
                            <Row>
                                <h1>Akshat Pandey</h1>
                            </Row>
                            <Row>
                                <h3>Software Developer</h3>
                            </Row>
                            <Row>
                                <div className="resume">
                                    <Button variant="outline-success">Resume</Button>
                                </div>
                            </Row>
                        </Container>
                    </div>

                </Col>
                <Col lg={2}>
                    <div className="languages">
                        <div className="container blur">
                            <ul className="slider">


                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="technologies">
                    </div>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default Home;