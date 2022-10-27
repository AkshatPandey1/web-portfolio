import './App.css';
import Sidebar from "./components/Sidebar";
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";

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
            {width > 768 ? (
                <Row>
                    <Col>
                        <Sidebar height={height} width={width}/>
                    </Col>
                    <Col>
                        <div className="content" style={{height: height * 0.9, width: width * 0.75}}>

                        </div>
                    </Col>
                </Row>
            ) : (
                <>
                    <Sidebar height={height} width={width}/>
                    <div className="content" style={{height: height * 0.9, width: width}}>

                    </div>
                </>
            )}
        </div>
    );
}

export default App;
