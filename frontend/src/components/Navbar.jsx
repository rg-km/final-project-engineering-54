import React from "react"
// import AuthBtn from "./AuthBtn";

import NoAuthBtn from "./auth/NoAuthBtn";
import { classes } from "../utils/Utils";
import "../styles/component/_navbar.scss";
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <nav id="navbar_component">   
                <div id="nav_brand">
                    <h1 className="poppins">
                        <NavLink to="/">
                            Codeswer
                            {/* <img src="../assets/images/brand-ori.png" width="60" alt="logo" /> */}
                        </NavLink>        
                    </h1>
                </div>

                <div id="nav_icon" onClick={open}  className={
                    classes(isOpen ? "open" : false, "space-y-2")
                }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="nav_links">
                    <ul id="nav_links_item" className="poppins">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                } to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                        isActive ? 'nav-active' : ''
                                } to="/docs">
                                How It Works
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs"
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }>
                                Blog
                            </NavLink>
                        </li>
                        <NoAuthBtn classname="noauth-links" />
                        {/* <AuthBtn classname="auth-links">
                            <h1 className="text-semibold text-[1rem] inline mr-2">Aditya Rizqi</h1>
                        </AuthBtn> */}
                    </ul>
                </div>

                <div id="nav_autentikasi">
                    <NoAuthBtn classname={"noauth-nav"}/>
                    {/* <AuthBtn classname={"auth-nav"}>
                        <img className="my-account rounded-full shadow-sm inline" src="/logo192.png" alt="User" width="40"/>
                    </AuthBtn> */}
                </div>
            </nav>
        </header>
    )
}