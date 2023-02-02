import "../styles/Experience.css";

function Experience() {

  const allExperience = {
    "Koalacademy": {
      position: "Frontend Developer",
      company: "Koalacademy",
      date: "Sept 2021",
      length: "Present",
      description: [
        "Creating the web application to perform the test on the user",
        "Handling connecting the OpenBCI EEG headset to the web application and parsing brain data",
        "Updating the firebase database with the data to be later used by machine learning models",
      ],
      link: "https://neuralberta.tech/project/koalacademy/"
    },
    "University of Alberta": {
      position: "Teaching Assistant",
      company: "University of Alberta",
      date: "Jan 2023",
      length: "Present",
      description: [
        "Hold weekly office hours to assist students with course material",
        "Grade assignments and exams",
        "Provide feedback to students on their assignments and exams",
        "Assist in the development of course material",
      ],
      link: "https://apps.ualberta.ca/catalogue/course/cmput/201"
    },
    Amelia: {
      position: "Software Engineer Intern",
      company: "Amelia",
      date: "Sept 2022",
      length: "Jan 2023",
      description: [
        "Developed and implemented new features in React Native iOS app",
        "Resolved design issues and errors to improve user experience",
        "Contributed to the overall performance and stability of the app",
        "Collaborated with cross-functional team to ensure successful feature launches",
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