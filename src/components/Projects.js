import "../styles/Projects.css";
import Project from "./Project";
import OtherProject from "./OtherProject";
import {Row} from "react-bootstrap";

function Projects(props) {

  const featuredProjects = {
    "Portfolio": {
      "title": "Portfolio",
      "description": "Web developer portfolio built with React, Bootstrap, and Animate CSS. Features info about skills, experience, projects, and a contact form. User-friendly and visually appealing.",
      "image": "https://i.imgur.com/LmZP52L.png",
      "link": "http://localhost:3000/web-portfolio",
      "github": "https://github.com/AkshatPandey1/web-portfolio",
      "technologies": ["React", "React Bootstrap", "Animate CSS", "Github Pages"],
      "orientation": "left"
    },
    "Music for Mood": {
      "title": "Music for Mood",
      "description": "Web app that recommends songs based on user's mood using Spotify API. Features include playback control, top artists/tracks, recently played songs, playlist creation, song descriptions, recommendations, and OAuth authentication. 1300+ users in the first month.",
      "image": "https://i.imgur.com/MLocJcX.png",
      "link": "https://music-for-mood.herokuapp.com/",
      "github": "https://github.com/AkshatPandey1/spotify-mood",
      "technologies": ["React", "Spotify API", "Heroku", "OAuth"],
      "orientation": "right"
    },
    "Well Fed": {
      "title": "Well Fed",
      "description": "Android App for managing ingredients, recipes, and meal plans. Features include adding/updating/removing items, sorting/searching, automatic shopping list updates, expiration alerts, and unit conversion. Sleek UI design.",
      "image": "https://i.imgur.com/qS2hpvt.png",
      "link": "",
      "github": "https://github.com/AkshatPandey1/spotify-mood",
      "technologies": ["Android Studio", "Firebase", "GitHub", "JUnit", "Espresso"],
      "orientation": "left"
    },
    "Midnight Movie Massacre": {
      "title": "Midnight Movie Massacre",
      "description": "Midnight Movie Massacre is a game developed using RPGMakerMV, Trello, and GitHub. My role in the development process was editing effects, designing events, and fixing bugs. The game received the best mechanics award during its release.",
      "image": "https://i.imgur.com/sGIBxp7.png",
      "link": "https://breanne77.github.io/Gold_release/index.html",
      "github": "https://github.com/Breanne77/Groundbreak/commits/development",
      "technologies": ["RPGMakerMV", "Trello", "GitHub"],
      "orientation": "right"
    }
  }

  const otherProjects = {
    "HealthBeta": {
      "title": "HealthBeta",
      "description": "Webapp made to improve the mental well being by using Sentiment Analysis. The user is then given a mood score and a list of resources to help them. (Winner of the Hackathon)",
      "github": "https://github.com/mansooranis/ram-hackedbeta",
      "link": "https://devpost.com/software/helpit-lwp8yz",
      "technologies": ["React", "Flask", "Pandas"]
    },
    "Galaxy Generator": {
      "title": "Galaxy Generator",
      "description": "A galaxy generator made using three.js. The user can change the number of stars, the size of the galaxy, and the color of the stars and much more.",
      "github": "https://github.com/AkshatPandey1/galaxy-generator",
      "link": "https://akshatpandey1.github.io/galaxy-generator/",
      "technologies": ["Three.js", "JavaScript", "HTML", "CSS"]
    },
    "SimplDo": {
      "title": "SimplDo",
      "description": "A simple to-do and note taking app made using React. The user can add, edit, and delete notes and to-dos. The user can also mark to-dos as complete and incomplete.",
      "github": "https://github.com/AkshatPandey1/simpldo",
      "link": "",
      "technologies": ["React", "Firebase", "JavaScript"]
    },
  }


  return (<div className="projects" id="projects">
    <div className="projects-inner">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-content">
        <div className="featured-projects">
          <h2>Featured Projects</h2>
          {Object.keys(featuredProjects).map((project, index) => (
            <Project key={index} {...featuredProjects[project]}/>
          ))}
        </div>

        <div className="other-projects">
          <h2>Other Projects</h2>
          {/* // Keep four projects per row and two when on phone */}
          <Row xs={1} md={2} lg={3}>
            {Object.keys(otherProjects).map((project, index) => (
              <OtherProject key={index} {...otherProjects[project]}/>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>);
}

export default Projects;