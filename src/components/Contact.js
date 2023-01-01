import "../styles/Contact.css";
import {Button} from "react-bootstrap";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch!</h1>
      </div>
      <div className="contact-description">
        <p>I am currently looking for a full-time position as a software developer for my co-op term starting in April
          2023. Feel free to reach out to me if you have any questions or would like to connect!</p>
      </div>
      <div className="mail-button">
        <Button variant="outline-light" onClick={() => window.open("mailto:apandey3@ualberta.ca", "_blank")}>Say
          Hi!</Button>
      </div>
    </div>
  )
}

export default Contact;