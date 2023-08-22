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
        <div className={styles.textBlockWrap}>
          <div className={styles.textBlock}>
            <div className={styles.portfolio}>
              <span>PORTFOLIO</span>
            </div>
            <div className={styles.textTitle}>
              <span>Кожен проект унікальна частина розробки🧩</span>
            </div>
            <br/>
          </div>
        </div>
        <div className={styles.projects}>
          {Block(
            firstProject,
            "https://github.com/SusDen/portfolio/tree/master/src/components/Projects/FirstProject",
            "/firstProject",
            props.theme,
            'Financial Service',
            'Фінансові сервiс – це економічні послуги, що надаються фінансовою індустрією, яка разом охоплюють ' +
            'широкий спектр фірм сфери послуг, які надають фінансові управління.'
          )}
          {Block(
            secondProject,
            "https://github.com/SusDen/portfolio/tree/master/src/components/Projects/SecondProject",
            "/secondProject",
            props.theme,
            'Snake game',
            'Гравець управляє змійкою за допомогою кнопок напрямку - вгору, вниз, ліворуч, праворуч. Повзаючи змійка ' +
            'має збирати їжу, за яку нараховуються окуляри. Мета гри – набрати якнайбільше очок. Гра закінчується, ' +
            'якщо змійка врізається в стіну або в себе'
          )}
        </div>
      </div>
    </div>
  );
};

const Block = (image: string, href: string, link: string, theme: string, title: string, text: string): JSX.Element => {
  return (
    <div className={styles.project}>
      <img className={styles.image} src={image} alt=""/>
      <div className={styles.projectTextBlock}>
        <div className={styles.projectText}>
          <span>{title}</span>
          <br/>
          <br/>
          <div className={styles.text}>
            {text}
          </div>
          <br/>
          <br/>
          <span>React</span> <span>Typescript</span>
        </div>
        <div className={styles.projectButton}>
          <a className={theme}
             href={href}>GitHub <img
            src={gitHubIcon} alt=""/></a>
          <NavLink className={theme} to={link} onClick={ScrollToTop}>
            Live Demo
            <img src={linkIcon}
                 alt=""/>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default Projects;
