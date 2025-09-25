import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  const projects = [
    {
      title: "Vehicle Insurance Based On Driving Score using Blockchain",
      description: `Revolutionized vehicle insurance by using an OBD port to track driving skills and generate a driving score. Data is securely stored on blockchain with Hyperledger Fabric, enabling fast, transparent, and accurate claims without traditional delays.`,
      skills: [
        "JavaScript",
        "HTML5",
        "CSS",
        "PHP",
        "Random Forest",
        "Blockchain",
      ],
      github:
        "https://github.com/Aarif-Hussain-A-Nassar/Vehicle-Insurance-based-on-driving-score",
      link: "https://drive.google.com/file/d/1xoXBBaoMXH5o0Ctduj6qh6D8Y5iEjBYm/view?usp=sharing",
    },
    {
      title: "Tungston Labs Website",
      description: `Created a dynamic website for Tungston Labs, highlighting services, vision, and mission. Integrated interactive features like contact forms and subscriptions for user engagement.`,
      skills: ["React.js", "Vercel"],
      github: "https://github.com/Aarif-Hussain-A-Nassar/Tungstonlabs",
      link: "https://tungstonlabs.vercel.app/",
    },
    {
      title: "Weather App Prediction Website",
      description: `Developed a weather prediction application using HTML, CSS, JavaScript, and an external API to fetch real-time weather data. Allows users to check the weather forecast for any location, providing detailed information such as temperature, humidity, and weather conditions. Ensured a responsive design to enhance user experience across different devices.`,
      skills: ["HTML5", "CSS", "JavaScript", "API"],
      github: "https://github.com/Aarif-Hussain-A-Nassar/Weather-App",
      link: "https://aarif-hussain-a-nassar.github.io/Weather-App/",
    },
    {
      title: "AUTOPLAY - Rock Paper Scissors",
      description: `An interactive, automated Rock-Paper-Scissors game built with HTML, CSS, and JavaScript, featuring smart gameplay and intuitive design for fun user interaction.`,
      skills: ["HTML5", "CSS", "JavaScript", "API"],
      github:
        "https://github.com/Aarif-Hussain-A-Nassar/AUTOPLAY-Rock-Paper-Scissors",
      link: "https://aarif-hussain-a-nassar.github.io/AUTOPLAY-Rock-Paper-Scissors/dom-rock-paper-scissors.html",
    },
    {
      title: "Todo List",
      description: `A simple, clean, and interactive to-do list web application created with HTML, CSS, and JavaScript. Allows users to add, delete, and manage tasks efficiently, with a user-friendly interface for better task organization.`,
      skills: ["HTML5", "CSS", "JavaScript"],
      github: "https://github.com/Aarif-Hussain-A-Nassar/Todo-List",
      link: "https://aarif-hussain-a-nassar.github.io/Todo-List/to-do-list.html",
    },
  ];

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
