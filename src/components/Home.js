import '../styles/Home.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useEffect} from "react";

function Home(props) {
    useEffect(() => {
        let languages = document.querySelector(".languages .container-fluid");
        let interval = setInterval(() => {
            if (languages) {
                clearInterval(interval);
            } else {
                languages = document.querySelector(".languages .container-fluid");
            }
        }, 500);

        setInterval(() => {
            if (languages) {
                languages.scrollTop += 1;
                // Set the scroll top to the position of the 4th last child
                let languages_4th_last_child = languages.children[languages.children.length - 4];
                if (languages.scrollTop >= languages_4th_last_child.offsetTop) {
                    languages.scrollTop = languages.children[0].offsetTop;
                }
            }
        }, 30);

        let technologies = document.querySelector(".technologies .container-fluid");
        let interval2 = setInterval(() => {
            if (technologies) {
                clearInterval(interval2);
            } else {
                technologies = document.querySelector(".technologies .container-fluid");
            }
        }, 500);

        setInterval(() => {
            if (technologies) {
                technologies.scrollTop -= 1;
                // Set the scroll top to position of the 1st child
                if (technologies.scrollTop <= technologies.children[0].offsetTop) {
                    technologies.scrollTop = technologies.children[technologies.children.length - 4].offsetTop;
                }
            }
        }, 30);
    }, []);

    return (<div className="home" style={{height: props.height}}>
        <Container fluid>
            <Row xs={1} lg={3}>
                <Col lg={7}>
                    <div className="greeting" style={{height: props.height}}>
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
                                    <Button
                                      href="https://drive.google.com/file/d/1REee-goy-slFbXuV3sq4S7wZWLZcBJvd/preview"
                                      variant="outline-success"
                                      
                                    >Resume</Button>
                                </div>
                            </Row>
                        </Container>
                    </div>

                </Col>
                {props.width > 1100 ? (<Col lg={2}>
                    <div className="languages">
                        <Container fluid style={{
                            scrollbarWidth: "none", overflowY: "scroll", overflowX: "hidden",
                        }}>
                            <Row>
                                <img alt="python-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="java-logo-transparent"
                                     src="https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png"/>
                            </Row>
                            <Row>
                                <img alt="c-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"/>
                            </Row>
                            <Row>
                                <img alt="c++-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="c#-logo-transparent"
                                     src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"/>
                            </Row>
                            <Row>
                                <img alt="javascript-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="nodejs-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="html-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="python-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="java-logo-transparent"
                                     src="https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png"/>
                            </Row>
                            <Row>
                                <img alt="c-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"/>
                            </Row>
                            <Row>
                                <img alt="c++-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"/>
                            </Row>
                        </Container>
                    </div>
                </Col>) : null}
                {props.width > 1100 ? (<Col lg={2}>
                    <div className="technologies">
                        <Container fluid style={{
                            scrollbarWidth: "none", overflowY: "scroll", overflowX: "hidden",
                        }}>
                            <Row>
                                <img alt="react-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="django-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="flask-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="bootstrap-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="git-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="github-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="threejs-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/330px-Three.js_Icon.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="expressjs-logo-transparent-black"
                                     src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"/>
                            </Row>
                            <Row>
                                <img alt="sqlite-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="firebase-logo-transparent"
                                     src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png"/>
                            </Row>
                            <Row>
                                <img alt="mongodb-logo-transparent"
                                     src="https://companieslogo.com/img/orig/MDB_BIG-ad812c6c.png?t=1648915248"/>
                            </Row>
                            <Row>
                                <img alt="android-studio-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="Pycharm-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1200px-PyCharm_Icon.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="react-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="django-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="flask-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png"/>
                            </Row>
                            <Row>
                                <img alt="bootstrap-logo-transparent"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"/>
                            </Row>
                        </Container>
                    </div>
                </Col>) : null}
            </Row>
        </Container>
    </div>);
}

export default Home;