import React, { useState } from "react";

export default function Header({isDarkMode,onDarkModeClick}){
    let [newDarkMode, setDarkMode] = useState(isDarkMode)

    function setDarkModeText(){
        newDarkMode = !newDarkMode
        onDarkModeClick();
        setDarkMode(newDarkMode)
    }

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={setDarkModeText}>
            {newDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}