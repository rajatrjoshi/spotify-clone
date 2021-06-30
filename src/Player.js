import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar />
            <Body />
            </div>
            
            < Footer />
        </div>
    )
}

export default Player;
