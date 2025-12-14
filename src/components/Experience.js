import "../styles/Experience.css";

function Experience() {

  const allExperience = {
    "Blackbuck Insights": {
      position: "DevOps Engineer",
      company: "Blackbuck Insights",
      date: "June 2023",
      length: "July 2024",
      description: [
        "Architected 7 ETL pipelines using AWS Glue/S3, achieving 100% data validation accuracy",
        "Optimized PostgreSQL queries to eliminate processing errors in high-volume TransUnion data",
        "Integrated CI/CD workflows in GitLab, reducing deployment times and ensuring version control integrity",
      ],
      link: "https://bbinsight.com/"
    },
    "Koalacademy": {
      position: "Frontend Developer",
      company: "Koalacademy",
      date: "Jan 2023",
      length: "April 2023",
      description: [
        "Implemented real-time data handling using Firebase for a BCI-optimized learning platform",
        "Collaborated on processing EEG signals (OpenBCI) to visualize user retention and study confidence",
        "Built a responsive React.js interface for real-time neurofeedback",
      ],
      link: "https://neuralberta.tech/project/koalacademy/"
    },
    "University of Alberta": {
      position: "Teaching Assistant (C, Unix)", // SPECIFIC TITLE
      company: "University of Alberta",
      date: "Jan 2023",
      length: "April 2023",
      description: [
        "Mentored 40+ students in low-level C programming, memory management, and Unix tools",
        "Graded 70+ assignments weekly, providing technical feedback on code efficiency",
      ],
      link: "https://apps.ualberta.ca/catalogue/course/cmput/201"
    },
    Amelia: {
      position: "React Native Developer",
      company: "Amelia",
      date: "Sept 2022",
      length: "Jan 2023",
      description: [
        "Implemented secure AWS backend connections for authentication and storage",
        "Diagnosed and fixed critical performance bugs and UI inconsistencies across iOS/Android",
      ],
      link: "https://getamelia.co/"
    },
    "RE:COGNITION Lab": {
      position: "Volunteer Research Assistant",
      company: "RE:COGNITION Lab",
      date: "Sept 2022",
      length: "4 months",
      description: [
        "Automating script creation for the testing software using Python",
        "Data preprocessing using Pyton and Pandas to produce readable data",
        "Collaborated with graduate students and professor",
        "Observed the research process and execution of experiments",
      ],
      link: "https://sites.psych.ualberta.ca/recognitionlab/"
    },
    Paper: {
      position: "CS and Advanced Math Tutor",
      company: "Paper",
      date: "Nov 2021",
      length: "9 months",
      description: [
        "Coached students through challenging material with positive reinforcement",
        "Supported students by identifying and addressing specific concerns",
        "Utilized positive reinforcement techniques to encourage and motivate students.",
        "Provided students with a safe and comfortable environment to learn",
      ],
      link: "https://paper.co/"
    }
  }


  return (
    <div className="experience" id="experience">
      <div className="experience-inner">
        <div className="experience-title">
          <h1>Experience</h1>
        </div>
        <div className="experience-timeline">
          <div className="container">
            <div className="main-timeline">


              {Object.keys(allExperience).map((key) => (
                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                                    <span className="date">
                                            <span className="month">{allExperience[key].date}</span>
                                            <span className="year">{allExperience[key].length}</span>
                                    </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">{allExperience[key].position} <span
                      className="company underline-animation"
                      onClick={() => window.open(allExperience[key].link, "_blank")}>@{allExperience[key].company}</span>
                    </h5>
                    <ul className="description">
                      {allExperience[key].description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;