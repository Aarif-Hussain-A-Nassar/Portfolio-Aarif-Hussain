// Experience.tsx
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

// Type definition for each experience entry
interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills?: string[];
}

export function Experience(): JSX.Element {
  const experienceData: ExperienceEntry[] = [
    {
      company: "Williams Lea",
      role: "Software Engineer",
      duration: "Nov 2024 - Present · 11 mos",
      location: "Remote",
      description:
        "Software Engineering Trainee at Williams Lea — diving into software development projects, collaborating with talented professionals, and enhancing my skills in software engineering and problem-solving. Excited to contribute to a company that values innovation and high-quality solutions.",
      skills: ["React.js", "React Hooks", "+13 skills"],
    },
    {
      company: "Tata Consultancy Services",
      role: "Assistant System Engineer Trainee",
      duration: "Dec 2023 - Nov 2024 · 1 yr",
      location: "Kochi, Kerala, India",
      description:
        "Specialized in system development and maintenance. Collaborated for seamless operations and delivered impactful engineering solutions.",
      skills: ["React", "React Hooks", "+13 skills"],
    },
    {
      company: "Tungston Labs",
      role: "Intern",
      duration: "Aug 2023 - Dec 2023 · 5 mos",
      location: "Kochi, Kerala, India",
      description:
        "Worked with a skilled team to empower clients’ marketing objectives, delivering innovative brand strategies and digital solutions.",
      skills: ["WordPress", "React.js", "+1 skill"],
    },
    {
      company: "BasketHunt Pvt Ltd",
      role: "IT and Web Development Intern",
      duration: "Aug 2023 - Sep 2023 · 2 mos",
      location: "Remote",
      description:
        "Worked on e-commerce expansion into cloud computing and web services, delivering custom web solutions.",
      skills: ["CSS", "HTML5", "+1 skill"],
    },
  ];

  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <ScrollAnimation key={index} animateIn="fadeInUp" delay={index * 200}>
            <div className={`experience-card stagger-${index % 2}`}>
              <header>
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
                <span className="location">{exp.location}</span>
              </header>
              <div className="body">
                <p>{exp.description}</p>
                {exp.skills && (
                  <p>
                    <strong>Skills:</strong> {exp.skills.join(", ")}
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
