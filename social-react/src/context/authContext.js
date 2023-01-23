
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // first visitor (console>Application>local storage) value will be null,
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
   setCurrentUser({
    id: 1,
    name: "Somnath Das",
    profilePic: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600",
   });
    };

    useEffect(() => {
        // first visitor (console>Application>local storage) write the value  dark mode in his browser.
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{ currentUser, login }}>
        {children}
    </AuthContext.Provider>
}