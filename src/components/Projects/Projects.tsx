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
              <span>Each project is a unique part of development🧩</span>
            </div>
            <br/>
          </div>
        </div>
        <div className={styles.projects}>
          {block(
            firstProject,
            "https://github.com/SusDen/portfolio/tree/master/src/components/Projects/FirstProject",
            "/firstProject",
            props.theme,
            'Financial Service',
            'Financial services -  economic services provided by the financial industry, which together includes ' +
            'a wide range of firms in the field of services that provide financial management.'
          )}
          {block(
            secondProject,
            "https://github.com/SusDen/portfolio/tree/master/src/components/Projects/SecondProject",
            "/secondProject",
            props.theme,
            'Snake game',
            'The player controls the snake using the direction buttons - up, down, left, right. While crawling, the' +
            ' snake must collect food, for which points are awarded. The goal of the game is to score as many points as' +
            ' possible. The game ends if the snake crashes into the wall or into itself'
          )}
        </div>
      </div>
    </div>
  );
};

const block = (image: string, href: string, link: string, theme: string, title: string, text: string): JSX.Element => {
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
