import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../../assets/hero/heroImage.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dimitar</h1>
        <p className={styles.description}>
          I'm a Full Stack Developer passionate about exploring new technologies
          and delivering efficient, scalable solutions. With a keen ability for
          fast decision-making in architecture design, I’m always focused on
          staying ahead in the field.
        </p>
        <a href="mailto:mitko00stanchev@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
