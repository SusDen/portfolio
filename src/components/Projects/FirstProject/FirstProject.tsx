import React from 'react';
import styles from "./first-project.module.scss"
import BackToHomeHeader from '../BackToHomeHeader/BackToHomeHeader'
import Header from "./Header/Header";
import Title from "./Title/Title";
import Content from "./Content/Content";


const FirstProject = (): JSX.Element => {
    return (
        <div className={styles.wrap}>
            <BackToHomeHeader/>
            <Header/>
            <Title/>
            <Content/>
        </div>
    );
};

export default FirstProject;