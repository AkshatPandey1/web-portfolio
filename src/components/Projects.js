import "../styles/Projects.css";
import Project from "./Project";

function Projects(props) {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-content">
        <Project title="Portfolio" description="This website! Made with React and Bootstrap."
                 image="https://i.imgur.com/8ZQ2Z0M.png" link="https://www.joshuazhang.ca" github="https://github.com/joshuazhang1/portfolio"
                  orientation="left"/>
      </div>
    </div>
  )
}

export default Projects;