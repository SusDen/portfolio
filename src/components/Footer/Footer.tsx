import React from 'react';
import styles from './footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <span>Copyright &copy; 2023 All rights reserved</span>
    </div>
  );
};

export default Footer;