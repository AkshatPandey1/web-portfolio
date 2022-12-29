import React from "react";
import "../styles/ExperienceCard.css";

function ExperienceCard(props) {
  const {position, company, date, description, link} = props;
  return (
    <div className="experience-card">
      <div className="experience-card-position-company">
        <h2>{position} <span
          className="company"
          onClick={() => window.open(link, "_blank")}>@ {company}</span></h2>
      </div>
      <div className="experience-card-date">
        <h3>{date}</h3>
      </div>
      <ul className="experience-card-description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;