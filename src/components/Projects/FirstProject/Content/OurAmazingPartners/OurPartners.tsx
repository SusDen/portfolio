import React from 'react';
import styles from './our-parrents.module.scss'
import Block from "./ImageBlock/Block";

const OurPartners = (): JSX.Element => {


  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <div className={styles.titleBlock}>
          <div className={styles.titleBigText}>
            Our Amazing Partners<span>.</span>
          </div>
          <div className={styles.titleSmallText}>
            short introduction
          </div>
        </div>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
      </div>
    </div>
  );
};

export default OurPartners;