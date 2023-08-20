import React from "react";
import styles from "./projects.module.scss";
import {NavLink} from "react-router-dom";
import firstProject from "/src/assets/firstProject.png";
import linkIcon from "/src/assets/linkIcon.png";
import gitHubIcon from "/src/assets/gitHubIcon.png";

interface IProps {
    theme: any;
}

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
                                <NavLink className={props.theme} to="/firstProject" onClick={() => scrollTo(0, 0)}>
                                    Live Demo
                                    <img src={linkIcon}
                                         alt=""/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/*<div className={styles.project}>*/}
                    {/*    <div className={styles.projectTextBlock}>*/}
                    {/*        <div className={styles.projectText}>*/}
                    {/*            <span>Project in progress</span>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <div className={styles.text}>*/}
                    {/*                Проект в розробцi, але ви можете найняти мене вже зараз!*/}
                    {/*            </div>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <span>-</span> <span>-</span>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.projectButton}>*/}
                    {/*            <a className={props.theme} href="">GitHub <img src={gitHubIcon} alt=""/></a>*/}
                    {/*            <NavLink className={props.theme} to="" onClick={() => scrollTo(0, 0)}>*/}
                    {/*                Live Demo*/}
                    {/*                <img src={linkIcon}*/}
                    {/*                     alt=""/>*/}
                    {/*            </NavLink>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <img src={inProgress} alt=""/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Projects;
