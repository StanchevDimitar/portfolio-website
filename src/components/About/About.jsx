import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../../assets/about/aboutImage.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} alt="alt" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I build scalable and efficient backend systems using Java with
                frameworks like Spring Boot and Quarkus. My focus is on
                developing microservices and RESTful APIs that are robust,
                secure, and easy to maintain. I also work with tools like Kafka
                and Redis for real-time data processing and caching.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I specialize in creating responsive, user-friendly interfaces
                using JavaScript, HTML, CSS, and Angular. With a keen eye for
                detail, I ensure that the frontend of every project is both
                visually appealing and optimized for performance across all
                devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Deployment & Databases</h3>
              <p>
                I leverage Docker and Kubernetes for containerization and
                orchestration, ensuring seamless deployment and scalability of
                applications. I have hands-on experience with databases such as
                PostgreSQL, MySQL, and MongoDB, ensuring data integrity and
                optimal performance for complex applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
