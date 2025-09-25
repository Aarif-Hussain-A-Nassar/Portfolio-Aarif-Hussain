import React from "react";
import Marquee from "react-fast-marquee";

import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import agile from "../../assets/agile.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import angular from "../../assets/angular.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import aws from "../../assets/aws.svg";
import azure from "../../assets/azure.svg";
import c from "../../assets/c.svg";
import canva from "../../assets/canva.svg";
import csharp from "../../assets/csharp.svg";
import eclipse from "../../assets/eclipse.svg";
import git from "../../assets/git.svg";
import githubcopilot from "../../assets/githubcopilot.svg";
import lightroom from "../../assets/lightroom.svg";
import linux from "../../assets/linux.svg";
import markdown from "../../assets/markdown.svg";
import materialui from "../../assets/materialui.svg";
import mysql from "../../assets/mysql.svg";
import nextJS from "../../assets/nextJS.svg";
import postgresql from "../../assets/postgresql.svg";
import reactquery from "../../assets/reactquery.svg";
import tailwind from "../../assets/tailwind.svg";
import typescript from "../../assets/typescript.svg";
import vscode from "../../assets/vscode.svg";
import datadog from "../../assets/datadog.svg";
import { Container } from "./styles";

type Skill = {
  src: string;
  alt: string;
};

export function Skills() {
  const skills: Skill[] = [
    { src: datadog, alt: "Datadog" },
    { src: reactquery, alt: "React Query" },
    { src: vscode, alt: "VS Code" },
    { src: git, alt: "Git" },
    { src: githubcopilot, alt: "GitHub Copilot" },
    { src: linux, alt: "Linux" },
    { src: canva, alt: "Canva" },
    // { src: lightroom, alt: "Lightroom" },
    { src: eclipse, alt: "Eclipse" },
    { src: c, alt: "C" },
    { src: csharp, alt: "C#" },
    { src: mysql, alt: "MySQL" },
    { src: postgresql, alt: "PostgreSQL" },
    // { src: sqlite, alt: "SQLite" },
    { src: nextJS, alt: "Next.js" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: materialui, alt: "Material UI" },
    { src: typescript, alt: "TypeScript" },
    { src: aws, alt: "AWS" },
    { src: azure, alt: "Azure" },
    { src: angular, alt: "Angular" },
    { src: agile, alt: "Agile" },
    { src: markdown, alt: "Markdown" },
    // { src: python, alt: "Python" },
    { src: java, alt: "Java" },
    { src: jsIcon, alt: "JavaScript" },
    { src: reactIcon, alt: "React" },
    { src: typescriptIcon, alt: "TypeScript" },
    { src: wordpress, alt: "WordPress" },
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: boostrapIcon, alt: "Bootstrap" },
  ];

  return (
    <Container id="skills">
      <h2>Skills</h2>
      <Marquee
        gradient={false} // remove edge fade
        speed={80} // adjust speed (lower = slower)
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
