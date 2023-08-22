import "./app.scss";
import Title from "./components/Title/Title";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import {useState} from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {fillArray} from "./constans";


function Home(): JSX.Element {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };


  return (
    <div className={`App ${theme}`}>
      {theme === "dark"
        && fillArray(200).map(() => (
          <i
            style={{
              minWidth: `1px`,
              width: `${Math.random() * 5}px`,
              left: `${Math.floor(Math.random() * window.innerWidth)}px`,
              animationDelay: `${Math.random() * -20}s`,
            }}
          ></i>
        ))}
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Title/>
      <AboutMe theme={theme}/>
      <Projects theme={theme}/>
      <Footer/>
    </div>
  );
}

export default Home;
