import React from "react";
import styles from "./projects.module.scss";
import {NavLink} from "react-router-dom";
import firstProject from "/src/assets/firstProject.png";
import secondProject from "/src/assets/secondProject.png";
import linkIcon from "/src/assets/linkIcon.png";
import gitHubIcon from "/src/assets/gitHubIcon.png";

interface IProps {
  theme: any;
}

const ScrollToTop = () => {
  scrollTo(0, 0)
}
// TODO при увелечении проектов перенести в отдельный компонент снизу
const Projects = (props: IProps): JSX.Element => {
  return (
    <div className={styles.wrap} id="projects">
      <div className={styles.main}>
        <div className={styles.textBlock}>
          <div className={styles.portfolio}>
            <span>PORTFOLIO</span>
          </div>
          <div className={styles.textTitle}>
            <span>Кожен проект унікальна частина розробки🧩</span>
          </div>
          <br/>
          <div className={styles.project}>
            <img className={styles.image} src={firstProject} alt=""/>
            <div className={styles.projectTextBlock}>
              <div className={styles.projectText}>
                <span>Financial Service</span>
                <br/>
                <br/>
                <div className={styles.text}>
                  Фінансові сервiс – це економічні послуги, що надаються фінансовою індустрією, яка
                  разом охоплюють широкий спектр фірм сфери послуг, які надають фінансові
                  управління.
                </div>
                <br/>
                <br/>
                <span>React</span> <span>SCSS</span>
              </div>
              <div className={`${styles.projectButton} `}>
                <a className={props.theme}
                   href="https://github.com/SusDen/portfolio/tree/master/src/components/Projects/FirstProject"
                   target="_blank">GitHub <img
                  src={gitHubIcon} alt=""/></a>
                <NavLink className={props.theme} to="/firstProject" onClick={ScrollToTop}>
                  Live Demo
                  <img src={linkIcon}
                       alt=""/>
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectTextBlock}>
              <div className={styles.projectText}>
                <span>Snake game</span>
                <br/>
                <br/>
                <div className={styles.text}>
                  Гравець управляє змійкою за допомогою кнопок напрямку - вгору, вниз, ліворуч, праворуч. Повзаючи,
                  змійка має збирати їжу, за яку нараховуються окуляри. Мета гри – набрати якнайбільше очок. Гра
                  закінчується, якщо змійка врізається в стіну або в себе
                </div>
                <br/>
                <br/>
                <span>React</span> <span>Typescript</span>
              </div>
              <div className={styles.projectButton}>
                <a className={props.theme}
                   href="https://github.com/SusDen/portfolio/tree/master/src/components/Projects/SecondProject">GitHub <img
                  src={gitHubIcon} alt=""/></a>
                <NavLink className={props.theme} to="/secondProject" onClick={ScrollToTop}>
                  Live Demo
                  <img src={linkIcon}
                       alt=""/>
                </NavLink>
              </div>
            </div>
            <img className={styles.image} src={secondProject} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
