import React from 'react';
import '../styles/Skill.css';

function Skill(props) {
  const {title, time} = props;

  // Create a function that makes the time string the same length as the title string by adding \u00A0 on both sides
  const formatTime = (time) => {
    let timeLength = time.length;
    let titleLength = title.length;
    let difference = titleLength - timeLength;
    let newTime = time;
    for (let i = 0; i < difference / 2 + 1; i++) {
      newTime = "\u00A0" + newTime + "\u00A0";
    }
    return newTime;
  }


  const [isHovered, setIsHovered] = React.useState(false);

  const textStyles = {
    color: isHovered ? "#111111" : "rgba(0, 0, 0, 0.7)",
    backgroundColor: isHovered ? "#FACF0F" : "#E7E7E7",
  }

  return (
    <div className="skill">
      <div className="skill-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
           style={textStyles}>
        <div className="skill-title">
          <p>{isHovered ? formatTime(time) : title}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
