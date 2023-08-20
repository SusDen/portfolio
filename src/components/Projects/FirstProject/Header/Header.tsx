import React, {useState} from 'react';
import styles from "./header.module.scss";
import logo from '/src/assets/firstProjectLogo.svg'
import icon from '/src/assets/icon-wrapper.svg'
import Menu from "../../../Menu/Menu";

const Header = (): JSX.Element => {
    const [menuActive, setMenuActive] = useState(false)
    const items: string[] = ['Home', 'Explore']
    return (
        <header>
            <div className={styles.leftSide}>
                <div className={styles.burger} onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
                <div className={styles.headerLogo}>
                    <img src={logo} alt='logo'></img>
                </div>
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
            <Menu item={items} header={'Simple burger'} active={menuActive} setActive={setMenuActive}
                  styles={{background: "white", color: "orange"}}/>
        </header>
    );
};

export default Header;