import React, { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import DarkMode from "../../../Components/DarkMode.js/DarkMode";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false); 
    
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }; 
 
      return (
        <header className="header">
        <div className="header__left">
          <Link to="/">
            <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDb logo" />
          </Link>
        </div>
        <div className="header__right">
          <i className={showMenu ? "fas fa-times menu-icon" : "fas fa-bars menu-icon"} onClick={toggleMenu} />
          <div className={showMenu ? "header__links active" : "header__links"}>
            <Link className="nav__link" to="/" onClick={toggleMenu}><span>Blog</span></Link>
            <Link className="nav__link" to="/" onClick={toggleMenu}><span>Community</span></Link>
            <Link className="nav__link" to="/" onClick={toggleMenu}><span>About</span></Link>
          </div>
        </div>
      </header>
)
}

export default Header