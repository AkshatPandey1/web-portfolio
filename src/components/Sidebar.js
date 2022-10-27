import "../styles/Sidebar.css";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
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

function Sidebar(props) {
    let height = props.height;
    let width = props.width;

    return (
        width > 768 ? (
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
        ) : (
            <>
                <div className="collapsable-navbar">
                    <Navbar bg="transparent" variant="dark" expand="lg">
                        <Navbar.Brand href="/">
                            <img src="/favicon.png" alt="placeholder"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="items">
                                <Nav.Link className="item" href="#about">About</Nav.Link>
                                <Nav.Link className="item" href="#experience">Experience</Nav.Link>
                                <Nav.Link className="item" href="#projects">Projects</Nav.Link>
                                <Nav.Link className="item" href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </>
        )
    )
}

export default Sidebar;