import "../styles/About.css";

function About(props) {
  return (
    <div className="about" id="about" style={{height: props.height}}>
      <h1>About</h1>
      <h4>
        My name is Akshat Pandey, I'm a fullstack/mobile developer based in Edmonton, Alberta, Canada. I'm a
        student at the University of Alberta, pursuing a Bachelor's degree in Computer Science with specialization in
        software practice. I'm currently working as a software developer at Amelia a startup based in Toronto, Ontario
        and as a Teaching Assistant at the University of Alberta.
      </h4>
      <br/>
      <h4>
        I'm passionate about building scalable and maintainable software, and I'm always looking for new opportunities
        to learn and grow as a developer.
      </h4>
    </div>
  )
    ;
}

export default About;