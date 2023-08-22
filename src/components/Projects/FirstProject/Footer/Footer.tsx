import React from 'react';
import styles from './footer.module.scss';
import logo from '/src/assets/firstProjectLogo.svg'
import appStore from '/src/assets/firstProjectIconAppStore.svg'
import googlePlay from '/src/assets/firstProjectIconGooglePlay.svg'

const Footer = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>

        <div className={styles.main}>
          <div className={styles.footer}>
            <div className={styles.list}>
              <ul>
                <li><img src={logo} alt=""/></li>
                <li>+1-234-567-890</li>
                <li>Rockefeller PlazaNew York, NY 10112</li>
              </ul>
            </div>
            <div className={styles.list}>
              <ul>
                <li>Learn More</li>
                <li>How it work</li>
                <li>Who we are</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className={styles.list}>
              <ul>
                <li>Social</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Pinterest</li>
                <li>Linkedin</li>
              </ul>
            </div>
            <div className={styles.list}>
              <ul>
                <li>Downloads</li>
                <li><img src={appStore} alt=""/></li>
                <li><img src={googlePlay} alt=""/></li>
              </ul>
            </div>

          </div>
        </div>
        <div className={styles.under}>
          <div className={styles.line}></div>
          <div className={styles.underList}>
            <ul>
              <li>Copyright © 2020 Company Name All rights reserved</li>
              <li>Term of Use</li>
              <li>Privacy Police</li>
              <li>Cardholder Agreement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
