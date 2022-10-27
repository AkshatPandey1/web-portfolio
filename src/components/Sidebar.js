import "../styles/Sidebar.css";
import {Col, Container, Nav, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {
    Envelope,
    EnvelopeCheckFill, EnvelopeDash, EnvelopeFill,
    GenderTrans,
    Github,
    Google,
    Linkedin,
    Mailbox,
    Mailbox2
} from "react-bootstrap-icons";

function Sidebar() {
    let [height, setHeight] = useState(window.innerHeight);
    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        });
    })

    return (
        <>
            <div className="sidebar" style={{height: height * 0.9, width: width * 0.15}}>
                <Container fluid>
                    <div className="header" style={{height: height * 0.2}}>
                        <Container fluid>
                            <Row>
                                <a href="/">
                                    <img src="/favicon.png" alt="placeholder"/>
                                </a>
                            </Row>
      
                        </Container>
                    </div>
                    <div className="body" style={{height: height * 0.6}}>
                        <Container fluid>
                            <Row className="nav">
                                <Nav.Link href="#about">About</Nav.Link>
                            </Row>
                            <Row className="nav">
                                <Nav.Link href="#experience">Experience</Nav.Link>
                            </Row>
                            <Row className="nav">
                                <Nav.Link href="#projects">Projects</Nav.Link>
                            </Row>
                            <Row className="nav">
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Row>
                        </Container>
                    </div>
                    <div className="footer" style={{height: height * 0.2}}>
                        <Container fluid>
                            <Row xs={1} md={3}>
                                <Col>
                                    <a href="https://linkedin.com/in/AkshatPandey1">
                                        <Linkedin className="icon" size={30}/>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="mailto:apandey3@ualberta.ca">
                                        <EnvelopeFill className="icon" size={30}/>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://github.com/AkshatPandey1">
                                        <Github className="icon" size={30}/>
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Sidebar;