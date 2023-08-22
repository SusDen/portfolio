import React from 'react';
import styles from "./first-project.module.scss"
import Header from "./Header/Header";
import Content from "./Content/Content";
import Title from "./Title/Title";
import BackToHomeHeader from "../BackToHomeHeader/BackToHomeHeader";
import Footer from "./Footer/Footer";


const FirstProject = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <BackToHomeHeader/>
      <Header/>
      <Title/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default FirstProject;