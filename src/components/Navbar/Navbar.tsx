import React, {useState} from "react";
import styles from "./navbar.module.scss";
import {animateScroll as scroll, Link} from "react-scroll";
import Menu from "../Menu/Menu";

interface IProps {
    toggleTheme: any;
    theme: any;
}

const Navbar = (props: IProps): JSX.Element => {
    const [menuActive, setMenuActive] = useState(false)
    let text: string;
    let menuBackground: string;
    let menuColor: string;
    let menuFilter: string;
    if (props.theme === "dark") {
        text = "Let it light";
        menuBackground = 'black';
        menuColor = 'white';
        menuFilter = 'invert(1)';

    } else {
        text = "Let it rain";
        menuBackground = 'white';
        menuColor = 'black';
        menuFilter = 'invert(0)';

    }
    const items: object[] = [
        {title: "Home", action: 'home'},
        {title: "About", action: 'about'},
        {title: "Projects", action: 'projects'}
    ]
    return (
        <div className={`${styles.main} ${props.theme}`}>
            <div className={styles.leftSide}>
                <span className={styles.logo} onClick={() => setMenuActive(true)}>Denis.dev</span>
                <span
                    className={styles.rain}
                    onClick={() => {
                        props.toggleTheme();
                    }}
                >
          {text}
        </span>
            </div>
            <div className={styles.rightSide}>
                <div style={{filter: `${menuFilter}`}}
                     className={styles.burger} onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
                <ul>
                    <li>
                        <Link
                            onClick={() => {
                                scroll.scrollToTop();
                            }}
                            spy={true}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
            <Menu item={items} header={'Menu'}
                  active={menuActive}
                  setActive={setMenuActive}
                  styles={{
                      background: `${menuBackground}`,
                      color: `${menuColor}`,
                      fontFamily: "Nunito"
                  }}
            />
        </div>
    );
};

export default Navbar;
