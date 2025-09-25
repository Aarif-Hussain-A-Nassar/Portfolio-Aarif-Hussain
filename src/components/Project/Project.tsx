import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Vehicle Insurance */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Aarif-Hussain-A-Nassar/Vehicle-Insurance-based-on-driving-score" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://drive.google.com/file/d/1xoXBBaoMXH5o0Ctduj6qh6D8Y5iEjBYm/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Vehicle Insurance Based On Driving Score using Blockchain</h3>
              <p>Revolutionized vehicle insurance by using an OBD port to track driving skills and generate a driving score. Data is securely stored on blockchain with Hyperledger Fabric, enabling fast, transparent, and accurate claims without traditional delays.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>Random Forest</li>
                <li>Blockchain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Tungston Labs Website */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Aarif-Hussain-A-Nassar/Tungstonlabs" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://tungstonlabs.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Tungston Labs Website</h3>
              <p>Created a dynamic website for Tungston Labs, highlighting services, vision, and mission. Integrated interactive features like contact forms and subscriptions for user engagement.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Vercel</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Weather App */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Aarif-Hussain-A-Nassar/Weather-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://aarif-hussain-a-nassar.github.io/Weather-App/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather App Prediction Website</h3>
              <p>Developed a weather prediction application using HTML, CSS, JavaScript, and an external API to fetch real-time weather data. Allows users to check the weather forecast for any location, providing detailed information such as temperature, humidity, and weather conditions.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* AUTOPLAY */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Aarif-Hussain-A-Nassar/AUTOPLAY-Rock-Paper-Scissors" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://aarif-hussain-a-nassar.github.io/AUTOPLAY-Rock-Paper-Scissors/dom-rock-paper-scissors.html" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AUTOPLAY - Rock Paper Scissors</h3>
              <p>An interactive, automated Rock-Paper-Scissors game built with HTML, CSS, and JavaScript, featuring smart gameplay and intuitive design for fun user interaction.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Todo List */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Aarif-Hussain-A-Nassar/Todo-List" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://aarif-hussain-a-nassar.github.io/Todo-List/to-do-list.html" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Todo List</h3>
              <p>A simple, clean, and interactive to-do list web application created with HTML, CSS, and JavaScript. Allows users to add, delete, and manage tasks efficiently, with a user-friendly interface for better task organization.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
