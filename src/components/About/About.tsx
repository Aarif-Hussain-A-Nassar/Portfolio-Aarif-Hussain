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
            and gaming. Creativity isn't just a hobby; it's a discipline I've
            turned into a venture.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p>
            I co-founded{" "}
            <a
              href="https://two-dots-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--green)", fontWeight: "bold" }}
            >
              Two Dots
            </a>
            {" "}— a creative design studio where we craft premium digital
            experiences, brand identities, and architectural websites for
            businesses that demand excellence. Think of it as where engineering
            precision meets artistic vision.
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
