import { Container } from "./styles";
import Aarif from "../../assets/Aarif.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Aarif Hussain, a Software Engineer with 2+ years of
            experience in front-end development and scalable knowledge in
            backend technologies like .NET and APIs.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I love crafting seamless user experiences, optimizing API payloads,
            and delivering clean, maintainable code that solves real-world
            problems.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Beyond coding, I'm a storyteller—through photography, videography,
            and gaming. I also run a freelancing page where I design websites
            and market products like{" "}
            <a
              href="https://www.instagram.com/cookinggrandma_/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--green)", fontWeight: "bold" }}
            >
              Cooking Grandma
            </a>
            .
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            You can also check out my work on{" "}
            <a
              href="https://www.instagram.com/twodotsofficial_/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--green)", fontWeight: "bold" }}
            >
             Two Dots Official
            </a>
            .
          </p>
        </ScrollAnimation>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={Aarif} alt="Aarif Hussain" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
