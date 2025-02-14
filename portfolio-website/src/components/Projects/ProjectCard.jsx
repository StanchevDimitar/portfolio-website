import React from "react";
import styles from "./ProjectCard.module.css";

const images = import.meta.glob("../../../assets/projects/*", { eager: true });

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo },
}) => {
  const handleClick = () => {
    window.open(demo, "_blank");
  };

  const importImage = (path) => {
    const image = images[`../../../assets/${path}`];
    if (!image) {
      console.warn(`Image not found: ${path}`);
      return "/placeholder.png";
    }
    return image.default || image;
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img
        src={importImage(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.links}>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkIcon}
        >
          🔗
        </a>
      </div>
    </div>
  );
};
