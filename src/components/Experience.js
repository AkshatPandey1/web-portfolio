import React from "react";
import "../styles/Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience(props) {


  return (
    <div className="experience" id="experience" style={{height: props.height}}>
      <div className="experience-inner">

        <div className="experience-title">
          <h1>Experience</h1>
        </div>
        <div className="experience-content">
          <ExperienceCard position="Software Developer Intern" company="UBC" date="May 2021 - August 2021" link="https://www.ubc.ca/"
                          description={["Developed a web application for the UBC Department of Computer Science to help students find and apply for internships and jobs.", "Implemented a web scraper to scrape"]}/>
        </div>
      </div>
    </div>
  )
}

export default Experience;