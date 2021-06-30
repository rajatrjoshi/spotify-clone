import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js";

function Sidebar() {
    return (
        <div className="sidebar">
            <img 
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>

            <SidebarOption title="Home"/>
            <SidebarOption title="Search"/>
            <SidebarOption title="Your Library"/>
            <SidebarOption title="Home"/>

        </div>
    )
}

export default Sidebar
