import React from "react";
import Marquee from "react-fast-marquee";

import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

import { Container } from "./styles";

type Skill = {
  src: string;
  alt: string;
};

export function Skills() {
  const skills: Skill[] = [
    { src: python, alt: "Python" },
    { src: java, alt: "Java" },
    { src: jsIcon, alt: "JavaScript" },
    { src: reactIcon, alt: "React" },
    { src: typescriptIcon, alt: "TypeScript" },
    { src: vueIcon, alt: "Vue" },
    { src: wordpress, alt: "WordPress" },
    { src: shopify, alt: "Shopify" },
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: boostrapIcon, alt: "Bootstrap" },
  ];

  return (
    <Container id="skills">
      <h2>Skills</h2>
      <Marquee
        gradient={false}   // remove edge fade
        speed={60}         // adjust speed (lower = slower)
        pauseOnHover={true}
        pauseOnClick={true}
        autoFill={true}
      >
        {skills.map((skill: Skill, index: number) => (
          <div className="skill" key={index}>
            <img src={skill.src} alt={skill.alt} />
            <p>{skill.alt}</p>
          </div>
        ))}
      </Marquee>
    </Container>
  );
}
