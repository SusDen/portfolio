import React, {useMemo} from "react";
import styles from "./about-me.module.scss";
import table from '/src/assets/table2.jpg'

interface IProps {
  theme: any;
}

const AboutMe = (props: IProps): JSX.Element => {
  const text = "FRONT-END DEVELOPER ";
  let newText = useMemo(() => {
    return text
      .split("")
      .map((char, i) => (
        <span style={{transform: `rotate(${i * 18}deg)`}} key={i}>{char}</span>
      ));
  }, [])
  return (
    <div className={styles.wrap} id="about">
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <img src={table} alt=""/>
        </div>
        <div className={styles.break}></div>
        <div className={styles.circleWrap}>
          <div className={`${styles.circle} ${props.theme}`}>
            <div className={styles.image}></div>
            <div className={styles.imageText}>{newText}</div>
          </div>
        </div>
        <div className={styles.break}></div>
        <div className={styles.rightSide}>
          <span className={styles.aboutMe}>ABOUT ME</span>
          <br/>
          <span className={styles.bitText}>
            Dedicated Front-end Developer living in Ukraine, Kyiv
          </span>
          <a target="_blank" href="https://goo.gl/maps/qT6BhbdVx4FYXdkL7">
            {" "}
            📍
          </a>
          <br/>
          <br/>
          <span className={styles.smallText}>
            As a Junior Front-end Developer, I have an impressive arsenal of skills in HTML, CSS, JavaScript, React and
            Next. I excel at designing and maintaining responsive websites that provide a smooth user experience. My
            expertise is in creating dynamic, attractive interfaces by writing clean and optimized code and using
            advanced development tools and technologies. I'm also a team player who thrives collaborating with
            cross-functional teams to build outstanding web applications.
          </span>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
