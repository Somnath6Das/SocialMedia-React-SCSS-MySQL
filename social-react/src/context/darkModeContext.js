
import { createContext,useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    // first visitor (Application>local storage) value will be false,
    const [ darkMode, setDarkMode ] = useState(localStorage.getItem("darkMode") || false);



    useEffect(()=> {
        // first visitor (Application>local storage) write the value  dark mode in his browser.
        localStorage.setItem("darkMode", darkMode);
    },[darkMode])
}