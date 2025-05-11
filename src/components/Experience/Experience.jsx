import React from "react";
import styles from "./Experience.module.css";

const images = import.meta.glob("../../../assets/**/*", { eager: true });

const importImage = (path) => {
  const image = images[`../../../assets/${path}`];
  if (!image) {
    console.warn(`Image not found: ${path}`);
    return "/placeholder.png";
  }
  return image.default || image;
};

const skills = [
  {
    imageSrc: "skills/java.png",
    title: "Java",
  },
  {
    imageSrc: "skills/javascript.webp",
    title: "JavaScript",
  },
  {
    imageSrc: "skills/html.png",
    title: "HTML",
  },
  {
    imageSrc: "skills/css.png",
    title: "CSS",
  },
  {
    imageSrc: "skills/kubernetes.png",
    title: "Kubernetes",
  },
  {
    imageSrc: "skills/kafka.png",
    title: "Kafka",
  },
  {
    imageSrc: "skills/redis.png",
    title: "Redis",
  },
  {
    imageSrc: "skills/cucumber.png",
    title: "Cucumber",
  },
  {
    imageSrc: "skills/git.png",
    title: "Git",
  },
  {
    imageSrc: "skills/docker.webp",
    title: "Docker",
  },
  {
    imageSrc: "skills/spring.png",
    title: "Spring Boot",
  },
  {
    imageSrc: "skills/quarkus.png",
    title: "Quarkus",
  },
  {
    imageSrc: "skills/thymeleaf.png",
    title: "Thymeleaf",
  },
  {
    imageSrc: "skills/bootstrap.png",
    title: "Bootstrap",
  },
  {
    imageSrc: "skills/angular.png",
    title: "Angular",
  },
  {
    imageSrc: "skills/mysql.png",
    title: "MySql",
  },
  {
    imageSrc: "skills/mongodb.png",
    title: "MongoDB",
  },
];

const history = [
  {
    organisation: "Comsystem",
    role: "Full-stack Developer",
    startDate: "Jan 2024",
    endDate: "Present",
    experiences: [
      "Developing an ERP system from the ground up. ",
      "Using microservice architecture.",
      "Building reactive microservices via Project Reactor.",
      "Kubernetes deployment.",
    ],
  },
  {
    organisation: "Software University (SoftUni)",
    role: "Course Assistant",
    startDate: "Nov 2023",
    endDate: "Nov 2024",
    experiences: [
      "Exam/Course Moderation, Mentorship, Exam Testing, Exam Evaluation",
    ],
  },
  {
    organisation: "Nemetschek",
    role: "Speed It Up Program",
    startDate: "Nov 2023",
    endDate: "Nov 2023",
    experiences: [
      "Collaborative Internship Program Project: As part of a team, we developed a project using C# .NET and JavaScript to meet specific company requirements, demonstrating our combined technical expertise and ability to collaborate effectively in a fast-paced environment.",
    ],
  },
  {
    organisation: "Software University (SoftUni)",
    role: "Training Delivery Java Track",
    startDate: "Oct 2022",
    endDate: "May 2023",
    experiences: [
      "Course Delivery, Content Preparation, Assessment and Grading, Student Support, Individual Tutoring, Exam Evaluation and Reporting, and Professional Development in the Java track.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p
                  className={styles.historyDates}
                >{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={importImage(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
