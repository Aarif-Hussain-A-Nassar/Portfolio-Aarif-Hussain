// Education.tsx
import React from "react";

import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

// Type definition for each education entry
interface EducationEntry {
  year: string;
  degree: string;
  institution: string;
  grade?: string;
}

export function Education(): JSX.Element {
  const educationData: EducationEntry[] = [
    {
      year: "2016–2017",
      degree: "Tenth Standard",
      institution: "Fathima Girls High School",
    },
    {
      year: "2017–2019",
      degree: "Higher Secondary Education (Computer Science)",
      institution: "St Teresa School",
    },
    {
      year: "2019–2023",
      degree: "Bachelor of Technology",
      institution: "Toc H Institute of Science & Technology",
      grade: "CGPA: 8.9",
    },
  ];

  return (
    <Container id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 200}>
            <div className={`education-card stagger-${index % 2}`}>
              <header>
                <div className="year">{edu.year}</div>
              </header>
              <div className="body">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                {edu.grade && (
                  <p>
                    <strong>{edu.grade}</strong>
                  </p>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
