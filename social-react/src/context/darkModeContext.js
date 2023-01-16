
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    // first visitor (console>Application>local storage) value will be false,
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    //toggle dark-mode with bottom.
    const toggle = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        // first visitor (console>Application>local storage) write the value  dark mode in his browser.
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return <DarkModeContext.Provider value={{ darkMode, toggle }}>
        {children}
    </DarkModeContext.Provider>
}