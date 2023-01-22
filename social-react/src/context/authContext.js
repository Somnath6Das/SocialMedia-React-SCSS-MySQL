
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
    profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
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