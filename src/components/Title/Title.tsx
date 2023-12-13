import React from "react";
import styles from "./title.module.scss";
import Selfie from '/src/assets/avatar.png'
import htmlLogo from '/src/assets/html-5.png';
import cssLogo from '/src/assets/css-3.png';
import jsLogo from '/src/assets/js.png';
import reactLogo from '/src/assets/react.png';
import sassLogo from '/src/assets/sass.png';
import tsLogo from '/src/assets/typescript.png';
import nextLogo from '/src/assets/next-js.png';
import vueLogo from '/src/assets/vuejs.png';

const Title = (): JSX.Element => {
  return (
    <div className={styles.wrap} id="home">
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <span className={styles.bigText}>Front-End React Developer 👋🏼</span>
            <br/>
            <br/>
            <span className={styles.smallText}>
            Hello, I'm Suskyi Denys, an interested Front-end React Developer, I live in Ukraine, Kyiv
            </span>
            <a target="_blank" href="https://goo.gl/maps/qT6BhbdVx4FYXdkL7">
              {" "}
              📍
            </a>
          </div>
          <div className={styles.image}>
            <img src={Selfie} alt="avatar"/>
          </div>
        </div>
        <div className={styles.skills}>
          <span>Tech Stack |</span>
          <img src={htmlLogo} alt="html"/>
          <img src={cssLogo} alt="css"/>
          <img src={jsLogo} alt="js"/>
          <img src={reactLogo} alt="react"/>
          <img src={sassLogo} alt="sass"/>
          <img src={tsLogo} alt="ts"/>
          <img src={nextLogo} alt="next"/>
          <img src={vueLogo} alt="vue"/>
        </div>
      </div>
    </div>
  );
};

export default Title;
