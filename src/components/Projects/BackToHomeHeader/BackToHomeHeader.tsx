import React from 'react';
import styles from './back-to-home-header.module.scss'
import {NavLink} from "react-router-dom";

const BackToHomeHeader = (): JSX.Element => {
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <div className={styles.button}>
                    <NavLink to='/'>Back to the main page</NavLink>
                </div>
            </div>
        </div>
    );
};

export default BackToHomeHeader;