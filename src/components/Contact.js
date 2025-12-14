import "../styles/Contact.css";
import {Button} from "react-bootstrap";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch!</h1>
      </div>
      <div className="contact-description">
        <p>
          I am always looking for new opportunities and projects to work on. If you have a project you would like me
          to work on or just want to say hi, feel free to reach out to me!
        </p>
      </div>
      <div className="mail-button">
        <Button variant="outline-light" onClick={() => window.open("mailto:akshatpandeymyself@gmail.com", "_blank")}>Say
          Hi!</Button>
      </div>
    </div>
  )
}

export default Contact;