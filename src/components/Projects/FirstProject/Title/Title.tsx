import React from 'react';
import styles from "./title.module.scss";
import icon from '/src/assets/icon-wrapper.svg'

const Title = (): JSX.Element => {
    return (
        <div className={styles.title}>
            <div className={styles.titleText}>
                <h1>
                    Your strategy is only as good as <br/>
                    you execute it<span>.</span>
                </h1>
                <div className={styles.titleButton}>
                    Get Started
                    <img src={icon} alt=""/>
                </div>
            </div>
            <div className={styles.titleGradient}>
                <div className={styles.titleImage}>
                </div>
            </div>
        </div>
    );
};

export default Title;