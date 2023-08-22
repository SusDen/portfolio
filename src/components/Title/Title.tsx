import React from "react";
import styles from "./title.module.scss";
import Selfie from '/src/assets/avatar.png'
import htmlLogo from '/src/assets/html-5.png';
import cssLogo from '/src/assets/css-3.png';
import jsLogo from '/src/assets/js.png';
import reactLogo from '/src/assets/react.png';
import scssLogo from '/src/assets/sass.png';
import tsLogo from '/src/assets/typescript.png';

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
              Привіт, я Суський Денис, зацiкавлений Front-end React Developer,
              живу в Україні, Київ
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
          <img src={htmlLogo} alt=""/>
          <img src={cssLogo} alt=""/>
          <img src={jsLogo} alt=""/>
          <img src={reactLogo} alt=""/>
          <img src={scssLogo} alt=""/>
          <img src={tsLogo} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Title;
