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
            Відданий Front-end Developer, який живе в Україні, Київ
          </span>
          <a target="_blank" href="https://goo.gl/maps/qT6BhbdVx4FYXdkL7">
            {" "}
            📍
          </a>
          <br/>
          <br/>
          <span className={styles.smallText}>
            Як Junior Front-end Developer я володію вражаючим арсеналом навичок
            у HTML, CSS, JavaScript, React і SCSS. Я чудово розробляю та
            підтримую адаптивні веб-сайти, які забезпечують безперебійну роботу
            користувачів. Мій досвід полягає в створенні динамічних, привабливих
            інтерфейсів шляхом написання чистого й оптимізованого коду та
            використання передових інструментів і технологій розробки. Я також
            командний гравець, який процвітає, співпрацюючи з міжфункціональними
            командами для створення видатних веб-додатків.
          </span>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
