import Sidebar from "./components/Sidebar";
import 'animate.css';
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import './App.css';
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    let [height, setHeight] = useState(window.innerHeight);
    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        });
    })

    return (
        <div className="App">
            {width > 1100 ? (
                <Row>
                    <Col>
                        <Sidebar height={height} width={width}/>
                    </Col>
                    <Col>
                        <div className="content" style={{height: height, width: width * 0.84}}>
                            <Home height={height} width={width}/>
                            <About height={height} width={width}/>
                            <Experience/>
                            <Projects/>
                            <Contact/>
                        </div>
                    </Col>
                </Row>
            ) : (
                <>
                    <Sidebar height={height} width={width}/>
                    <div className="content" style={{height: height, width: width}}>
                        <Home height={height * 0.9} width={width}/>
                        <About height={height * 0.9} width={width}/>
                        <Experience/>
                        <Projects/>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
