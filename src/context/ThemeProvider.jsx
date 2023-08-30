import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = (props) => {
    console.log(localStorage.getItem("theme"), "theme");
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );
    // eslint-disable-next-line react/prop-types
    const { children } = props;

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, handleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
