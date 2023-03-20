import React from 'react';
import "./DarkMode.css"
import {BsMoonStarsFill, BsFillSunFill} from "react-icons/bs"

const DarkMode = () => {

    const setDarkMode = () =>{
        document.querySelector("body").setAttribute("data-theme", "dark")
    };

    const setLightMode = () =>{
        document.querySelector("body").setAttribute("data-theme", "light")
    };

    const toggleTheme = e =>{
        if(e.target.checked) setDarkMode ()
        else setLightMode()
    }

    setDarkMode()

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
            <BsMoonStarsFill></BsMoonStarsFill>
            <BsFillSunFill></BsFillSunFill>
            </label>
        </div>
    );
};

export default DarkMode;