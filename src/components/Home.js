import '../styles/Home.css';
import {Row} from "react-bootstrap";

function Home(props) {
    console.log(props);
    return (
        <div className="home">
            <div className="languages" style={{height: props.height * 0.2}}>
                <h3>Languages</h3>
            </div>
            <div className="greeting" style={{height: props.height * 0.6}}>
                <Row>
                    <h3>Hey there! I am</h3>
                </Row>
                <Row>
                    <h1>Akshat Pandey,</h1>
                </Row>
                <Row>
                    <h2>an aspiring software developer :)</h2>
                </Row>
            </div>
            <div className="technologies" style={{height: props.height * 0.2}}>
                <h3>Technologies</h3>
            </div>
        </div>
    );
}

export default Home;