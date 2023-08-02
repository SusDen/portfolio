import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import {useState} from "react";

function Home(): JSX.Element {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    let amount: number = 200;
    let array: number[] = [];
    for (let i = 0; i < amount; i++) {
        array.push(i);
    }
    return (
        <div className={`App ${theme}`}>
            {theme === "dark"
                ? array.map(() => (
                    <i
                        style={{
                            minWidth: `1px`,
                            width: `${Math.random() * 5}px`,
                            left: `${Math.floor(Math.random() * window.innerWidth)}px`,
                            animationDelay: `${Math.random() * -20}s`,
                        }}
                    ></i>
                ))
                : null}
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
            <Title/>
            <AboutMe theme={theme}/>
            <Projects/>
        </div>
    );
}

export default Home;
