import React from "react";
import styles from "./title.module.scss";

const Title = (): JSX.Element => {
  return (
    <div className={styles.wrap} id="home">
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <span className={styles.bigText}>Front-End React Developer 👋🏼</span>
            <br />
            <br />
            <span className={styles.smallText}>
              Привіт, я Суський Денис, зацiкавлений Front-end React Developer,
              живу в Україні, Київ
            </span>
            <a target="_blank" href="https://goo.gl/maps/qT6BhbdVx4FYXdkL7">
              {" "}
              📍
            </a>
          </div>
          <div className={styles.image}>
            <img src="src/assets/avatar.png" alt="avatar" />
          </div>
        </div>
        <div className={styles.skills}>
          <span>Tech Stack |</span>
          <img src="src/assets/html-5.png" alt="" />
          <img src="src/assets/css-3.png" alt="" />
          <img src="src/assets/js.png" alt="" />
          <img src="src/assets/react.png" alt="" />
          <img src="src/assets/sass.png" alt="" />
          <img src="src/assets/typescript.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Title;
