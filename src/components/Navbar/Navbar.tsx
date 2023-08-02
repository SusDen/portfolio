import React from "react";
import styles from "./navbar.module.scss";
import { animateScroll as scroll, Link } from "react-scroll";

interface IProps {
  toggleTheme: any;
  theme: any;
}

const Navbar = (props: IProps): JSX.Element => {
  let text = "";
  if (props.theme === "dark") {
    text = "Let it light";
  } else {
    text = "Let it rain";
  }
  return (
    <div className={`${styles.main} ${props.theme}`}>
      <div className={styles.leftSide}>
        <span className={styles.logo}>Denis.dev</span>
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
    </div>
  );
};

export default Navbar;
