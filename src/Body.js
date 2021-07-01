import React from 'react';
import "./Body.css";
import Header from "./Header.js";

function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src="https://i.scdn.co/image/ab67706f000000039cc4931bc9b9e35128728127" alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>This is Anne Marie</h2>
                    <p>all songs of Anne Marie at a single place.... dont stop listening, dont stop simping</p>
                </div>
            </div>
        </div>
    )
}

export default Body
