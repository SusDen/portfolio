import React, {useEffect, useState} from "react";
import styles from "./navbar.module.scss";
import {Link} from "react-scroll";
import Menu from "../Menu/Menu";
import {darkThemeNavbarStyles, lightThemeNavbarStyles} from "../../constans";


interface IProps {
  toggleTheme: any;
  theme: any;
}

const items: object[] = [
  {title: "Home", action: 'home'},
  {title: "About", action: 'about'},
  {title: "Projects", action: 'projects'}
]
const Navbar = ({theme, toggleTheme}: IProps): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false)
  const [themeStyles, setThemeStyles] = useState(lightThemeNavbarStyles)
  useEffect(() => {
      if (theme === "dark") {
        setThemeStyles(darkThemeNavbarStyles)
      } else {
        setThemeStyles(lightThemeNavbarStyles)
      }
    }, [theme]
  )
  return (
    <div className={`${styles.main} ${theme}`}>
      <div className={styles.leftSide}>
        <span className={styles.logo} onClick={() => setMenuActive(true)}>Denis.dev</span>
        <span
          className={styles.rain}
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "dark" ? "Let it light" : "Let it rain"}
        </span>
      </div>
      <div className={styles.rightSide}>
        <div style={{filter: `${themeStyles.menuFilter}`}}
             className={styles.burger} onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div>
        <ul>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="home"
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
              background: `${themeStyles.menuBackground}`,
              color: `${themeStyles.menuColor}`,
              fontFamily: "Nunito"
            }}
      />
    </div>
  );
};

export default Navbar;
