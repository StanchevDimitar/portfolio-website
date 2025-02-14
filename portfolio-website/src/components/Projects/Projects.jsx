import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard.jsx";

const projects = [
  {
    title: "TowBar Shop",
    imageSrc: "projects/project.png",
    description:
      "This project is a Java Spring-based shop management system designed to facilitate the operation of an online shop. The system allows normal users to browse products, place orders, and track their purchases. Administrators and moderators have additional privileges such as managing products, processing orders, and handling shipments.",
    skills: ["Java", "JavaScript", "HTML", "CSS", "Bootstrap"],
    demo: "https://github.com/StanchevDimitar/ToweBarShopWeb",
  },
  {
    title: "BonAppetit",
    imageSrc: "projects/project-two.jpg",
    description:
      "This is a full-stack project. Using Angular for the client side and Java with Spring for the server side.",
    skills: ["Java", "JavaScript", "Angular"],
    demo: "https://github.com/StanchevDimitar/FullStackProject-BonAppetit",
  },
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
