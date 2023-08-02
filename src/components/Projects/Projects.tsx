import React from "react";
import styles from "./projects.module.scss";
import {NavLink} from "react-router-dom";

const Projects = (): JSX.Element => {
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
                    <div>
                        <NavLink to="/firstProject">First</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
