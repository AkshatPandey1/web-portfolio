import "../styles/Projects.css";
import Project from "./Project";

function Projects(props) {
  return (
    <div className="projects" id="projects">
      <div className="projects-inner">
        <div className="projects-title">
          <h1>Projects</h1>
        </div>
        <div className="projects-content">
          <Project title="Portfolio"
                   description="This website! Made with React, React Bootstrap to create a responsive website that
                 displays my projects and information about me."
                   image="https://i.imgur.com/LmZP52L.png"
                   link="localhost:3000"
                   github="https://github.com/AkshatPandey1/web-portfolio"
                   orientation="left"/>
        </div>
      </div>
    </div>
  )
}

export default Projects;