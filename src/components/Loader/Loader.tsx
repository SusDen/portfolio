import React from 'react';
import styles from './loader.module.scss';

const Loader = (): JSX.Element => {
    return (
        <div className={styles.main}>
            <div className={styles.loader}/>
        </div>
    );
};

export default Loader;