import React from 'react';
import styles from "./header.module.scss";
import logo from '/src/assets/firstProjectLogo.svg'
import icon from '/src/assets/icon-wrapper.svg'

const Header = (): JSX.Element => {
    return (
        <header>
            <div className={styles.headerLogo}>
                <img src={logo} alt='logo'></img>
            </div>
            <div className={styles.headerButtons}>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Explore
                    </li>
                    <li>
                        Get started
                        <img src={icon} alt=""/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;