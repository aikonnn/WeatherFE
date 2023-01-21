import React from "react";
import './NavBar.css'

function NavBar(){

    return (<div className="navbar-container">
        <div className="navbar-left-container">
        <h1 className="navber-title">
            WEATHER
        </h1>
        <div className="navbar-small-text">
            enterprise
        </div>
        </div>
        <div className="navbar-button-cont">
            <div className="navbar-button">
                login
            </div>
        </div>
    </div>)
}

export default NavBar;