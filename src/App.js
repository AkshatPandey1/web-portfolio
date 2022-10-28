import './App.css';
import Sidebar from "./components/Sidebar";
import 'animate.css';
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Home from "./components/Home";

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
                        <div className="content" style={{height: height * 0.9, width: width * 0.85}}>
                            <Home height={height * 0.9} width={width}/>
                        </div>
                    </Col>
                </Row>
            ) : (
                <>
                    <Sidebar height={height} width={width}/>
                    <div className="content" style={{height: height * 0.9, width: width}}>
                        <Home height={height * 0.9} width={width}/>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
